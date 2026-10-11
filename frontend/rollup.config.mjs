import { readFileSync, rmSync } from "node:fs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const outDir = "../custom_components/loyalty_cards/www";
rmSync(outDir, { recursive: true, force: true });

// zxing-wasm loads its wasm next to the bundle instead of from a CDN.
const zxingWasm = {
  name: "zxing-wasm",
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "zxing_reader.wasm",
      source: readFileSync("node_modules/zxing-wasm/dist/reader/zxing_reader.wasm"),
    });
  },
};

export default {
  input: "src/loyalty-cards-panel.ts",
  output: {
    dir: outDir,
    format: "es",
    entryFileNames: "loyalty-cards-panel.js",
    chunkFileNames: "chunk-[hash].js",
  },
  plugins: [
    nodeResolve({ browser: true }),
    json(),
    typescript({ noEmit: false, outDir }),
    terser({ format: { comments: false } }),
    zxingWasm,
  ],
};
