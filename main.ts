import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer (100 code points).
// Fortune-cookie voice: a balanced sentence in one breath.
// True about a developer's day: the 3 a.m. debug session, the missing comment.
// Quiet twist: the tired stranger who will read your code at 3 a.m. is you.
const FORTUNE =
  "Your future self will read this code at 3 a.m.; write the comment you wish someone had left for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE);

// Read back and verify the gate: UTF-8 text, 1-120 characters, single line.
const back = readFileSync("/output/entry.txt", "utf8");
const points = [...back].length;
if (points < 1 || points > 120) throw new Error(`entry is ${points} code points, gate is 1-120`);
if (back.includes("\n") || back.trim().length === 0) throw new Error("entry must be one non-blank line");
console.log(`verified /output/entry.txt: ${points} code points, ${Buffer.byteLength(back)} bytes, single line: true`);
console.log(FORTUNE);
