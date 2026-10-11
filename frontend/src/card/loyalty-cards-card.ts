import { mdiFullscreen } from "@mdi/js";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { watchCards } from "../api";
import { chip, tile, tileColors, tileStyles } from "../components/card-tile";
import { openFullscreen } from "../components/code-view";
import { languageOf, localize, translator } from "../localize/localize";
import { icon, shared } from "../styles";
import type { Card, HomeAssistant } from "../types";
import { define, navigate } from "../utils/ha";
import "./loyalty-cards-card-editor";

export interface CardConfig {
  type: string;
  card_id: string;
  mode: "tile" | "barcode" | "qr";
  tap_action: "detail" | "fullscreen" | "none";
}

class LoyaltyCardsCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private config!: CardConfig;
  @state() private cards?: Card[];
  @state() private invalid?: string;
  private unsub?: Promise<() => Promise<void>>;

  static getConfigElement() {
    return document.createElement("loyalty-cards-card-editor");
  }

  static getStubConfig() {
    return { card_id: "", mode: "tile", tap_action: "detail" };
  }

  setConfig(config: Partial<CardConfig>) {
    this.config = { mode: "tile", tap_action: "detail", card_id: "", type: "", ...config } as CardConfig;
  }

  getCardSize() {
    return { tile: 2, qr: 3, barcode: 4 }[this.config.mode];
  }

  getGridOptions() {
    return this.config.mode === "tile" ? { columns: 6, min_columns: 3 } : { columns: 12, min_columns: 6 };
  }

  protected willUpdate() {
    if (this.hass && !this.unsub && this.isConnected) {
      this.unsub = watchCards(this.hass, (cards) => (this.cards = cards));
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsub?.then((unsub) => unsub()).catch(() => undefined);
    this.unsub = undefined;
  }

  private tap(card: Card, format = card.format) {
    if (this.config.tap_action === "detail") navigate(`/card/${card.id}`);
    else if (this.config.tap_action === "fullscreen")
      openFullscreen({ number: card.number, format, name: card.name, language: languageOf(this.hass) });
  }

  render() {
    const t = translator(this.hass);
    const card = this.cards?.find((c) => c.id === this.config.card_id);
    if (!card) {
      const text = !this.config.card_id ? t("card.choose") : this.cards ? t("card.not_found") : t("loading");
      return html`<div class="box empty muted">${text}</div>`;
    }
    const label = localize(languageOf(this.hass), "list.open", { name: card.name });
    const inert = this.config.tap_action === "none";
    const mode = this.config.mode;

    if (mode === "tile")
      return html`<button class="plain" aria-label=${label} ?disabled=${inert} @click=${() => this.tap(card)}>
        ${tile(card)}
      </button>`;

    if (mode === "barcode") {
      // A number that does not fit its format still works as a QR code.
      const format = this.invalid === card.number ? "qr" : card.format;
      return html`<button class="plain box" aria-label=${label} ?disabled=${inert} @click=${() => this.tap(card, format)}>
        <div class="head" style=${styleMap(tileColors(card.color))}>
          ${chip(card, 28)}<span class="name">${card.name}</span>${icon(mdiFullscreen, 20)}
        </div>
        <div class="code">
          <lc-code-view .number=${card.number} .format=${format}
            @code-invalid=${() => (this.invalid = card.number)}></lc-code-view>
          <span class="mono">${card.number}</span>
        </div>
      </button>`;
    }

    return html`<button class="plain box qr" aria-label=${label} ?disabled=${inert} @click=${() => this.tap(card, "qr")}>
      <lc-code-view class="qr-code" .number=${card.number} .format=${"qr"}></lc-code-view>
      <div class="qr-text">
        <div class="qr-name">
          <span class="dot" style=${styleMap(tileColors(card.color))}>${chip(card, 28)}</span>
          <span class="name">${card.name}</span>
        </div>
        ${this.config.tap_action === "fullscreen" ? html`<span class="muted small">${t("card.tap_fullscreen")}</span>` : ""}
      </div>
    </button>`;
  }

  static styles = [
    shared,
    tileStyles,
    css`
      .plain {
        display: block;
        width: 100%;
        padding: 0;
        border: 0;
        background: none;
        text-align: start;
        border-radius: var(--ha-card-border-radius, 12px);
      }
      .plain:disabled {
        cursor: default;
      }
      .box {
        overflow: hidden;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }
      .empty {
        padding: 16px;
        text-align: center;
      }
      .head {
        height: 52px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
      }
      .name {
        flex-grow: 1;
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .code {
        background: #fff;
        color: #111;
        padding: 16px 16px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .code lc-code-view {
        width: 100%;
        --code-height: 92px;
        --code-square: 160px;
      }
      .mono {
        font-family: "Roboto Mono", ui-monospace, monospace;
        font-size: 15px;
        letter-spacing: 2px;
        word-break: break-all;
        text-align: center;
      }
      .qr {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px;
      }
      .qr-code {
        flex-shrink: 0;
        width: 126px;
        padding: 8px;
        background: #fff;
        border-radius: 8px;
        --code-square: 110px;
      }
      .qr-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 0;
      }
      .qr-name {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .dot {
        border-radius: 50%;
        flex-shrink: 0;
      }
      .small {
        font-size: 13px;
        line-height: 1.4;
      }
    `,
  ];
}
define("loyalty-cards-card", LoyaltyCardsCard);

const w = window as Window & { customCards?: object[] };
w.customCards = w.customCards ?? [];
if (!w.customCards.some((c) => (c as { type: string }).type === "loyalty-cards-card")) {
  const lang = document.documentElement.lang;
  w.customCards.push({
    type: "loyalty-cards-card",
    name: localize(lang, "card.name"),
    description: localize(lang, "card.description"),
    preview: false,
    documentationURL: "https://github.com/oirad/ha-loyalty-cards",
  });
}
