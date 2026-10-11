// Contract shared with the backend: mirrors custom_components/loyalty_cards/const.py.

export const FORMATS = [
  "ean13",
  "ean8",
  "upca",
  "upce",
  "code128",
  "code39",
  "itf",
  "codabar",
  "qr",
  "datamatrix",
  "pdf417",
  "aztec",
] as const;
export type CardFormat = (typeof FORMATS)[number];

export type Visibility = "shared" | "private";

export const NAME_MAX = 60;
export const NUMBER_MAX = 512;
export const NOTES_MAX = 1000;
export const LOGO_MAX_BYTES = 40 * 1024;

export interface Card {
  id: string;
  name: string;
  number: string;
  format: CardFormat;
  /** #rrggbb */
  color: string;
  /** image data URL, 128×128 */
  logo: string | null;
  notes: string;
  visibility: Visibility;
  owner_id: string;
  created_at: string;
  updated_at: string;
}

export type CardFields = Pick<
  Card,
  "name" | "number" | "format" | "color" | "logo" | "notes" | "visibility"
>;

// WebSocket commands
export interface ListCommand {
  type: "loyalty_cards/list";
}
export interface ListResult {
  cards: Card[];
}
export type CreateCommand = { type: "loyalty_cards/create" } & CardFields;
export type UpdateCommand = { type: "loyalty_cards/update"; card_id: string } & Partial<CardFields>;
export interface DeleteCommand {
  type: "loyalty_cards/delete";
  card_id: string;
}
export interface SubscribeCommand {
  type: "loyalty_cards/subscribe";
}
export interface CardEvent {
  type: "added" | "updated" | "removed";
  card: Card;
}

export type ErrorCode = "not_found" | "invalid_format";

// Minimal slice of the HA frontend objects we use.
export interface HomeAssistant {
  language: string;
  locale?: { language: string };
  user?: { id: string };
  themes?: { darkMode?: boolean };
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  connection: {
    subscribeMessage<T>(
      callback: (msg: T) => void,
      msg: Record<string, unknown>,
    ): Promise<() => Promise<void>>;
  };
}

export interface Route {
  prefix: string;
  path: string;
}
