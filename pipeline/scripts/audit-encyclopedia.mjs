import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(scriptPath), "..", "..");
const docsRoot = path.join(root, "docs");
const outDir = path.join(root, "pipeline", "audits");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(docsRoot, file).replaceAll(path.sep, "/");
}

const files = walk(docsRoot);
const rows = files.map((file) => {
  const text = fs.readFileSync(file, "utf8");
  const words = (text.match(/[A-Za-z0-9가-힣]+/g) ?? []).length;
  const indexed = (text.match(/\bindexed\b/g) ?? []).length;
  const needs = (text.match(/needs-recheck|missing|needs-extraction|needs extraction|not-found-yet/g) ?? []).length;
  const links = (text.match(/https?:\/\//g) ?? []).length;
  const lastChecked = [...text.matchAll(/20\d\d-\d\d-\d\d/g)].map((m) => m[0]).sort().pop() ?? "";
  const repeatedRows = {};
  for (const line of text.split(/\r?\n/).filter((x) => x.startsWith("|") && !/^(\|\s*-)/.test(x))) {
    repeatedRows[line] = (repeatedRows[line] ?? 0) + 1;
  }
  return {
    path: rel(file),
    words,
    links,
    indexed,
    needs_attention: needs,
    last_checked: lastChecked,
    duplicate_table_rows: Object.values(repeatedRows).filter((count) => count > 1).length
  };
});

const summary = {
  generated_at: new Date().toISOString(),
  document_count: rows.length,
  indexed_mentions: rows.reduce((sum, row) => sum + row.indexed, 0),
  needs_attention_mentions: rows.reduce((sum, row) => sum + row.needs_attention, 0),
  duplicate_table_row_groups: rows.reduce((sum, row) => sum + row.duplicate_table_rows, 0),
  shortest_documents: [...rows].sort((a, b) => a.words - b.words).slice(0, 10),
  highest_attention_documents: [...rows].sort((a, b) => b.needs_attention - a.needs_attention).slice(0, 10),
  rows
};

fs.mkdirSync(outDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "Z");
const file = path.join(outDir, `${stamp}-audit.json`);
fs.writeFileSync(file, JSON.stringify(summary, null, 2), "utf8");
console.log(JSON.stringify({ file, ...summary, rows: undefined }, null, 2));
