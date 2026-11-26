import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Tarnwick sees a high of 61 and a low of 58, with a 90 percent chance of rain that falls sideways out of sheer spite.";

// Count Unicode code points, not UTF-16 units, so the 160-char gate is
// measured the same way the scorer measures the UTF-8 text.
const charCount = [...LINE].length;

if (charCount < 1 || charCount > 160) {
  throw new Error(`entry must be 1-160 characters, got ${charCount}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("written entry does not match the validated line");
}
