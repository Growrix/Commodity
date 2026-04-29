const fs = require("node:fs");
const path = require("node:path");

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "frontend", ".next");
const targetDir = path.join(rootDir, ".next");

if (!fs.existsSync(sourceDir)) {
  console.error(`Expected Next.js build output at ${sourceDir}, but it was not found.`);
  process.exit(1);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });

console.log(`Synced Next.js output from ${sourceDir} to ${targetDir}`);
