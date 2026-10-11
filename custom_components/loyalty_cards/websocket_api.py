"""WebSocket commands for Loyalty Cards."""

from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import CREATE_SCHEMA, DOMAIN, UPDATE_SCHEMA
from .store import Card, CardNotFound, CardStore, is_visible

type Msg = dict[str, Any]
type Conn = websocket_api.ActiveConnection


@callback
def async_register(hass: HomeAssistant) -> None:
    for command in (ws_list, ws_create, ws_update, ws_delete, ws_subscribe):
        websocket_api.async_register_command(hass, command)


def _store(hass: HomeAssistant) -> CardStore:
    return hass.data[DOMAIN]


@websocket_api.websocket_command({vol.Required("type"): "loyalty_cards/list"})
@callback
def ws_list(hass: HomeAssistant, connection: Conn, msg: Msg) -> None:
    cards = _store(hass).cards(connection.user.id)
    connection.send_result(msg["id"], {"cards": cards})


@websocket_api.websocket_command(
    {vol.Required("type"): "loyalty_cards/create", **CREATE_SCHEMA}
)
@callback
def ws_create(hass: HomeAssistant, connection: Conn, msg: Msg) -> None:
    fields = {k: v for k, v in msg.items() if k not in ("id", "type")}
    card = _store(hass).create(connection.user.id, fields)
    connection.send_result(msg["id"], card)


@websocket_api.websocket_command(
    {vol.Required("type"): "loyalty_cards/update", **UPDATE_SCHEMA}
)
@callback
def ws_update(hass: HomeAssistant, connection: Conn, msg: Msg) -> None:
    fields = {k: v for k, v in msg.items() if k not in ("id", "type", "card_id")}
    try:
        card = _store(hass).update(msg["card_id"], connection.user.id, fields)
    except CardNotFound:
        connection.send_error(msg["id"], websocket_api.ERR_NOT_FOUND, "Card not found")
        return
    connection.send_result(msg["id"], card)


@websocket_api.websocket_command(
    {vol.Required("type"): "loyalty_cards/delete", vol.Required("card_id"): str}
)
@callback
def ws_delete(hass: HomeAssistant, connection: Conn, msg: Msg) -> None:
    try:
        _store(hass).delete(msg["card_id"], connection.user.id)
    except CardNotFound:
        connection.send_error(msg["id"], websocket_api.ERR_NOT_FOUND, "Card not found")
        return
    connection.send_result(msg["id"], {})


@websocket_api.websocket_command({vol.Required("type"): "loyalty_cards/subscribe"})
@callback
def ws_subscribe(hass: HomeAssistant, connection: Conn, msg: Msg) -> None:
    user_id = connection.user.id

    @callback
    def forward(old: Card | None, new: Card | None) -> None:
        was = old is not None and is_visible(old, user_id)
        now = new is not None and is_visible(new, user_id)
        if now:
            event = {"type": "updated" if was else "added", "card": new}
        elif was:
            event = {"type": "removed", "card": old}
        else:
            return
        connection.send_message(websocket_api.event_message(msg["id"], event))

    connection.subscriptions[msg["id"]] = _store(hass).subscribe(forward)
    connection.send_result(msg["id"])
