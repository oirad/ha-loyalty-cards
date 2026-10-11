import { css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { chipColor, textColor } from "../utils/contrast";

export interface TileData {
  name: string;
  color: string;
  logo: string | null;
}

const initial = (name: string) => (name.trim().charAt(0) || "?").toUpperCase();

/** Round logo, or the initial on a translucent circle. */
export const chip = (card: TileData, size: number) =>
  card.logo
    ? html`<img class="chip" src=${card.logo} alt="" style=${styleMap({ width: `${size}px`, height: `${size}px` })} />`
    : html`<span
        class="chip"
        aria-hidden="true"
        style=${styleMap({
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${Math.round(size * 0.44)}px`,
          background: chipColor(card.color),
        })}
        >${initial(card.name)}</span
      >`;

export const tileColors = (color: string) => ({ background: color, color: textColor(color) });

/** The 1.586:1 card tile. The card number is deliberately not shown. */
export const tile = (card: TileData) =>
  html`<div class="tile" style=${styleMap(tileColors(card.color))}>
    ${chip(card, 32)}
    <span class="tile-name">${card.name}</span>
  </div>`;

export const tileStyles = css`
  .tile {
    aspect-ratio: 1.586;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px rgba(127, 127, 127, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    overflow: hidden;
  }
  .tile-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .chip {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
    object-fit: cover;
  }
`;
