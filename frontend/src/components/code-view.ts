import { LitElement, css, html, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { localize } from "../localize/localize";
import type { CardFormat } from "../types";
import { isSquare, renderCode } from "../utils/codes";
import { define, fire } from "../utils/ha";

/** Barcode or QR as SVG on white. Fires `code-invalid` if the number does not fit the format. */
export class CodeView extends LitElement {
  @property() number = "";
  @property() format: CardFormat = "qr";
  @state() private svg: string | null = null;

  protected async willUpdate(changed: PropertyValues<this>) {
    if (!changed.has("number") && !changed.has("format")) return;
    const { number, format } = this;
    const svg = await renderCode(number, format);
    if (number !== this.number || format !== this.format) return;
    this.svg = svg;
    if (svg === null) fire(this, "code-invalid");
  }

  render() {
    return this.svg
      ? html`<div class=${isSquare(this.format) ? "square" : "wide"} role="img" aria-label=${this.number}>
          ${unsafeSVG(this.svg)}
        </div>`
      : "";
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      color: #111;
    }
    div {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .wide {
      height: var(--code-height, 128px);
    }
    .square {
      height: var(--code-square, 200px);
    }
  `;
}
define("lc-code-view", CodeView);

/** White full-screen code with the screen kept awake. Tap anywhere to close. */
class FullscreenCode extends LitElement {
  @property() number = "";
  @property() format: CardFormat = "qr";
  @property() name = "";
  @property() language = "en";
  private lock?: WakeLockSentinel;

  connectedCallback() {
    super.connectedCallback();
    navigator.wakeLock
      ?.request("screen")
      .then((lock) => (this.lock = lock))
      .catch(() => undefined);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.lock?.release().catch(() => undefined);
  }

  render() {
    return html`<button @click=${() => this.remove()}>
      <span class="name">${this.name}</span>
      <lc-code-view .number=${this.number} .format=${this.format}></lc-code-view>
      <span class="number">${this.number}</span>
      <span class="hint">${localize(this.language, "fullscreen.close")}</span>
    </button>`;
  }

  static styles = css`
    button {
      position: fixed;
      inset: 0;
      z-index: 1000;
      width: 100%;
      border: 0;
      background: #fff;
      color: #111;
      font: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: max(24px, env(safe-area-inset-top)) 16px max(24px, env(safe-area-inset-bottom));
    }
    lc-code-view {
      width: 100%;
      max-width: 640px;
      --code-height: 35vh;
      --code-square: min(80vw, 60vh);
    }
    .name {
      font-size: 22px;
      font-weight: 500;
    }
    .number {
      font-family: "Roboto Mono", ui-monospace, monospace;
      font-size: 20px;
      letter-spacing: 2px;
      word-break: break-all;
    }
    .hint {
      font-size: 14px;
      color: #555;
    }
  `;
}
define("lc-fullscreen-code", FullscreenCode);

/** Mounted on document.body so dashboard layouts cannot clip it. */
export function openFullscreen(opts: { number: string; format: CardFormat; name: string; language: string }) {
  document.body.appendChild(Object.assign(document.createElement("lc-fullscreen-code"), opts));
}
