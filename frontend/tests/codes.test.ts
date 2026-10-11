import { expect, test } from "vitest";
import type { CardFormat } from "../src/types";
import { renderCode } from "../src/utils/codes";

const SAMPLES: Record<CardFormat, string> = {
  ean13: "2012345678903",
  ean8: "96385074",
  upca: "036000291452",
  upce: "01234565",
  code128: "LOY-12345",
  code39: "CODE39",
  itf: "12345678",
  codabar: "A12345B",
  qr: "https://example.com/card/42",
  datamatrix: "0123456789",
  pdf417: "Loyalty 1234",
  aztec: "1234567890",
};

test.each(Object.entries(SAMPLES))("%s renders as SVG", async (format, number) => {
  expect(await renderCode(number, format as CardFormat)).toMatch(/^<svg/);
});

test("invalid numbers are rejected", async () => {
  expect(await renderCode("abc", "ean13")).toBeNull();
  expect(await renderCode("12AB", "itf")).toBeNull();
});

test("EAN-13 with a wrong check digit is rejected", async () => {
  expect(await renderCode("2012345678901", "ean13")).toBeNull();
});
