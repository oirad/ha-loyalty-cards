"""CardStore persistence and visibility."""

from datetime import timedelta

import pytest
from pytest_homeassistant_custom_component.common import async_fire_time_changed

from custom_components.loyalty_cards.store import CardNotFound, CardStore

FIELDS = {
    "name": "Coop",
    "number": "2012345678901",
    "format": "ean13",
    "color": "#d50f25",
    "logo": None,
    "notes": "",
    "visibility": "shared",
}


async def test_persists_after_reload(hass, hass_storage, freezer):
    store = CardStore(hass)
    await store.async_load()
    card = store.create("alice", FIELDS)
    store.create("alice", {**FIELDS, "name": "arcaplanet"})
    freezer.tick(timedelta(seconds=2))
    async_fire_time_changed(hass)
    await hass.async_block_till_done()

    reloaded = CardStore(hass)
    await reloaded.async_load()
    assert [c["name"] for c in reloaded.cards("bob")] == ["arcaplanet", "Coop"]
    assert reloaded.cards("bob")[1] == card


async def test_private_cards(hass):
    store = CardStore(hass)
    await store.async_load()
    card = store.create("alice", {**FIELDS, "visibility": "private"})
    assert store.cards("bob") == []
    with pytest.raises(CardNotFound):
        store.update(card["id"], "bob", {"name": "x"})
    with pytest.raises(CardNotFound):
        store.delete(card["id"], "bob")
    store.delete(card["id"], "alice")
    assert store.cards("alice") == []


async def test_making_private_takes_ownership(hass):
    store = CardStore(hass)
    await store.async_load()
    card = store.create("alice", FIELDS)
    card = store.update(card["id"], "bob", {"visibility": "private"})
    assert card["owner_id"] == "bob"
    assert store.cards("alice") == []
