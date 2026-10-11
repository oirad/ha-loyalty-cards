import { css, html, svg, type TemplateResult } from "lit";

/** Inline MDI icon (paths from @mdi/js). */
export const icon = (path: string, size = 24) =>
  html`<svg width=${size} height=${size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    ${svg`<path d=${path}></path>`}
  </svg>`;

/** 56px app bar, as in HA panels. */
export const appBar = (title: string, leading: TemplateResult | string, actions: unknown = "") =>
  html`<header class="bar">${leading}<h1>${title}</h1>${actions}</header>`;

// Colors come only from HA theme variables, so light and dark themes work as-is.
export const shared = css`
  :host {
    display: block;
    color: var(--primary-text-color);
    -webkit-tap-highlight-color: transparent;
  }
  * {
    box-sizing: border-box;
  }
  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  .bar {
    height: 56px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    flex-shrink: 0;
  }
  .bar h1 {
    margin: 0 0 0 4px;
    font-size: 20px;
    font-weight: 400;
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .icon-btn {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-btn {
    height: 44px;
    padding: 0 12px;
    border: 0;
    background: transparent;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.25px;
    text-transform: uppercase;
  }
  .btn {
    height: 44px;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid var(--divider-color);
    background: transparent;
    color: var(--primary-color);
  }
  .btn.filled {
    border: 0;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .btn:disabled,
  .text-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .section {
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 12px;
  }
  .segments {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 4px;
    border-radius: 12px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
  }
  .segments button {
    height: 44px;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 500;
  }
  .segments button[aria-pressed="true"] {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .muted {
    color: var(--secondary-text-color);
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  :focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;
