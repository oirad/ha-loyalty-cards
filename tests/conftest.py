"""Fixtures for Loyalty Cards tests."""

import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.loyalty_cards.const import DOMAIN


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    yield


@pytest.fixture
async def setup_integration(hass):
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry
