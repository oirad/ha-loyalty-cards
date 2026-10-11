"""Constants and card schemas for Loyalty Cards.

Mirrors frontend/src/types.ts field by field.
"""

import base64
import binascii
import re

import voluptuous as vol

DOMAIN = "loyalty_cards"

PANEL_URL = "loyalty-cards"
PANEL_ELEMENT = "loyalty-cards-panel"
PANEL_ICON = "mdi:wallet-membership"
STATIC_URL = "/loyalty_cards_static"
JS_FILE = "loyalty-cards-panel.js"

FORMATS = (
    "ean13",
    "ean8",
    "upca",
    "upce",
    "code128",
    "code39",
    "itf",
    "codabar",
    "qr",
    "datamatrix",
    "pdf417",
    "aztec",
)
VISIBILITIES = ("shared", "private")

NAME_MAX = 60
NUMBER_MAX = 512
NOTES_MAX = 1000
LOGO_MAX_BYTES = 40 * 1024

# Safari cannot encode WebP from a canvas, so PNG and JPEG are accepted too.
_LOGO_RE = re.compile(r"^data:image/(webp|png|jpeg);base64,([A-Za-z0-9+/=]+)$")
_COLOR_RE = r"^#[0-9a-fA-F]{6}$"


def _logo(value: str | None) -> str | None:
    """Validate a logo data URL and its decoded size."""
    if value is None:
        return None
    match = _LOGO_RE.match(str(value))
    if not match:
        raise vol.Invalid("logo must be an image data URL")
    try:
        size = len(base64.b64decode(match.group(2), validate=True))
    except binascii.Error as err:
        raise vol.Invalid("logo is not valid base64") from err
    if size > LOGO_MAX_BYTES:
        raise vol.Invalid(f"logo larger than {LOGO_MAX_BYTES} bytes")
    return value


def _text(min_len: int, max_len: int) -> vol.All:
    return vol.All(str, vol.Strip, vol.Length(min=min_len, max=max_len))


# Editable fields; required-ness is applied per command.
CARD_FIELDS = {
    "name": _text(1, NAME_MAX),
    "number": _text(1, NUMBER_MAX),
    "format": vol.In(FORMATS),
    "color": vol.All(str, vol.Match(_COLOR_RE), vol.Lower),
    "logo": _logo,
    "notes": vol.All(str, vol.Length(max=NOTES_MAX)),
    "visibility": vol.In(VISIBILITIES),
}

CREATE_SCHEMA = {
    vol.Required("name"): CARD_FIELDS["name"],
    vol.Required("number"): CARD_FIELDS["number"],
    vol.Required("format"): CARD_FIELDS["format"],
    vol.Required("color"): CARD_FIELDS["color"],
    vol.Optional("logo", default=None): CARD_FIELDS["logo"],
    vol.Optional("notes", default=""): CARD_FIELDS["notes"],
    vol.Optional("visibility", default="shared"): CARD_FIELDS["visibility"],
}

UPDATE_SCHEMA = {
    vol.Required("card_id"): str,
    **{vol.Optional(key): validator for key, validator in CARD_FIELDS.items()},
}
