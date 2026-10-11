import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { listCards } from "../api";
import { translator, type Key } from "../localize/localize";
import { shared } from "../styles";
import type { Card, HomeAssistant } from "../types";
import { define, fire } from "../utils/ha";
import type { CardConfig } from "./loyalty-cards-card";

const MODES = ["tile", "barcode", "qr"] as const;
const TAPS = ["detail", "fullscreen", "none"] as const;

/** Visual editor: card picked from a dropdown, no YAML needed. */
class LoyaltyCardsCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private config!: CardConfig;
  @state() private cards?: Card[];

  setConfig(config: CardConfig) {
    this.config = config;
  }

  protected willUpdate() {
    if (this.hass && !this.cards) {
      this.cards = [];
      listCards(this.hass).then((cards) => (this.cards = cards));
    }
  }

  private change(key: keyof CardConfig, value: string) {
    this.config = { ...this.config, [key]: value };
    fire(this, "config-changed", { config: this.config });
  }

  private select(key: keyof CardConfig, label: Key, options: [string, string][]) {
    const value = this.config[key] ?? "";
    return html`<label>
      <span>${translator(this.hass)(label)}</span>
      <select @change=${(e: Event) => this.change(key, (e.target as HTMLSelectElement).value)}>
        ${options.map(([v, text]) => html`<option value=${v} ?selected=${v === value}>${text}</option>`)}
      </select>
    </label>`;
  }

  render() {
    if (!this.config) return "";
    const t = translator(this.hass);
    const cards: [string, string][] = (this.cards ?? []).map((c) => [c.id, c.name]);
    if (!this.config.card_id) cards.unshift(["", t("card.choose")]);
    return html`
      ${this.select("card_id", "card_editor.card", cards)}
      ${this.select("mode", "card_editor.mode", MODES.map((m) => [m, t(`card_editor.mode_${m}`)]))}
      ${this.select("tap_action", "card_editor.tap_action", TAPS.map((a) => [a, t(`card_editor.tap_${a}`)]))}
    `;
  }

  static styles = [
    shared,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 16px;
        background: var(--input-fill-color, var(--secondary-background-color));
        border-radius: 6px 6px 0 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
      }
      span {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      select {
        min-height: 32px;
        border: 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
      }
      option {
        background: var(--card-background-color);
      }
    `,
  ];
}
define("loyalty-cards-card-editor", LoyaltyCardsCardEditor);
