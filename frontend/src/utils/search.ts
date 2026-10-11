import type { Card } from "../types";

/** Lowercase, without accents: "Café" → "cafe". */
export const normalize = (s: string): string =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

export function filterCards(cards: Card[], query: string): Card[] {
  const q = normalize(query);
  return q ? cards.filter((c) => normalize(c.name).includes(q)) : cards;
}

export const sortCards = (cards: Card[]): Card[] =>
  [...cards].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
