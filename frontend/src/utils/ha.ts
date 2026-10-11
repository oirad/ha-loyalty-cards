// Small bridges to the Home Assistant frontend: navigation, toasts, element definition.

export const PANEL_PATH = "/loyalty-cards";

/** Push a panel route; the phone back button then returns to the previous screen. */
export function navigate(path: string, replace = false): void {
  const url = PANEL_PATH + path;
  if (replace) history.replaceState(history.state, "", url);
  else history.pushState({ loyaltyCards: true }, "", url);
  window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace } }));
}

/** Go back if we navigated here ourselves, otherwise replace with `fallback`. */
export function goBack(fallback: string): void {
  if (history.state?.loyaltyCards) history.back();
  else navigate(fallback, true);
}

export function fire(node: EventTarget, type: string, detail: unknown = {}): void {
  node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
}

/** HA shows this as a toast. */
export const toast = (node: EventTarget, message: string) => fire(node, "hass-notification", { message });

// HA swaps in a scoped custom element registry while booting, and an extra module can run
// before that: elements defined earlier are invisible to Lovelace. Define once HA is up.
const haReady = customElements.whenDefined("home-assistant");

export function define(tag: string, cls: CustomElementConstructor): void {
  haReady.then(() => customElements.get(tag) || customElements.define(tag, cls));
}
