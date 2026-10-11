import { mdiMagnify, mdiMenu, mdiPlus } from "@mdi/js";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { tile, tileStyles } from "../components/card-tile";
import { translator } from "../localize/localize";
import { appBar, icon, shared } from "../styles";
import type { Card, HomeAssistant } from "../types";
import { define, fire, navigate } from "../utils/ha";
import { filterCards } from "../utils/search";

class CardList extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: Boolean }) narrow = false;
  @property({ attribute: false }) cards?: Card[];
  @state() private query = "";

  render() {
    const t = translator(this.hass);
    const all = this.cards ?? [];
    const cards = filterCards(all, this.query);
    const n = cards.length;
    const count = this.query.trim()
      ? t(n === 1 ? "list.results_one" : "list.results", { n })
      : t(n === 1 ? "list.count_one" : "list.count", { n });
    const menu = this.narrow
      ? html`<button class="icon-btn" aria-label=${t("menu")} @click=${() => fire(this, "hass-toggle-menu")}>
          ${icon(mdiMenu)}
        </button>`
      : "";

    return html`
      ${appBar(t("title"), menu)}
      <label class="search">
        ${icon(mdiMagnify, 20)}
        <span class="visually-hidden">${t("list.search_label")}</span>
        <input type="search" placeholder=${t("list.search")} .value=${this.query}
          @input=${(e: Event) => (this.query = (e.target as HTMLInputElement).value)} />
      </label>
      ${this.cards === undefined
        ? html`<p class="count muted">${t("loading")}</p>`
        : html`<p class="count muted" aria-live="polite">${count}</p>`}
      <div class="scroll">
        ${n
          ? html`<div class="grid">
              ${cards.map(
                (c) => html`<button class="card" aria-label=${t("list.open", { name: c.name })}
                  @click=${() => navigate(`/card/${c.id}`)}>${tile(c)}</button>`,
              )}
            </div>`
          : this.cards
            ? html`<div class="empty muted">
                ${icon(mdiMagnify, 40)}
                <p class="empty-title">${t(all.length ? "list.empty" : "list.none")}</p>
                <p>${t(all.length ? "list.empty_hint" : "list.none_hint")}</p>
              </div>`
            : ""}
      </div>
      <div class="footer">
        <button class="fab" @click=${() => navigate("/new")}>${icon(mdiPlus)}<span>${t("list.add")}</span></button>
      </div>
    `;
  }

  static styles = [
    shared,
    tileStyles,
    css`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .search {
        margin: 8px 16px 4px;
        display: flex;
        align-items: center;
        gap: 12px;
        height: 48px;
        padding: 0 16px;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        color: var(--secondary-text-color);
      }
      .search input {
        flex-grow: 1;
        min-width: 0;
        border: 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
      }
      .count {
        margin: 0;
        padding: 14px 16px 10px;
        font-size: 14px;
      }
      .scroll {
        flex: 1;
        overflow-y: auto;
        padding: 0 16px 16px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }
      @media (min-width: 600px) {
        .grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media (min-width: 900px) {
        .grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }
      .card {
        padding: 0;
        border: 0;
        background: none;
        border-radius: 12px;
      }
      .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 64px 32px;
        text-align: center;
      }
      .empty p {
        margin: 0;
        font-size: 14px;
      }
      .empty .empty-title {
        font-size: 16px;
        color: var(--primary-text-color);
      }
      .footer {
        display: flex;
        justify-content: flex-end;
        padding: 16px 16px 24px;
        flex-shrink: 0;
      }
      .fab {
        height: 56px;
        padding: 0 20px 0 16px;
        border: 0;
        border-radius: 16px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.25px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
      }
    `,
  ];
}
define("lc-card-list", CardList);
