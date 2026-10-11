"""Config flow and panel registration."""

from homeassistant.components.frontend import DATA_PANELS
from homeassistant.data_entry_flow import FlowResultType
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.loyalty_cards.const import DOMAIN, PANEL_URL


async def test_single_instance(hass):
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": "user"})
    assert result["type"] is FlowResultType.FORM
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {})
    assert result["type"] is FlowResultType.CREATE_ENTRY
    await hass.async_block_till_done()

    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": "user"})
    assert result["type"] is FlowResultType.ABORT
    assert result["reason"] == "single_instance_allowed"


async def test_panel_registered_and_removed(hass, setup_integration):
    assert PANEL_URL in hass.data[DATA_PANELS]
    assert await hass.config_entries.async_unload(setup_integration.entry_id)
    assert PANEL_URL not in hass.data[DATA_PANELS]


async def test_panel_title_translated(hass):
    hass.config.language = "it"
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    assert hass.data[DATA_PANELS][PANEL_URL].sidebar_title == "Carte fedeltà"
