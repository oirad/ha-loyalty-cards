// Text color on a card tile, chosen by WCAG contrast.

export const LIGHT_TEXT = "#ffffff";
export const DARK_TEXT = "#1a1a1a";

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export function textColor(bg: string): string {
  return contrastRatio(bg, LIGHT_TEXT) >= contrastRatio(bg, DARK_TEXT) ? LIGHT_TEXT : DARK_TEXT;
}

/** Translucent circle behind the initial or logo. */
export function chipColor(bg: string): string {
  return textColor(bg) === LIGHT_TEXT ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.12)";
}

export const PALETTE = [
  ["red", "#d50f25"],
  ["pink", "#c2185b"],
  ["orange", "#c2410c"],
  ["amber", "#f59e0b"],
  ["yellow", "#f5c518"],
  ["lime", "#a3c614"],
  ["green", "#3d7d22"],
  ["teal", "#00796b"],
  ["light_blue", "#0a64a8"],
  ["blue", "#0b3d78"],
  ["indigo", "#3949ab"],
  ["purple", "#6d28d9"],
  ["brown", "#6d4c41"],
  ["grey", "#546e7a"],
  ["black", "#000000"],
  ["white", "#f5f5f5"],
] as const;
