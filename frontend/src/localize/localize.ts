import type { HomeAssistant } from "../types";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import nl from "./nl.json";
import pl from "./pl.json";
import pt from "./pt.json";

export type Key = keyof typeof en;
type Vars = Record<string, string | number>;

const LANGUAGES: Record<string, Partial<Record<Key, string>>> = { de, en, es, fr, it, nl, pl, pt };

/** "pt-BR" → pt; anything unknown → en. */
export function localize(language: string | undefined, key: Key, vars: Vars = {}): string {
  const strings = LANGUAGES[(language ?? "en").split("-")[0]] ?? en;
  return (strings[key] ?? en[key]).replace(/\{(\w+)\}/g, (_, v: string) => String(vars[v] ?? ""));
}

export const languageOf = (hass?: HomeAssistant): string =>
  hass?.locale?.language ?? hass?.language ?? document.documentElement.lang;

/** Bound translator for a component. */
export const translator = (hass?: HomeAssistant) => {
  const language = languageOf(hass);
  return (key: Key, vars?: Vars) => localize(language, key, vars);
};

/** Toast text for a failed WebSocket call. */
export function errorText(t: ReturnType<typeof translator>, err: unknown): string {
  const { code, message = String(err) } = (err ?? {}) as { code?: string; message?: string };
  if (code === "not_found") return t("error.not_found");
  return t(code === "invalid_format" ? "error.invalid_format" : "error.generic", { message });
}
