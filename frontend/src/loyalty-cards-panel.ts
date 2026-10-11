// Entry point: the sidebar panel plus the Lovelace card (same bundle, loaded by both).
import { mdiArrowLeft } from "@mdi/js";
import { LitElement, css, html, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { watchCards } from "./api";
import "./card/loyalty-cards-card";
import { translator } from "./localize/localize";
import { appBar, icon, shared } from "./styles";
import type { Card, HomeAssistant, Route } from "./types";
import { define, goBack } from "./utils/ha";
import "./views/card-detail";
import "./views/card-editor";
import "./views/card-list";

class LoyaltyCardsPanel extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: Boolean }) narrow = false;
  @property({ attribute: false }) route?: Route;
  @state() private cards?: Card[];
  private unsub?: Promise<() => Promise<void>>;

  protected willUpdate(changed: PropertyValues<this>) {
    if (changed.has("hass") && this.hass && !this.unsub && this.isConnected) {
      this.unsub = watchCards(this.hass, (cards) => (this.cards = cards));
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hass) this.requestUpdate("hass");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsub?.then((unsub) => unsub()).catch(() => undefined);
    this.unsub = undefined;
  }

  render() {
    // route.path: "", "/new", "/card/<id>", "/card/<id>/edit"
    const [, page, id, action] = (this.route?.path ?? "").split("/");
    if (page === "new") return html`<lc-card-editor .hass=${this.hass}></lc-card-editor>`;
    if (page === "card") {
      const card = this.cards?.find((c) => c.id === id);
      if (!card) return this.missing();
      return action === "edit"
        ? html`<lc-card-editor .hass=${this.hass} .card=${card}></lc-card-editor>`
        : html`<lc-card-detail .hass=${this.hass} .card=${card}></lc-card-detail>`;
    }
    return html`<lc-card-list .hass=${this.hass} .narrow=${this.narrow} .cards=${this.cards}></lc-card-list>`;
  }

  /** Still loading, or deleted / private card of someone else. */
  private missing() {
    const t = translator(this.hass);
    return html`${appBar(
        "",
        html`<button class="icon-btn" aria-label=${t("back")} @click=${() => goBack("")}>${icon(mdiArrowLeft)}</button>`,
      )}
      <p class="muted center">${this.cards ? t("detail.not_found") : t("loading")}</p>`;
  }

  static styles = [
    shared,
    css`
      :host {
        height: 100%;
        background: var(--primary-background-color);
      }
      .center {
        text-align: center;
        padding: 48px 16px;
      }
    `,
  ];
}
define("loyalty-cards-panel", LoyaltyCardsPanel);
