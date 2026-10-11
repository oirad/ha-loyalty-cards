// Barcode decoding (photo → number) and rendering (number → SVG), all in the browser.
import { FORMATS, type CardFormat } from "../types";

export const FORMAT_LABELS: Record<CardFormat, string> = {
  ean13: "EAN-13",
  ean8: "EAN-8",
  upca: "UPC-A",
  upce: "UPC-E",
  code128: "Code 128",
  code39: "Code 39",
  itf: "ITF",
  codabar: "Codabar",
  qr: "QR code",
  datamatrix: "Data Matrix",
  pdf417: "PDF417",
  aztec: "Aztec",
};

const BCID: Record<CardFormat, string> = {
  ean13: "ean13",
  ean8: "ean8",
  upca: "upca",
  upce: "upce",
  code128: "code128",
  code39: "code39",
  itf: "interleaved2of5",
  codabar: "rationalizedCodabar",
  qr: "qrcode",
  datamatrix: "datamatrix",
  pdf417: "pdf417",
  aztec: "azteccode",
};

export const isSquare = (f: CardFormat) => f === "qr" || f === "datamatrix" || f === "aztec";
export const isLinear = (f: CardFormat) => !isSquare(f) && f !== "pdf417";

/**
 * Map BarcodeDetector ("ean_13", "qr_code") and zxing ("EAN-13", "QRCode", "ITF14")
 * names onto our formats. Unknown symbologies fall back to Code 128.
 */
export function toFormat(name: string): CardFormat {
  const n = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return FORMATS.find((f) => n.startsWith(f === "qr" ? "qrcode" : f)) ?? "code128";
}

/** SVG markup, or null if the number is not valid for the format. */
export async function renderCode(number: string, format: CardFormat): Promise<string | null> {
  const { toSVG } = await import("bwip-js/browser");
  try {
    return toSVG({
      bcid: BCID[format],
      text: number,
      scale: 3,
      ...(isLinear(format) ? { height: 20, paddingwidth: 10 } : {}),
    });
  } catch {
    return null;
  }
}

export interface Decoded {
  number: string;
  format: CardFormat;
}

declare class BarcodeDetector {
  detect(image: ImageBitmapSource): Promise<{ rawValue: string; format: string }[]>;
}

async function zxing() {
  const mod = await import("zxing-wasm/reader");
  mod.prepareZXingModule({
    overrides: {
      locateFile: (path: string, prefix: string) =>
        path.endsWith(".wasm") ? new URL(path, import.meta.url).href : prefix + path,
    },
  });
  return mod;
}

/** Start downloading the fallback decoder where there is no native one (iOS). */
export const preloadDecoder = () => {
  if (!("BarcodeDetector" in window)) zxing().catch(() => undefined);
};

export async function decodeImage(file: Blob): Promise<Decoded | null> {
  if ("BarcodeDetector" in window) {
    try {
      const [hit] = await new BarcodeDetector().detect(await createImageBitmap(file));
      if (hit) return { number: hit.rawValue, format: toFormat(hit.format) };
    } catch {
      // fall through to zxing
    }
  }
  const { readBarcodes } = await zxing();
  const [hit] = (await readBarcodes(file, { tryHarder: true, maxNumberOfSymbols: 1 })).filter(
    (r) => r.isValid,
  );
  return hit ? { number: hit.text, format: toFormat(hit.format) } : null;
}
