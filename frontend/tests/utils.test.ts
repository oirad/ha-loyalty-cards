import { describe, expect, test } from "vitest";
import type { Card } from "../src/types";
import { toFormat } from "../src/utils/codes";
import { DARK_TEXT, LIGHT_TEXT, PALETTE, contrastRatio, textColor } from "../src/utils/contrast";
import { clampCrop, cropRect, dataUrlBytes } from "../src/utils/image";
import { filterCards, sortCards } from "../src/utils/search";

const cards = ["Esselunga", "Coop", "Caffè Città", "Arcaplanet"].map((name) => ({ name }) as Card);

describe("search", () => {
  test("partial, case-insensitive, accents ignored", () => {
    expect(filterCards(cards, "coo").map((c) => c.name)).toEqual(["Coop"]);
    expect(filterCards(cards, "ESSE").map((c) => c.name)).toEqual(["Esselunga"]);
    expect(filterCards(cards, "caffe citta").map((c) => c.name)).toEqual(["Caffè Città"]);
    expect(filterCards(cards, "  ")).toHaveLength(4);
  });
  test("alphabetical order", () => {
    expect(sortCards(cards).map((c) => c.name)).toEqual(["Arcaplanet", "Caffè Città", "Coop", "Esselunga"]);
  });
});

describe("contrast", () => {
  const dark = new Set(["amber", "yellow", "lime", "white"]);
  test.each(PALETTE)("%s matches the design table", (name, hex) => {
    expect(textColor(hex)).toBe(dark.has(name) ? DARK_TEXT : LIGHT_TEXT);
    expect(contrastRatio(hex, textColor(hex))).toBeGreaterThanOrEqual(4.5);
  });
  test("ratio", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21);
  });
});

describe("logo crop", () => {
  test("landscape image is clamped to cover the viewport", () => {
    const crop = clampCrop(400, 200, 256, 1, 50, 10);
    expect(crop.scale).toBeCloseTo(1.28);
    expect(crop).toMatchObject({ x: 0, y: 0 });
    expect(clampCrop(400, 200, 256, 1, -999, 0).x).toBeCloseTo(256 - 400 * 1.28);
  });
  test("crop rect in source pixels", () => {
    const crop = clampCrop(400, 200, 256, 2, -256, -64);
    expect(cropRect(crop, 256)).toEqual({ sx: 100, sy: 25, size: 100 });
  });
  test("data url size", () => {
    expect(dataUrlBytes("data:image/webp;base64," + btoa("abcde"))).toBe(5);
    expect(dataUrlBytes("data:image/webp;base64," + btoa("abcdef"))).toBe(6);
  });
});

test("decoder names map to card formats", () => {
  expect(["ean_13", "EAN-13", "EAN13"].map(toFormat)).toEqual(["ean13", "ean13", "ean13"]);
  expect(toFormat("qr_code")).toBe("qr");
  expect(toFormat("QRCode")).toBe("qr");
  expect(toFormat("data_matrix")).toBe("datamatrix");
  expect(toFormat("ITF14")).toBe("itf");
  expect(toFormat("UPC-E")).toBe("upce");
  expect(toFormat("code_93")).toBe("code128");
});
