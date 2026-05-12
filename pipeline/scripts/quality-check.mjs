import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(scriptPath), "..", "..");
const docsRoot = path.join(root, "docs");
const docsKoRoot = path.join(root, "docs-ko");
const wikiHtml = path.join(root, "wiki", "index.html");

const secretPattern = /sk-[A-Za-z0-9]|Authorization:|Set-Cookie:|oauth_token|refresh_token|access_token|refreshToken|accessToken/;
const mojibakePattern = /�|占|묒꽦|쒕|꾩|媛|怨|遺|뺤|瑜|쨌|\?{2,}/;
const blockedText = /\bTODO\b|placeholder|stub/i;
const rawMarkdownHref = /href="(?:services|docs)\//;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function addHit(hits, type, file, line, detail) {
  hits.push({
    type,
    file: path.relative(root, file).replaceAll(path.sep, "/"),
    line,
    detail
  });
}

const hits = [];
const markdownRoots = [docsRoot, docsKoRoot].filter((dir) => fs.existsSync(dir));
for (const file of markdownRoots.flatMap((dir) => walk(dir))) {
  const text = fs.readFileSync(file, "utf8");
  for (const [type, pattern] of [
    ["secret", secretPattern],
    ["mojibake", mojibakePattern],
    ["blocked-text", blockedText]
  ]) {
    const match = pattern.exec(text);
    if (match) addHit(hits, type, file, lineOf(text, match.index), match[0]);
  }

  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)) {
    const href = match[1].replace(/\\/g, "/");
    if (/^(https?:|mailto:|#|\/)/i.test(href)) continue;
    const target = path.resolve(path.dirname(file), href);
    const owningRoot = file.startsWith(docsKoRoot) ? docsKoRoot : docsRoot;
    const fallbackTarget = file.startsWith(docsKoRoot)
      ? path.resolve(docsRoot, path.relative(docsKoRoot, target))
      : "";
    if ((!target.startsWith(owningRoot) || !fs.existsSync(target)) && !(fallbackTarget && fs.existsSync(fallbackTarget))) {
      addHit(hits, "broken-md-link", file, lineOf(text, match.index), href);
    }
  }
}

if (fs.existsSync(wikiHtml)) {
  const html = fs.readFileSync(wikiHtml, "utf8");
  for (const [type, pattern] of [
    ["secret", secretPattern],
    ["mojibake", mojibakePattern],
    ["blocked-text", blockedText],
    ["raw-markdown-href", rawMarkdownHref]
  ]) {
    const match = pattern.exec(html);
    if (match) addHit(hits, type, wikiHtml, lineOf(html, match.index), match[0]);
  }
}

const report = {
  checked_at: new Date().toISOString(),
  root,
  errors: hits
};

console.log(JSON.stringify(report, null, 2));
if (hits.length) process.exit(1);
