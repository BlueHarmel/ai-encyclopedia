import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(scriptPath), "..", "..");
const registryPath = path.join(root, "docs", "sources", "source-registry.md");
const serviceArg = process.argv.find((arg) => arg.startsWith("--service="));
const service = serviceArg ? serviceArg.split("=")[1].trim() : "";
if (!service) {
  console.error("Usage: node pipeline/scripts/fill-service.mjs --service=\"Claude\"");
  process.exit(2);
}

const runStamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "Z");
const rawDir = path.join(root, "pipeline", "raw", slug(service), runStamp);
const normalizedDir = path.join(root, "pipeline", "normalized", slug(service));
const draftsDir = path.join(root, "pipeline", "drafts", slug(service));
for (const dir of [rawDir, normalizedDir, draftsDir]) fs.mkdirSync(dir, { recursive: true });

const registry = fs.readFileSync(registryPath, "utf8");
const sources = parseRegistry(registry, service);
const attempts = [];

for (const source of sources) {
  const record = { ...source, fetched_at: new Date().toISOString(), fetch_status: "pending" };
  try {
    const response = await fetch(source.url, {
      redirect: "follow",
      headers: { "User-Agent": "AI-Encyclopedia-Source-Collector/1.0" }
    });
    record.http_status = response.status;
    record.final_url = response.url;
    record.content_type = response.headers.get("content-type") ?? "";
    const body = await response.text();
    record.fetch_status = response.ok ? "fetched" : statusFor(response.status);
    fs.writeFileSync(path.join(rawDir, `${source.id}.html`), body, "utf8");
    fs.writeFileSync(path.join(rawDir, `${source.id}.txt`), stripHtml(body), "utf8");
    record.text_chars = stripHtml(body).length;
  } catch (error) {
    record.fetch_status = "fetch-failed";
    record.error = String(error?.message ?? error);
  }
  attempts.push(record);
}

const facts = attempts.map((item) => ({
  service,
  topic: "source-collection",
  fact: `${item.title} was collected for source-backed extraction.`,
  source_url: item.url,
  source_title: item.title,
  last_checked: new Date().toISOString().slice(0, 10),
  status: item.fetch_status === "fetched" ? "indexed" : item.fetch_status,
  target_page: ""
}));

const validation = {
  errors: facts
    .filter((fact) => !/^https?:\/\//.test(fact.source_url))
    .map((fact) => `${fact.source_title}: source URL is not fetchable`)
};

fs.writeFileSync(path.join(rawDir, "fetch-report.json"), JSON.stringify({ service, runStamp, sources: attempts }, null, 2), "utf8");
fs.writeFileSync(path.join(normalizedDir, `${runStamp}-facts.json`), JSON.stringify({ service, generated_at: new Date().toISOString(), facts }, null, 2), "utf8");
fs.writeFileSync(path.join(normalizedDir, `${runStamp}-validation.json`), JSON.stringify(validation, null, 2), "utf8");
fs.writeFileSync(path.join(draftsDir, `${runStamp}-draft.md`), draftReport(service, attempts, facts), "utf8");

console.log(JSON.stringify({
  service,
  runStamp,
  sources: sources.length,
  fetched: attempts.filter((item) => item.fetch_status === "fetched").length,
  failed: attempts.filter((item) => item.fetch_status !== "fetched").length,
  rawDir
}, null, 2));

function parseRegistry(markdown, serviceName) {
  const urls = [];
  for (const line of markdown.split(/\r?\n/)) {
    const match = line.match(/^- ([^:]+): (https?:\/\/\S+)/);
    if (match) urls.push({ title: match[1].trim(), url: match[2].trim() });
  }
  const serviceLower = serviceName.toLowerCase();
  const filtered = urls.filter((item) => {
    const title = item.title.toLowerCase();
    if (serviceLower.includes("openai") || serviceLower.includes("chatgpt") || serviceLower.includes("codex")) {
      return /chatgpt|openai|codex/.test(title);
    }
    if (serviceLower.includes("claude")) return /claude|anthropic/.test(title);
    if (serviceLower.includes("gemini")) return /gemini|google ai|google developers/.test(title);
    if (serviceLower.includes("copilot")) return /copilot/.test(title);
    if (serviceLower.includes("genspark")) return /genspark/.test(title);
    if (serviceLower.includes("openclaw")) return /openclaw/.test(title);
    return title.includes(serviceLower);
  });
  return filtered.map((item, index) => ({ ...item, id: `${slug(item.title)}-${index + 1}` }));
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "source";
}

function statusFor(code) {
  if (code === 401) return "needs-auth";
  if (code === 403) return "blocked";
  if (code === 404) return "not-found";
  return "fetch-failed";
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function draftReport(serviceName, attempts, extractedFacts) {
  const rows = attempts.map((item) => `| ${item.title} | ${item.url} | ${item.fetch_status} | ${item.http_status ?? ""} | ${item.text_chars ?? ""} |`).join("\n");
  return `# ${serviceName} Source Collection Draft

Run stamp: ${runStamp}

This draft does not publish facts. It records collection status and creates normalized source-collection records for manual extraction.

| Source | URL | Fetch status | HTTP status | Text chars |
| --- | --- | --- | --- | --- |
${rows}

## Normalized Records

- Records generated: ${extractedFacts.length}
- Public document update: not applied
- Required next step: extract concrete product facts into topic pages only after human review.
`;
}
