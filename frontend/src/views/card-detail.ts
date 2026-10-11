import { mdiArrowLeft, mdiContentCopy, mdiDotsVertical, mdiFullscreen, mdiPencil } from "@mdi/js";
import { LitElement, css, html, type PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { deleteCard } from "../api";
import { chip, tileColors, tileStyles } from "../components/card-tile";
import { openFullscreen } from "../components/code-view";
import { errorText, languageOf, translator } from "../localize/localize";
import { appBar, icon, shared } from "../styles";
import type { Card, CardFormat, HomeAssistant } from "../types";
import { FORMAT_LABELS, isLinear } from "../utils/codes";
import { define, goBack, navigate, toast } from "../utils/ha";

async function copy(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Clipboard API needs https; plain-http HA installs use the legacy path.
    const area = Object.assign(document.createElement("textarea"), { value: text });
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

class CardDetail extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) card!: Card;
  @state() private mode: "native" | "qr" = "native";
  @state() private invalid = false;
  @state() private menuOpen = false;
  @query("dialog") private dialog!: HTMLDialogElement;

  protected willUpdate(changed: PropertyValues<this>) {
    const old = changed.get("card");
    if (changed.has("card") && (old?.number !== this.card.number || old?.format !== this.card.format)) {
      this.mode = "native";
      this.invalid = false;
    }
  }

  private get shown(): CardFormat {
    return this.mode === "qr" || this.invalid ? "qr" : this.card.format;
  }

  private async remove_() {
    this.dialog.close();
    try {
      await deleteCard(this.hass, this.card.id);
      goBack("");
    } catch (err) {
      toast(this, errorText(translator(this.hass), err));
    }
  }

  render() {
    const t = translator(this.hass);
    const card = this.card;
    const native = FORMAT_LABELS[card.format];
    const toggle = card.format !== "qr" && !this.invalid;
    const edit = () => navigate(`/card/${card.id}/edit`);

    return html`
      ${appBar(
        card.name,
        html`<button class="icon-btn" aria-label=${t("back")} @click=${() => goBack("")}>${icon(mdiArrowLeft)}</button>`,
        html`<button class="icon-btn" aria-label=${t("detail.edit")} @click=${edit}>${icon(mdiPencil, 22)}</button>
          <div class="menu-wrap">
            <button class="icon-btn" aria-label=${t("detail.more")} aria-haspopup="menu" aria-expanded=${this.menuOpen}
              @click=${() => (this.menuOpen = !this.menuOpen)}>${icon(mdiDotsVertical, 22)}</button>
            ${this.menuOpen
              ? html`<div class="menu" role="menu" @click=${() => (this.menuOpen = false)}>
                  <button role="menuitem" @click=${edit}>${t("detail.edit_item")}</button>
                  <button role="menuitem" @click=${() => this.dialog.showModal()}>${t("detail.delete_item")}</button>
                </div>`
              : ""}
          </div>`,
      )}
      <div class="content">
        <div class="pass">
          <div class="pass-head" style=${styleMap(tileColors(card.color))}>
            ${chip(card, 36)}<span>${card.name}</span>
          </div>
          <div class="pass-code">
            <lc-code-view .number=${card.number} .format=${this.shown}
              @code-invalid=${() => (this.invalid = true)}></lc-code-view>
            <span class="mono">${card.number}</span>
          </div>
        </div>
        ${this.invalid ? html`<p class="muted small">${t("detail.invalid", { format: native })}</p>` : ""}
        ${toggle
          ? html`<div class="segments" role="group" aria-label=${t("detail.code_type")}>
              <button aria-pressed=${this.mode === "native"} @click=${() => (this.mode = "native")}>
                ${isLinear(card.format) ? t("detail.barcode") : native}
              </button>
              <button aria-pressed=${this.mode === "qr"} @click=${() => (this.mode = "qr")}>${t("detail.qr")}</button>
            </div>`
          : ""}
        <button class="btn wide" @click=${() =>
          openFullscreen({ number: card.number, format: this.shown, name: card.name, language: languageOf(this.hass) })}>
          ${icon(mdiFullscreen, 20)} ${t("detail.fullscreen")}
        </button>
        <section class="section">
          <div class="row">
            <div class="field">
              <span class="label">${t("detail.number")}</span>
              <span class="value">${card.number}</span>
            </div>
            <button class="icon-btn" aria-label=${t("detail.copy")}
              @click=${() => copy(card.number).then(() => toast(this, t("detail.copied")))}>
              ${icon(mdiContentCopy, 20)}
            </button>
          </div>
          <div class="row field">
            <span class="label">${t("detail.format")}</span>
            <span class="value">${native}</span>
          </div>
          ${card.notes
            ? html`<div class="row field">
                <span class="label">${t("detail.notes")}</span>
                <span class="value notes">${card.notes}</span>
              </div>`
            : ""}
        </section>
      </div>
      <dialog>
        <h2>${t("detail.delete_title")}</h2>
        <p>${t("detail.delete_text", { name: card.name })}</p>
        <div class="actions">
          <button class="text-btn" @click=${() => this.dialog.close()}>${t("cancel")}</button>
          <button class="text-btn danger" @click=${this.remove_}>${t("detail.delete_item")}</button>
        </div>
      </dialog>
    `;
  }

  static styles = [
    shared,
    tileStyles,
    css`
      :host {
        height: 100%;
        overflow-y: auto;
      }
      .content {
        padding: 8px 16px 32px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 600px;
        margin: 0 auto;
      }
      .pass {
        border-radius: 16px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      }
      .pass-head {
        height: 64px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 16px;
        font-size: 18px;
        font-weight: 500;
      }
      .pass-code {
        min-height: 236px;
        padding: 24px 16px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
        color: #111;
      }
      lc-code-view {
        width: 100%;
      }
      .mono {
        font-family: "Roboto Mono", ui-monospace, monospace;
        font-size: 18px;
        letter-spacing: 2px;
        word-break: break-all;
        text-align: center;
      }
      .small {
        margin: 0;
        font-size: 13px;
      }
      .wide {
        height: 48px;
        border-radius: 12px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 8px 10px 16px;
        border-bottom: 1px solid var(--divider-color);
      }
      .row:last-child {
        border-bottom: 0;
      }
      .field {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        min-width: 0;
      }
      .label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .value {
        font-size: 16px;
        word-break: break-all;
      }
      .notes {
        font-size: 15px;
        line-height: 1.4;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .menu-wrap {
        position: relative;
      }
      .menu {
        position: absolute;
        right: 4px;
        top: 44px;
        z-index: 2;
        min-width: 160px;
        padding: 4px 0;
        border-radius: 8px;
        background: var(--card-background-color);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
        display: flex;
        flex-direction: column;
      }
      .menu button {
        height: 48px;
        padding: 0 16px;
        border: 0;
        background: none;
        text-align: start;
        font-size: 15px;
      }
      dialog {
        border: 0;
        border-radius: var(--ha-card-border-radius, 12px);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        padding: 20px 16px 8px;
        max-width: min(400px, calc(100vw - 32px));
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.6);
      }
      dialog h2 {
        margin: 0 0 8px;
        font-size: 18px;
        font-weight: 500;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .danger {
        color: var(--error-color, #db4437);
      }
    `,
  ];
}
define("lc-card-detail", CardDetail);
