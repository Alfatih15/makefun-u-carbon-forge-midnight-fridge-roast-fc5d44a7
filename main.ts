// Midnight Fridge Roast — make.fun competition
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// Writes exactly one line to /output/entry.txt: a roast of a smart fridge
// that refuses to open after midnight. Node 22+, standard library only,
// no network, fully deterministic — the same bytes on every run.
//
// Output contract (sealed gate): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only whitespace. This line is 122 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge locks at midnight like the leftovers took out a restraining order — I need a court order just to get a sandwich.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
