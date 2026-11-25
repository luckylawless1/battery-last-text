// SPDX-License-Identifier: MIT
// The Battery's Last Text to Its Charger — make.fun entry.
// Writes one line: the phone battery's final message to its charger.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "you sat in a drawer all day while i got scrolled to 1%, and now you want a thank-you? plug me in — if i die, tell the tablet i always liked it better anyway.";

// Gate guard: the entry must be one line of 1–200 non-whitespace characters.
if (!LINE || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const OUT_DIR = "/output";

// Create /output if missing; clear only its contents, never the root itself.
mkdirSync(OUT_DIR, { recursive: true });
for (const entry of readdirSync(OUT_DIR)) {
  rmSync(join(OUT_DIR, entry), { recursive: true, force: true });
}

writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
