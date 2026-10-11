"""Loyalty Cards: a sidebar panel to keep loyalty cards in Home Assistant."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.translation import async_get_translations
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_integration

from . import websocket_api
from .const import DOMAIN, JS_FILE, PANEL_ELEMENT, PANEL_ICON, PANEL_URL, STATIC_URL
from .store import CardStore

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Load the store, serve the frontend and register commands once per start."""
    store = CardStore(hass)
    await store.async_load()
    hass.data[DOMAIN] = store
    websocket_api.async_register(hass)
    await hass.http.async_register_static_paths(
        [StaticPathConfig(STATIC_URL, str(Path(__file__).parent / "www"), False)]
    )
    return True


async def _js_url(hass: HomeAssistant) -> str:
    integration = await async_get_integration(hass, DOMAIN)
    return f"{STATIC_URL}/{JS_FILE}?v={integration.version}"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Add the sidebar panel and the Lovelace card."""
    url = await _js_url(hass)
    language = hass.config.language
    titles = await async_get_translations(hass, language, "title", [DOMAIN])
    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=PANEL_URL,
        webcomponent_name=PANEL_ELEMENT,
        sidebar_title=titles.get(f"component.{DOMAIN}.title", "Loyalty Cards"),
        sidebar_icon=PANEL_ICON,
        module_url=url,
    )
    frontend.add_extra_js_url(hass, url)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL)
    frontend.remove_extra_js_url(hass, await _js_url(hass))
    return True
