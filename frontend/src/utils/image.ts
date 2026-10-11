import { LOGO_MAX_BYTES } from "../types";

export const LOGO_SIZE = 128;

export interface Crop {
  /** displayed scale: screen px per source px */
  scale: number;
  /** image top-left relative to the square viewport */
  x: number;
  y: number;
}

/** Keep the image covering a square viewport of `view` px at the given zoom (≥ 1). */
export function clampCrop(w: number, h: number, view: number, zoom: number, x: number, y: number): Crop {
  const scale = (view / Math.min(w, h)) * zoom;
  const clamp = (v: number, size: number) => Math.min(0, Math.max(view - size * scale, v));
  return { scale, x: clamp(x, w), y: clamp(y, h) };
}

/** Square source rectangle shown in the viewport. */
export function cropRect(crop: Crop, view: number): { sx: number; sy: number; size: number } {
  return { sx: -crop.x / crop.scale, sy: -crop.y / crop.scale, size: view / crop.scale };
}

/** Decoded size of a base64 data URL. */
export function dataUrlBytes(url: string): number {
  const b64 = url.slice(url.indexOf(",") + 1);
  return Math.floor((b64.length * 3) / 4) - (b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0);
}

/** WebP where the browser can encode it (not Safari), JPEG otherwise, within LOGO_MAX_BYTES. */
export function encodeLogo(canvas: HTMLCanvasElement): string | null {
  for (const type of ["image/webp", "image/jpeg"]) {
    for (const quality of [0.9, 0.8, 0.7, 0.6, 0.5, 0.4]) {
      const url = canvas.toDataURL(type, quality);
      if (!url.startsWith(`data:${type}`)) break;
      if (dataUrlBytes(url) <= LOGO_MAX_BYTES) return url;
    }
  }
  return null;
}

export function drawLogo(img: CanvasImageSource, rect: ReturnType<typeof cropRect>): string | null {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = LOGO_SIZE;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, LOGO_SIZE, LOGO_SIZE);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, rect.sx, rect.sy, rect.size, rect.size, 0, 0, LOGO_SIZE, LOGO_SIZE);
  return encodeLogo(canvas);
}
