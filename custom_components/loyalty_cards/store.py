"""Persistent card storage."""

from __future__ import annotations

from collections.abc import Callable
from typing import Any
import uuid

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import DOMAIN

type Card = dict[str, Any]
type Listener = Callable[[Card | None, Card | None], None]


class CardNotFound(Exception):
    """Card missing or not visible to the user."""


def is_visible(card: Card, user_id: str) -> bool:
    """Return True if the user can see and manage the card."""
    return card["visibility"] == "shared" or card["owner_id"] == user_id


class CardStore:
    """Cards kept in .storage/loyalty_cards."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._store: Store[dict[str, list[Card]]] = Store(hass, 1, DOMAIN)
        self._cards: dict[str, Card] = {}
        self._listeners: set[Listener] = set()

    async def async_load(self) -> None:
        data = await self._store.async_load() or {}
        self._cards = {card["id"]: card for card in data.get("cards", [])}

    def cards(self, user_id: str) -> list[Card]:
        """Cards visible to the user, sorted by name."""
        return sorted(
            (c for c in self._cards.values() if is_visible(c, user_id)),
            key=lambda c: c["name"].casefold(),
        )

    def _get(self, card_id: str, user_id: str) -> Card:
        card = self._cards.get(card_id)
        if card is None or not is_visible(card, user_id):
            raise CardNotFound
        return card

    @callback
    def create(self, user_id: str, fields: dict[str, Any]) -> Card:
        now = dt_util.utcnow().isoformat()
        card = {
            **fields,
            "id": uuid.uuid4().hex,
            "owner_id": user_id,
            "created_at": now,
            "updated_at": now,
        }
        self._cards[card["id"]] = card
        self._changed(None, card)
        return card

    @callback
    def update(self, card_id: str, user_id: str, fields: dict[str, Any]) -> Card:
        old = self._get(card_id, user_id)
        card = {**old, **fields, "updated_at": dt_util.utcnow().isoformat()}
        # Whoever makes a card private becomes its owner.
        if fields.get("visibility") == "private":
            card["owner_id"] = user_id
        self._cards[card_id] = card
        self._changed(old, card)
        return card

    @callback
    def delete(self, card_id: str, user_id: str) -> None:
        old = self._get(card_id, user_id)
        del self._cards[card_id]
        self._changed(old, None)

    @callback
    def subscribe(self, listener: Listener) -> Callable[[], None]:
        self._listeners.add(listener)
        return lambda: self._listeners.discard(listener)

    @callback
    def _changed(self, old: Card | None, new: Card | None) -> None:
        self._store.async_delay_save(
            lambda: {"cards": list(self._cards.values())}, 1
        )
        for listener in list(self._listeners):
            listener(old, new)
