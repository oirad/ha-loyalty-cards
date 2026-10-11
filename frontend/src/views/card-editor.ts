import { mdiAlertCircleOutline, mdiCamera, mdiCheck, mdiClose, mdiImage } from "@mdi/js";
import { LitElement, css, html, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { createCard, updateCard } from "../api";
import { tile, tileStyles } from "../components/card-tile";
import "../components/logo-picker";
import { errorText, translator } from "../localize/localize";
import { appBar, icon, shared } from "../styles";
import { FORMATS, NAME_MAX, NOTES_MAX, NUMBER_MAX, type Card, type CardFields, type HomeAssistant } from "../types";
import { FORMAT_LABELS, decodeImage, preloadDecoder } from "../utils/codes";
import { PALETTE } from "../utils/contrast";
import { define, goBack, toast } from "../utils/ha";

type Scan = { state: "busy" } | { state: "ok"; format: string } | { state: "fail" };

const EMPTY: CardFields = {
  name: "",
  number: "",
  format: "ean13",
  color: PALETTE[0][1],
  logo: null,
  notes: "",
  visibility: "shared",
};

class CardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  /** Card being edited; undefined for a new card. */
  @property({ attribute: false }) card?: Card;
  @state() private fields: CardFields = { ...EMPTY };
  @state() private scan?: Scan;
  @state() private photo?: string;
  @state() private saving = false;

  connectedCallback() {
    super.connectedCallback();
    preloadDecoder();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.photo) URL.revokeObjectURL(this.photo);
  }

  protected willUpdate(changed: PropertyValues<this>) {
    if (changed.has("card") && this.card?.id !== changed.get("card")?.id) {
      const { name, number, format, color, logo, notes, visibility } = this.card ?? EMPTY;
      this.fields = { name, number, format, color, logo, notes, visibility };
    }
  }

  private set(patch: Partial<CardFields>) {
    this.fields = { ...this.fields, ...patch };
  }

  private async scanFile(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    if (this.photo) URL.revokeObjectURL(this.photo);
    this.photo = URL.createObjectURL(file);
    this.scan = { state: "busy" };
    try {
      const hit = await decodeImage(file);
      if (!hit) throw new Error("no code");
      this.set({ number: hit.number.slice(0, NUMBER_MAX), format: hit.format });
      this.scan = { state: "ok", format: FORMAT_LABELS[hit.format] };
    } catch {
      this.scan = { state: "fail" };
    }
  }

  private async save() {
    const t = translator(this.hass);
    const fields = { ...this.fields, name: this.fields.name.trim(), number: this.fields.number.trim() };
    if (!fields.name || !fields.number) {
      toast(this, t("editor.required"));
      return;
    }
    this.saving = true;
    try {
      if (this.card) await updateCard(this.hass, this.card.id, fields);
      else await createCard(this.hass, fields);
      goBack(this.card ? `/card/${this.card.id}` : "");
    } catch (err) {
      toast(this, errorText(t, err));
    } finally {
      this.saving = false;
    }
  }

  private renderScan(t: ReturnType<typeof translator>) {
    const s = this.scan;
    if (!s) return "";
    if (s.state === "busy") return html`<div class="status">${t("editor.scanning")}</div>`;
    return s.state === "ok"
      ? html`<div class="status ok" role="status">${icon(mdiCheck, 20)} ${t("editor.detected", { format: s.format })}</div>`
      : html`<div class="status fail" role="status">${icon(mdiAlertCircleOutline, 20)} ${t("editor.not_detected")}</div>`;
  }

  render() {
    const t = translator(this.hass);
    const f = this.fields;
    const valid = f.name.trim() && f.number.trim();
    const input = (key: "name" | "number", max: number) =>
      html`<label class="field">
        <span>${t(`editor.${key}`)}</span>
        <input type="text" maxlength=${max} .value=${f[key]} autocomplete="off"
          placeholder=${key === "name" ? t("editor.name_placeholder") : ""}
          @input=${(e: Event) => this.set({ [key]: (e.target as HTMLInputElement).value })} />
      </label>`;

    return html`
      ${appBar(
        t(this.card ? "editor.edit" : "editor.new"),
        html`<button class="icon-btn" aria-label=${t("close")}
          @click=${() => goBack(this.card ? `/card/${this.card.id}` : "")}>${icon(mdiClose)}</button>`,
        html`<button class="text-btn" ?disabled=${!valid || this.saving} @click=${this.save}>${t("editor.save")}</button>`,
      )}
      <div class="content">
        <section class="section scan">
          <h2>${t("editor.code")}</h2>
          <div class="viewfinder" style=${styleMap({ backgroundImage: this.photo ? `url(${this.photo})` : "none" })}>
            <i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>
            ${this.photo ? "" : html`<i class="laser"></i><span>${t("editor.scan_hint")}</span>`}
          </div>
          <div class="pair">
            <label class="btn filled">${icon(mdiCamera, 20)} ${t("editor.take_photo")}
              <input type="file" accept="image/*" capture="environment" hidden @change=${this.scanFile} />
            </label>
            <label class="btn">${icon(mdiImage, 20)} ${t("editor.from_gallery")}
              <input type="file" accept="image/*" hidden @change=${this.scanFile} />
            </label>
          </div>
          ${this.renderScan(t)}
        </section>

        <div class="fields">
          ${input("name", NAME_MAX)}
          ${input("number", NUMBER_MAX)}
          <label class="field">
            <span>${t("editor.format")}</span>
            <select @change=${(e: Event) => this.set({ format: (e.target as HTMLSelectElement).value as CardFields["format"] })}>
              ${FORMATS.map((x) => html`<option value=${x} ?selected=${x === f.format}>${FORMAT_LABELS[x]}</option>`)}
            </select>
          </label>
        </div>

        <section>
          <h3>${t("editor.logo")}</h3>
          <p class="hint">${t("editor.logo_hint")}</p>
          <lc-logo-picker .hass=${this.hass} .value=${f.logo} .name=${f.name} .color=${f.color}
            @value-changed=${(e: CustomEvent) => this.set({ logo: e.detail.value })}></lc-logo-picker>
        </section>

        <section>
          <h3>${t("editor.color")}</h3>
          <div class="swatches">
            ${PALETTE.map(
              ([name, hex]) => html`<button class="swatch" aria-pressed=${f.color === hex}
                aria-label=${t("editor.color_name", { name: t(`color.${name}`) })}
                @click=${() => this.set({ color: hex })}><span style=${styleMap({ background: hex })}></span></button>`,
            )}
            <label class="swatch custom" aria-label=${t("editor.color_custom")}>
              <input type="color" .value=${f.color} @input=${(e: Event) => this.set({ color: (e.target as HTMLInputElement).value })} />
            </label>
          </div>
        </section>

        <section>
          <h3>${t("editor.preview")}</h3>
          <div class="preview">${tile({ ...f, name: f.name.trim() || t("editor.name") })}</div>
        </section>

        <section>
          <h3>${t("editor.visibility")}</h3>
          <div class="segments" role="group" aria-label=${t("editor.visibility_label")}>
            <button aria-pressed=${f.visibility === "shared"} @click=${() => this.set({ visibility: "shared" })}>${t("editor.shared")}</button>
            <button aria-pressed=${f.visibility === "private"} @click=${() => this.set({ visibility: "private" })}>${t("editor.private")}</button>
          </div>
          <p class="hint">${t(f.visibility === "shared" ? "editor.shared_hint" : "editor.private_hint")}</p>
        </section>

        <label class="field">
          <span>${t("editor.notes")}</span>
          <textarea rows="3" maxlength=${NOTES_MAX} placeholder=${t("editor.notes_placeholder")} .value=${f.notes}
            @input=${(e: Event) => this.set({ notes: (e.target as HTMLTextAreaElement).value })}></textarea>
        </label>

        <button class="btn filled save" ?disabled=${!valid || this.saving} @click=${this.save}>${t("editor.save_card")}</button>
      </div>
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
        gap: 20px;
        max-width: 600px;
        margin: 0 auto;
      }
      section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .scan {
        padding: 16px;
        gap: 14px;
      }
      h2,
      h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
      }
      h3 {
        font-size: 14px;
        color: var(--secondary-text-color);
      }
      .hint {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .viewfinder {
        height: 180px;
        border-radius: 10px;
        background: #000 center / cover no-repeat;
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      .viewfinder span {
        position: absolute;
        bottom: 10px;
        font-size: 13px;
        color: #bdbdbd;
      }
      .c {
        position: absolute;
        width: 28px;
        height: 28px;
        border: 3px solid var(--primary-color);
      }
      .tl { left: 40px; top: 36px; border-right: 0; border-bottom: 0; border-radius: 6px 0 0 0; }
      .tr { right: 40px; top: 36px; border-left: 0; border-bottom: 0; border-radius: 0 6px 0 0; }
      .bl { left: 40px; bottom: 36px; border-right: 0; border-top: 0; border-radius: 0 0 0 6px; }
      .br { right: 40px; bottom: 36px; border-left: 0; border-top: 0; border-radius: 0 0 6px 0; }
      .laser {
        position: absolute;
        left: 52px;
        right: 52px;
        top: 89px;
        height: 2px;
        background: var(--error-color, #ef5350);
      }
      .pair {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }
      label.btn {
        cursor: pointer;
      }
      .status {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 10px;
        font-size: 14px;
        background: var(--secondary-background-color);
      }
      .status.ok {
        color: var(--success-color, #43a047);
      }
      .status.fail {
        color: var(--warning-color, #ffa600);
      }
      .fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 16px;
        background: var(--input-fill-color, var(--secondary-background-color));
        border-radius: 6px 6px 0 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
      }
      .field:focus-within {
        border-bottom: 2px solid var(--primary-color);
      }
      .field span {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .field input,
      .field select,
      .field textarea {
        border: 0;
        padding: 2px 0;
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 16px;
        outline: none;
        resize: none;
        min-height: 28px;
      }
      .field select option {
        background: var(--card-background-color);
      }
      .swatches {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
      }
      .swatch {
        width: 44px;
        height: 44px;
        padding: 0;
        border: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .swatch span,
      .swatch input {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.35);
      }
      .swatch[aria-pressed="true"] span {
        box-shadow: 0 0 0 2px var(--primary-background-color), 0 0 0 4px var(--primary-text-color);
      }
      .swatch input {
        padding: 0;
        border: 0;
        background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
        cursor: pointer;
      }
      .swatch input::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      .swatch input::-webkit-color-swatch {
        border: 0;
        border-radius: 50%;
        opacity: 0;
      }
      .preview {
        width: calc(50% - 6px);
        max-width: 240px;
      }
      .save {
        height: 48px;
        border-radius: 12px;
        font-size: 15px;
      }
    `,
  ];
}
define("lc-card-editor", CardEditor);
