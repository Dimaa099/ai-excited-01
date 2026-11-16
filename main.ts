// ai-excited-01 — "Ink Leap"
// Copies the repository-held artwork (entry.png) to the output directory.
// Deterministic: the same bytes are written on every run. No network,
// no randomness, stdlib only.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Output directory comes from the harness; default to /output when unset
// or empty. Resolved to an absolute path so a relative value still lands
// where the caller expects.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output");
// The artwork lives next to this script, wherever the repo is checked out.
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
