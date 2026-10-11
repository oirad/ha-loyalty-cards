import type { Card, CardEvent, CardFields, HomeAssistant, ListResult } from "./types";
import { sortCards } from "./utils/search";

export const listCards = (hass: HomeAssistant) =>
  hass.callWS<ListResult>({ type: "loyalty_cards/list" }).then((r) => r.cards);

export const createCard = (hass: HomeAssistant, fields: CardFields) =>
  hass.callWS<Card>({ type: "loyalty_cards/create", ...fields });

export const updateCard = (hass: HomeAssistant, cardId: string, fields: Partial<CardFields>) =>
  hass.callWS<Card>({ type: "loyalty_cards/update", card_id: cardId, ...fields });

export const deleteCard = (hass: HomeAssistant, cardId: string) =>
  hass.callWS<Record<string, never>>({ type: "loyalty_cards/delete", card_id: cardId });

/** Keep a sorted list of visible cards in sync. Resolves to the unsubscribe function. */
export async function watchCards(
  hass: HomeAssistant,
  onChange: (cards: Card[]) => void,
): Promise<() => Promise<void>> {
  const cards = new Map<string, Card>();
  const emit = () => onChange(sortCards([...cards.values()]));
  const unsub = await hass.connection.subscribeMessage<CardEvent>(
    (ev) => {
      if (ev.type === "removed") cards.delete(ev.card.id);
      else cards.set(ev.card.id, ev.card);
      emit();
    },
    { type: "loyalty_cards/subscribe" },
  );
  for (const card of await listCards(hass)) cards.set(card.id, card);
  emit();
  return unsub;
}
