import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One sentence for a traveler from 1800, built only from images they know:
// roads, the post office, the library, the market square. No word coined
// after their time, no list of wonders, one picture to carry home.
const sentence =
  "Picture every road, post office, library, and market square folded into a single room, where a letter reaches the farthest town before your ink dries, and the clerk who carries it never sleeps.";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
console.log(`wrote ${sentence.length} characters to output/entry.txt`);
