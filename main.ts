// Unsent: The Micro-Confession Sprint — entry program.
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line and the unsent line itself, exactly as typed.
//
// Why this one: the addressee is load-bearing (only Dad's voicemails
// carry his voice saying the sender's name), the reason it stayed
// unsent is felt rather than stated (too late, not too clever), and
// the lowercase, unpunctuated line reads as typed in a draft, never
// sent — a confession, not a joke written for an audience.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "To: Dad\ni still save your voicemails because it's the only way i hear you say my name anymore";

// Gate self-check: whole file 1-260 characters, message line at most
// 200 characters, not whitespace-only.
const lines = CONFESSION.split("\n");
const message = lines[1] ?? "";
const total = [...CONFESSION].length;
if (
  total < 1 ||
  total > 260 ||
  [...message].length > 200 ||
  CONFESSION.trim().length === 0
) {
  throw new Error(`confession fails gate: ${total} characters total`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
