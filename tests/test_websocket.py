"""WebSocket commands."""

import base64

import pytest

from custom_components.loyalty_cards.const import LOGO_MAX_BYTES

CARD = {
    "name": "Coop",
    "number": "2012345678901",
    "format": "ean13",
    "color": "#D50F25",
}


def logo(size: int) -> str:
    return "data:image/webp;base64," + base64.b64encode(b"x" * size).decode()


async def send(client, **msg):
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def test_crud(hass, setup_integration, hass_ws_client):
    client = await hass_ws_client(hass)
    res = await send(client, type="loyalty_cards/create", **CARD)
    assert res["success"], res
    card = res["result"]
    assert card["color"] == "#d50f25"
    assert card["visibility"] == "shared"
    assert card["logo"] is None

    res = await send(client, type="loyalty_cards/update", card_id=card["id"], notes="Famiglia")
    assert res["result"]["notes"] == "Famiglia"

    res = await send(client, type="loyalty_cards/list")
    assert [c["notes"] for c in res["result"]["cards"]] == ["Famiglia"]

    res = await send(client, type="loyalty_cards/delete", card_id=card["id"])
    assert res["success"]
    res = await send(client, type="loyalty_cards/delete", card_id=card["id"])
    assert res["error"]["code"] == "not_found"


@pytest.mark.parametrize(
    "bad",
    [
        {"name": ""},
        {"name": "x" * 61},
        {"number": "1" * 513},
        {"format": "ean14"},
        {"color": "red"},
        {"visibility": "public"},
        {"notes": "x" * 1001},
        {"logo": "https://example.com/logo.png"},
        {"logo": logo(LOGO_MAX_BYTES + 1)},
    ],
)
async def test_rejects_invalid(hass, setup_integration, hass_ws_client, bad):
    client = await hass_ws_client(hass)
    res = await send(client, type="loyalty_cards/create", **{**CARD, **bad})
    assert res["error"]["code"] == "invalid_format"


async def test_accepts_max_logo(hass, setup_integration, hass_ws_client):
    client = await hass_ws_client(hass)
    res = await send(client, type="loyalty_cards/create", **CARD, logo=logo(LOGO_MAX_BYTES))
    assert res["success"]


async def test_subscribe_and_visibility(
    hass, setup_integration, hass_ws_client, hass_admin_user, hass_read_only_access_token
):
    owner = await hass_ws_client(hass)
    other = await hass_ws_client(hass, hass_read_only_access_token)

    sub = await send(other, type="loyalty_cards/subscribe")
    assert sub["success"]

    res = await send(owner, type="loyalty_cards/create", **CARD)
    card = res["result"]
    event = await other.receive_json()
    assert event["event"] == {"type": "added", "card": card}

    await send(owner, type="loyalty_cards/update", card_id=card["id"], visibility="private")
    event = await other.receive_json()
    assert event["event"]["type"] == "removed"

    res = await send(other, type="loyalty_cards/list")
    assert res["result"]["cards"] == []
    res = await send(other, type="loyalty_cards/update", card_id=card["id"], name="x")
    assert res["error"]["code"] == "not_found"
