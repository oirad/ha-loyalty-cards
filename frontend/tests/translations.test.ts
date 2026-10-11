// Every language has exactly the keys and placeholders of en.json.
import { readFileSync, readdirSync } from "node:fs";
import { expect, test } from "vitest";

const dir = new URL("../src/localize/", import.meta.url);
const load = (f: string) => JSON.parse(readFileSync(new URL(f, dir), "utf8")) as Record<string, string>;
const en = load("en.json");
const files = readdirSync(dir).filter((f) => f.endsWith(".json"));
const vars = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort();

test("all 8 languages present", () => {
  expect(files.sort()).toEqual(["de", "en", "es", "fr", "it", "nl", "pl", "pt"].map((l) => `${l}.json`));
});

test.each(files)("%s has the same keys and placeholders", (file) => {
  const strings = load(file);
  expect(Object.keys(strings).sort()).toEqual(Object.keys(en).sort());
  for (const key of Object.keys(en)) expect(vars(strings[key]), key).toEqual(vars(en[key]));
});
