import { mdiCamera, mdiClose, mdiImage } from "@mdi/js";
import { LitElement, css, html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { translator } from "../localize/localize";
import { icon, shared } from "../styles";
import type { HomeAssistant } from "../types";
import { clampCrop, cropRect, drawLogo, type Crop } from "../utils/image";
import { define, fire, toast } from "../utils/ha";
import { chip, tileColors, tileStyles } from "./card-tile";

const VIEW = 256;

/** Logo from camera or gallery, cropped square by drag + zoom. Fires `value-changed`. */
class LogoPicker extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property() value: string | null = null;
  @property() name = "";
  @property() color = "#000000";
  @state() private src?: string;
  @state() private zoom = 1;
  @state() private crop: Crop = { scale: 1, x: 0, y: 0 };
  @query("dialog") private dialog!: HTMLDialogElement;
  @query("dialog img") private img!: HTMLImageElement;
  private drag?: { id: number; x: number; y: number };

  private pick(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    if (this.src) URL.revokeObjectURL(this.src);
    this.src = URL.createObjectURL(file);
    this.zoom = 1;
    this.dialog.showModal();
  }

  private loaded() {
    const { naturalWidth: w, naturalHeight: h } = this.img;
    const s = VIEW / Math.min(w, h);
    this.crop = clampCrop(w, h, VIEW, 1, (VIEW - w * s) / 2, (VIEW - h * s) / 2);
  }

  private move(dx: number, dy: number, zoom = this.zoom) {
    const { naturalWidth: w, naturalHeight: h } = this.img;
    // Zoom around the viewport center.
    const k = (VIEW / Math.min(w, h)) * zoom / this.crop.scale;
    const c = VIEW / 2;
    this.zoom = zoom;
    this.crop = clampCrop(w, h, VIEW, zoom, c - (c - this.crop.x) * k + dx, c - (c - this.crop.y) * k + dy);
  }

  private down(e: PointerEvent) {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
  }

  private pointerMove(e: PointerEvent) {
    if (this.drag?.id !== e.pointerId) return;
    this.move(e.clientX - this.drag.x, e.clientY - this.drag.y);
    this.drag = { ...this.drag, x: e.clientX, y: e.clientY };
  }

  private done() {
    const logo = drawLogo(this.img, cropRect(this.crop, VIEW));
    this.dialog.close();
    if (logo) fire(this, "value-changed", { value: logo });
    else toast(this, translator(this.hass)("editor.logo_error"));
  }

  render() {
    const t = translator(this.hass);
    return html`
      <div class="row">
        <span class="avatar" style=${styleMap(tileColors(this.color))}>
          ${chip({ name: this.name, color: this.color, logo: this.value }, 56)}
        </span>
        <div class="buttons">
          <label class="btn filled" aria-label=${t("editor.logo_photo")}>
            ${icon(mdiCamera, 18)} ${t("editor.take_photo")}
            <input type="file" accept="image/*" capture="environment" @change=${this.pick} hidden />
          </label>
          <label class="btn" aria-label=${t("editor.logo_gallery")}>
            ${icon(mdiImage, 18)} ${t("editor.from_gallery")}
            <input type="file" accept="image/*" @change=${this.pick} hidden />
          </label>
        </div>
        ${this.value
          ? html`<button class="icon-btn" aria-label=${t("editor.logo_remove")}
              @click=${() => fire(this, "value-changed", { value: null })}>${icon(mdiClose)}</button>`
          : ""}
      </div>
      <dialog aria-label=${t("editor.crop")}>
        <h2>${t("editor.crop")}</h2>
        <p class="muted">${t("editor.crop_hint")}</p>
        <div class="viewport" @pointerdown=${this.down} @pointermove=${this.pointerMove}
          @pointerup=${() => (this.drag = undefined)} @pointercancel=${() => (this.drag = undefined)}>
          <img src=${this.src ?? ""} alt="" draggable="false" @load=${this.loaded}
            style=${styleMap({
              transform: `translate(${this.crop.x}px, ${this.crop.y}px) scale(${this.crop.scale})`,
            })} />
        </div>
        <label class="zoom">
          <span>${t("editor.zoom")}</span>
          <input type="range" min="1" max="4" step="0.01" .value=${String(this.zoom)}
            @input=${(e: Event) => this.move(0, 0, Number((e.target as HTMLInputElement).value))} />
        </label>
        <div class="actions">
          <button class="text-btn" @click=${() => this.dialog.close()}>${t("cancel")}</button>
          <button class="text-btn" @click=${this.done}>${t("editor.crop_done")}</button>
        </div>
      </dialog>
    `;
  }

  static styles = [
    shared,
    tileStyles,
    css`
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .avatar {
        border-radius: 50%;
        flex-shrink: 0;
      }
      .buttons {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }
      label.btn {
        cursor: pointer;
      }
      dialog {
        border: 0;
        border-radius: var(--ha-card-border-radius, 12px);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        padding: 16px;
        max-width: calc(100vw - 32px);
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.6);
      }
      h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 500;
      }
      p {
        margin: 0 0 12px;
        font-size: 13px;
      }
      .viewport {
        width: ${VIEW}px;
        height: ${VIEW}px;
        overflow: hidden;
        position: relative;
        border-radius: 50%;
        touch-action: none;
        background: #fff;
        margin: 0 auto;
      }
      .viewport img {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 0 0;
        user-select: none;
        max-width: none;
      }
      .zoom {
        display: flex;
        align-items: center;
        gap: 12px;
        min-height: 44px;
        font-size: 14px;
      }
      .zoom input {
        flex-grow: 1;
        accent-color: var(--primary-color);
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    `,
  ];
}
define("lc-logo-picker", LogoPicker);
