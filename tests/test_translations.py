"""Every backend translation has exactly the keys of strings.json."""

import json
from pathlib import Path

import pytest

ROOT = Path(__file__).parents[1] / "custom_components" / "loyalty_cards"
LANGUAGES = ["de", "en", "es", "fr", "it", "nl", "pl", "pt"]


def keys(data: dict, prefix: str = "") -> set[str]:
    out = set()
    for key, value in data.items():
        out |= keys(value, f"{prefix}{key}.") if isinstance(value, dict) else {prefix + key}
    return out


def test_all_languages_present():
    assert sorted(p.stem for p in (ROOT / "translations").glob("*.json")) == LANGUAGES


@pytest.mark.parametrize("language", LANGUAGES)
def test_same_keys(language):
    strings = json.loads((ROOT / "strings.json").read_text())
    translation = json.loads((ROOT / "translations" / f"{language}.json").read_text())
    assert keys(translation) == keys(strings)
