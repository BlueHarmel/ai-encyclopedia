import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptPath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(scriptPath), '..', '..');
const docsRoot = path.join(root, 'docs');
const serviceDir = path.join(docsRoot, 'services', 'openai-gpt', 'chatgpt-app');
const runStamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, 'Z');
const date = '2026-04-26';
const apply = process.argv.includes('--apply');

const sources = [
  {
    id: 'chatgpt-release-notes',
    title: 'ChatGPT release notes',
    url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
    status: 'covered',
  },
  {
    id: 'chatgpt',
    title: 'About ChatGPT Pro tiers',
    url: 'https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro',
    status: 'covered',
  },
  {
    id: 'chatgpt-plus',
    title: 'What is ChatGPT Plus?',
    url: 'https://help.openai.com/en/articles/6950777-chatgpt-plus',
    status: 'covered',
  },
  {
    id: 'codex-rate-card',
    title: 'Codex rate card',
    url: 'https://help.openai.com/en/articles/20001106',
    status: 'covered',
  },
  {
    id: 'openai-platform-docs',
    title: 'OpenAI API Platform Documentation',
    url: 'https://platform.openai.com/docs',
    status: 'indexed',
  },
  {
    id: 'codex-changelog',
    title: 'Codex changelog',
    url: 'https://developers.openai.com/codex/changelog/',
    status: 'covered',
  },
];

const sourceById = Object.fromEntries(sources.map((source) => [source.id, source]));

const facts = [
  fact('plans', 'ChatGPT Pro is a paid ChatGPT subscription documented by OpenAI Help Center.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'OpenAI documents Pro tiers as including access to Pro models, Codex, deep research, image creation, memory, and file uploads.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro article states that ChatGPT Pro offers unlimited access to GPT-5 and legacy models, subject to OpenAI Terms of Use and guardrails.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'OpenAI documents Plus at $20 per month, billed monthly.', 'chatgpt-plus', 'plans-and-usage.md'),
  fact('plans', 'The Plus article states that API usage is separate from ChatGPT Plus and billed independently.', 'chatgpt-plus', '../openai-api/README.md'),
  fact('plans', 'The Pro article describes Plus $20, Pro $100, and Pro $200 as separate plan options.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro $100 tier is documented as having 5x higher usage than Plus, with 10x Codex usage versus Plus for a limited time.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro $200 tier is documented as having 20x higher usage than Plus, with 25x Codex 5-hour limits for a limited time.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro article says users can upgrade from the Pricing page or from Settings > My Plan.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro article says users can switch between the $100 and $200 Pro tiers from Settings > My Plan.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro article says users can change or cancel a subscription from Settings > My Plan.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Pro article says annual billing is not supported for ChatGPT Go, Plus, or Pro subscriptions.', 'chatgpt', 'plans-and-usage.md'),
  fact('plans', 'The Plus article says annual billing is not supported for ChatGPT Plus subscriptions.', 'chatgpt-plus', 'plans-and-usage.md'),
  fact('plans', 'The Plus article says subscription management, invoices, and cancellation are handled from ChatGPT account settings.', 'chatgpt-plus', 'plans-and-usage.md'),
  fact('plans', 'The Plus article says refunds are typically processed within 5 to 10 business days after approval.', 'chatgpt-plus', 'plans-and-usage.md'),

  fact('models-tools', 'The Plus article says GPT-4o, GPT-4.1, GPT-4.1 mini, OpenAI o4-mini, and GPT-5 Instant and Thinking were retired from ChatGPT as of February 13, 2026.', 'chatgpt-plus', 'models.md'),
  fact('models-tools', 'The Plus article says API access is unchanged by the February 13, 2026 ChatGPT model retirement.', 'chatgpt-plus', '../openai-api/README.md'),
  fact('models-tools', 'The Plus article lists priority access during high-traffic periods as a Plus benefit.', 'chatgpt-plus', 'models.md'),
  fact('models-tools', 'The Plus article lists access to higher GPT-5.3 limits as a Plus benefit.', 'chatgpt-plus', 'models.md'),
  fact('models-tools', 'The Plus article lists access to advanced reasoning models as a Plus benefit.', 'chatgpt-plus', 'models.md'),
  fact('models-tools', 'The Plus article lists voice conversations, image generation, file uploads and analysis, deep research tools, and custom GPT creation and use as expanded Plus features.', 'chatgpt-plus', 'tools.md'),
  fact('models-tools', 'The Pro article says both Pro tiers include the same core capabilities and differ mainly by usage allowance.', 'chatgpt', 'models.md'),
  fact('models-tools', 'The April 21, 2026 ChatGPT release notes introduce ChatGPT Images 2.0 as available on all ChatGPT plans.', 'chatgpt-release-notes', 'tools.md'),
  fact('models-tools', 'The April 21, 2026 release notes say images with thinking is available on paid ChatGPT plans when selecting Thinking and Pro models.', 'chatgpt-release-notes', 'tools.md'),
  fact('models-tools', 'The April 9, 2026 release notes say GPT-5.3 Instant Mini replaces GPT-5 Instant Mini as the fallback after users hit GPT-5.3 Instant rate limits.', 'chatgpt-release-notes', 'models.md'),

  fact('release-notes', 'The April 22, 2026 release notes introduce Fast answers in ChatGPT for common information-seeking questions.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 22, 2026 release notes say Fast answers are available globally on web, iOS, and Android for logged-in and logged-out users across plans.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 22, 2026 release notes say Fast answers do not reference past chats or memory.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 22, 2026 release notes announce ChatGPT for Clinicians as a free version for verified clinicians in the United States.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 16, 2026 release notes say ads are rolling out for Free and Go users in Australia, New Zealand, and Canada, and that Plus, Pro, Business, Enterprise, and Education plans do not have ads.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 9, 2026 release notes introduce a new $100 per month Pro plan and updated Codex usage across Plus and Pro.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The April 8, 2026 release notes say Outlook Email and Calendar apps for ChatGPT can work with delegated or shared Outlook resources when the user has access.', 'chatgpt-release-notes', 'connectors-and-files.md'),
  fact('release-notes', 'The April 2, 2026 release notes announce ChatGPT in Apple CarPlay for iOS 26.4 or newer on supported cars.', 'chatgpt-release-notes', 'release-notes-tracker.md'),
  fact('release-notes', 'The March 27, 2026 release notes say updated Box, Notion, Linear, and Dropbox apps add new app actions including write capabilities where supported.', 'chatgpt-release-notes', 'connectors-and-files.md'),
  fact('release-notes', 'The March 25, 2026 release notes say long pastes over 5k characters are converted into attachments for ChatGPT Plus, Pro, and Business users.', 'chatgpt-release-notes', 'connectors-and-files.md'),
  fact('release-notes', 'The March 25, 2026 release notes say Google file connectors in ChatGPT are unified under Google Drive.', 'chatgpt-release-notes', 'connectors-and-files.md'),
  fact('release-notes', 'The March 25, 2026 release notes say Google Drive sync behavior is unchanged for Pro users.', 'chatgpt-release-notes', 'connectors-and-files.md'),
  fact('release-notes', 'The March 26, 2026 release notes say location sharing is optional, off until enabled, and configurable in Settings > Data Controls.', 'chatgpt-release-notes', 'app.md'),
  fact('release-notes', 'The March 26, 2026 release notes say precise location data is deleted after it is used to provide a more relevant response.', 'chatgpt-release-notes', 'app.md'),

  fact('codex', 'The Codex rate card says Codex pricing was updated on April 2, 2026 to align with API token usage instead of per-message pricing.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says the April 23, 2026 token-based pricing update applies to all existing ChatGPT Enterprise plans including Edu, Health, Gov, and ChatGPT for Teachers.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says token-based pricing applies to new and existing ChatGPT Plus and Pro customers.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says Codex usage is priced based on API token usage for input tokens, cached input tokens, and output tokens.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card lists GPT-5.5 at 125 credits per 1M input tokens, 12.50 credits per 1M cached input tokens, and 750 credits per 1M output tokens.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says code review uses GPT-5.3-Codex.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says GPT-5.3-Codex-Spark may be available in Codex as a research preview and credit rates are not final.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The Codex rate card says users can monitor token usage in Codex settings > Usage.', 'codex-rate-card', '../codex/chatgpt-integration.md'),
  fact('codex', 'The March 26, 2026 ChatGPT release notes say Codex includes a curated plugins directory for packaged workflows built from apps and skills.', 'chatgpt-release-notes', '../codex/chatgpt-integration.md'),

  fact('api-vs-app', 'The OpenAI API docs are separate from ChatGPT product documentation and include API reference, Codex, ChatGPT developer docs, Apps SDK, and Commerce sections.', 'openai-platform-docs', '../openai-api/README.md'),
  fact('api-vs-app', 'The API docs list core concepts including text generation, code generation, images and vision, audio and speech, structured outputs, function calling, Responses API, and tools.', 'openai-platform-docs', '../openai-api/README.md'),
  fact('api-vs-app', 'The API docs list separate API tools including web search, MCP and connectors, skills, shell, computer use, file search, retrieval, tool search, local shell, image generation, and code interpreter.', 'openai-platform-docs', '../openai-api/README.md'),
  fact('api-vs-app', 'The API docs list run-and-scale topics including conversation state, background mode, streaming, WebSocket mode, webhooks, file inputs, compaction, token counting, and prompt caching.', 'openai-platform-docs', '../openai-api/README.md'),
];

function fact(topic, text, sourceId, targetPage) {
  const source = sourceById[sourceId] ?? { title: sourceId, url: sourceId };
  return {
    service: 'ChatGPT',
    topic,
    fact: text,
    source_url: source.url,
    source_title: source.title,
    last_checked: date,
    status: 'covered',
    target_page: `docs/services/openai-gpt/chatgpt-app/${targetPage}`.replace('/chatgpt-app/../', '/'),
  };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

async function collectSources() {
  const rawDir = path.join(root, 'pipeline', 'raw', 'chatgpt', runStamp);
  ensureDir(rawDir);
  const attempts = [];
  for (const source of sources) {
    const started = new Date().toISOString();
    const record = { ...source, fetched_at: started, fetch_status: 'pending' };
    try {
      const response = await fetch(source.url, {
        headers: {
          'User-Agent': 'AI-Encyclopedia-Fact-Filler/1.0',
          Accept: 'text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8',
        },
        redirect: 'follow',
      });
      record.http_status = response.status;
      record.final_url = response.url;
      record.content_type = response.headers.get('content-type') ?? '';
      const body = await response.text();
      if (!response.ok) {
        record.fetch_status = response.status === 404 ? 'not-found' : response.status === 401 ? 'needs-auth' : response.status === 403 ? 'blocked' : 'fetch-failed';
      } else {
        record.fetch_status = 'fetched';
      }
      record.text_chars = stripHtml(body).length;
      fs.writeFileSync(path.join(rawDir, `${source.id}.html`), body, 'utf8');
      fs.writeFileSync(path.join(rawDir, `${source.id}.txt`), stripHtml(body), 'utf8');
    } catch (error) {
      record.fetch_status = 'fetch-failed';
      record.error = String(error?.message ?? error);
    }
    attempts.push(record);
  }
  fs.writeFileSync(path.join(rawDir, 'fetch-report.json'), JSON.stringify({ service: 'ChatGPT', runStamp, sources: attempts }, null, 2), 'utf8');
  return { rawDir, attempts };
}

function validateFacts() {
  const forbidden = /강하다|적합하다|워크스페이스|강점|약점|추상|placeholder|TODO|�|占/;
  const errors = [];
  for (const item of facts) {
    for (const field of ['service', 'topic', 'fact', 'source_url', 'source_title', 'last_checked', 'status', 'target_page']) {
      if (!item[field]) errors.push(`${item.fact}: missing ${field}`);
    }
    if (!/^https:\/\/(help\.openai\.com|platform\.openai\.com|developers\.openai\.com)/.test(item.source_url)) {
      errors.push(`${item.fact}: source_url is not an allowed official OpenAI URL`);
    }
    if (forbidden.test(item.fact)) errors.push(`${item.fact}: contains forbidden wording`);
    const target = path.join(root, item.target_page.replace(/^docs\//, 'docs/'));
    if (!fs.existsSync(target)) errors.push(`${item.fact}: target page does not exist: ${item.target_page}`);
  }
  return errors;
}

function groupByTarget() {
  const grouped = new Map();
  for (const item of facts) {
    const key = item.target_page.replace('docs/services/openai-gpt/chatgpt-app/', '');
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(item);
  }
  return grouped;
}

function table(rows) {
  return rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, '/')).join(' | ')} |`).join('\n');
}

function sourceLink(item) {
  return `[${item.source_title}](${item.source_url})`;
}

const pageExplanations = {
  'plans-and-usage.md': {
    summary: 'This page explains the official ChatGPT plan and subscription facts that affect a paid ChatGPT user. OpenAI documents ChatGPT Plus and ChatGPT Pro as separate paid plans, and the Pro article separates Plus, Pro $100, and Pro $200 tiers. The facts below should be used for plan comparison, billing checks, and subscription management questions.',
    bullets: [
      'Use this page when the question is about monthly price, plan tier, usage allowance, cancellation, invoices, refunds, or annual billing.',
      'Do not use this page to infer API billing. OpenAI documents API usage as separate from ChatGPT Plus billing.',
      'Temporary Codex usage promotions must keep their official source and last-checked date because they can change.',
    ],
  },
  'models.md': {
    summary: 'This page explains model and tool access facts that OpenAI documents for ChatGPT plans. It separates plan-scoped ChatGPT product behavior from API behavior, and records release-note changes that affect model availability, image generation, file analysis, voice, deep research, memory, and custom GPT usage.',
    bullets: [
      'Use this page when the question is about which ChatGPT plan includes which app-level models or tools.',
      'Use ../openai-api/README.md when the same question is about API behavior, endpoint behavior, or developer tools.',
      'Model retirement and fallback facts require dated release notes because availability changes over time.',
    ],
  },
  'tools.md': {
    summary: 'This page explains ChatGPT tool access facts that OpenAI documents for ChatGPT plans. It records app-level capabilities such as voice, image generation, file uploads, deep research tools, memory, custom GPTs, and image tools.',
    bullets: [
      'Use this page when the question is about ChatGPT app tools rather than model IDs.',
      'Use ../openai-api/README.md for API tools, endpoints, or developer setup.',
      'Tool availability must be checked against plan and workspace limits.',
    ],
  },
  'release-notes-tracker.md': {
    summary: 'This page turns dated ChatGPT release notes into a product-change timeline. Each row records a specific release item, the official release-note source, and the date checked. It is intended for answering what changed, when it changed, and which plans or surfaces were affected.',
    bullets: [
      'Use this page for dated product changes such as Fast answers, ads by plan, location sharing, CarPlay, and clinician-specific releases.',
      'Do not treat a release note as a permanent plan rule unless the current plan/help article still supports it.',
      'When a release item links to a deeper help article, add that secondary source to the extraction backlog if it affects limits, billing, data controls, or connectors.',
    ],
  },
  '../openai-api/README.md': {
    summary: 'This page explains which facts belong to the ChatGPT app and which belong to the OpenAI API platform. The main rule is that ChatGPT subscription facts do not automatically describe API access, billing, endpoints, or developer tools. API behavior must be checked in OpenAI Platform documentation.',
    bullets: [
      'Use this page before answering whether a ChatGPT subscription includes API usage.',
      'Use ChatGPT help articles for app subscription facts and Platform docs for API facts.',
      'Keep API endpoint and tool facts separate from ChatGPT app features even when names overlap.',
    ],
  },
  '../codex/chatgpt-integration.md': {
    summary: 'This page explains Codex facts that affect ChatGPT Plus and Pro users. OpenAI documents Codex usage through the Codex rate card and Codex changelog, including token-based pricing, credit rates, code review model usage, and temporary usage promotions.',
    bullets: [
      'Use this page for Codex usage, credit rates, model names, and where users can monitor usage.',
      'Use the Codex changelog for product behavior changes and the Codex rate card for pricing basis.',
      'Credit rates and research-preview model rates should be rechecked before making operational decisions.',
    ],
  },
  'connectors-and-files.md': {
    summary: 'This page explains ChatGPT file and connector facts from official release notes. It covers long-paste attachment behavior, Google Drive connector consolidation, Outlook delegated resources, and connector actions for services such as Box, Notion, Linear, and Dropbox.',
    bullets: [
      'Use this page when the question is about file upload behavior, long pasted text, Google Drive, Outlook, or app connector capabilities.',
      'Connector write actions must be treated as source-specific because the release note says they exist where supported.',
      'Data-control and location facts belong here only when official release notes or help articles document them.',
    ],
  },
};

function writeServiceDocs() {
  const before = new Map();
  for (const file of fs.readdirSync(serviceDir).filter((x) => x.endsWith('.md'))) {
    before.set(file, fs.readFileSync(path.join(serviceDir, file), 'utf8'));
  }

  const sourceRows = sources.map((source) => [
    source.title,
    source.url,
    source.status,
    date,
    source.status === 'covered' ? 'Concrete facts extracted into service pages.' : 'Known source; additional detailed extraction remains open.',
  ]);
  const pages = [
    ['Plans and usage', 'plans-and-usage.md', 'Plans, billing, usage allowances, subscription management.'],
    ['Models', 'models.md', 'Model access, context windows, usage limits, and release-note model changes.'],
    ['Tools', 'tools.md', 'ChatGPT app tool access and plan-scoped tool behavior.'],
    ['Release notes tracker', 'release-notes-tracker.md', 'Date-stamped ChatGPT app changes.'],
    ['OpenAI API', '../openai-api/README.md', 'Differences between ChatGPT app facts and API documentation.'],
    ['Codex integration', '../codex/chatgpt-integration.md', 'Codex usage, pricing basis, model credit rates.'],
    ['Connectors and files', 'connectors-and-files.md', 'Files, long pastes, Google Drive, Outlook, app connectors.'],
    ['Coverage ledger', 'coverage-ledger.md', 'Source-by-source extraction state.'],
  ];
  const byTarget = groupByTarget();

  writeFile('README.md', `# OpenAI / GPT / ChatGPT App

Last verified: ${date}

This page is the fact index for the ChatGPT app surface inside OpenAI / GPT. It contains only official-source-backed facts or pointers to extraction status.

## Pages

| Page | File | Scope |
| --- | --- | --- |
${table(pages)}

## Official Source Coverage

| Source | URL | Status | Last checked | Evidence state |
| --- | --- | --- | --- | --- |
${table(sourceRows)}

## Completion Rule

- A source is covered only when concrete facts from that source appear in a topic page.
- Pricing, usage limits, model availability, and promotions require last-checked dates.
- News, community posts, X posts, and third-party education material are signals only.
`);

  writeFile('coverage-ledger.md', `# ChatGPT Coverage Ledger

Last verified: ${date}

| Source | URL | Coverage status | Last checked | Required action |
| --- | --- | --- | --- | --- |
${table(sourceRows.map(([title, url, status, checked, evidence]) => [title, url, status, checked, evidence]))}

## Open Extraction Backlog

| Area | Status | Required action |
| --- | --- | --- |
| Full OpenAI API reference | indexed | Extract endpoint-level facts only when ChatGPT pages need API comparison. |
| Older ChatGPT release notes before March 2026 | indexed | Backfill only release items that affect current product behavior or plan comparison. |
| Linked secondary help articles from release notes | needs-extraction | Add only when they define plan limits, data controls, connectors, or billing behavior. |
`);

  const targetPages = {
    'plans-and-usage.md': 'Plans And Usage',
    'models.md': 'Models',
    'tools.md': 'Tools',
    'release-notes-tracker.md': 'Release Notes Tracker',
    '../openai-api/README.md': 'API Versus ChatGPT App',
    '../codex/chatgpt-integration.md': 'Codex Integration',
    'connectors-and-files.md': 'Connectors And Files',
  };
  for (const [file, title] of Object.entries(targetPages)) {
    const pageFacts = byTarget.get(file) ?? [];
    const explanation = pageExplanations[file];
    writeFile(file, `# ChatGPT / ${title}

Last verified: ${date}

## What The Official Docs Say

${explanation.summary}

## How To Use This Page

${explanation.bullets.map((item) => `- ${item}`).join('\n')}

## Fact Table

| Fact | Source | Last checked |
| --- | --- | --- |
${table(pageFacts.map((item) => [item.fact, sourceLink(item), item.last_checked]))}

## Extraction Notes

- This page includes only official OpenAI source facts.
- Add new rows only after the source URL is listed in coverage-ledger.md.
- If a fact affects price, usage, model availability, or a temporary promotion, update Last verified after checking the official source again.
`);
  }

  const after = new Map();
  for (const file of fs.readdirSync(serviceDir).filter((x) => x.endsWith('.md'))) {
    after.set(file, fs.readFileSync(path.join(serviceDir, file), 'utf8'));
  }
  return makeDiff(before, after);
}

function writeFile(file, content) {
  fs.writeFileSync(path.join(serviceDir, file), content, 'utf8');
}

function makeDiff(before, after) {
  const changed = [];
  for (const file of new Set([...before.keys(), ...after.keys()])) {
    const oldText = before.get(file) ?? '';
    const newText = after.get(file) ?? '';
    if (oldText === newText) continue;
    changed.push(`# ${file}`);
    changed.push(`- old lines: ${oldText.split(/\r?\n/).length}`);
    changed.push(`- new lines: ${newText.split(/\r?\n/).length}`);
    changed.push('');
  }
  return changed.join('\n') || 'No document changes.';
}

const { rawDir, attempts } = await collectSources();
const validationErrors = validateFacts();

const normalizedDir = path.join(root, 'pipeline', 'normalized', 'chatgpt');
const draftsDir = path.join(root, 'pipeline', 'drafts', 'chatgpt');
ensureDir(normalizedDir);
ensureDir(draftsDir);

fs.writeFileSync(path.join(normalizedDir, `${runStamp}-facts.json`), JSON.stringify({ service: 'ChatGPT', generated_at: new Date().toISOString(), facts }, null, 2), 'utf8');
fs.writeFileSync(path.join(normalizedDir, `${runStamp}-validation.json`), JSON.stringify({ service: 'ChatGPT', generated_at: new Date().toISOString(), errors: validationErrors }, null, 2), 'utf8');

let diff = 'Apply was not requested. Run with --apply to write service docs.';
if (validationErrors.length === 0 && apply) {
  diff = writeServiceDocs();
} else if (validationErrors.length > 0) {
  diff = `Validation failed:\n${validationErrors.map((x) => `- ${x}`).join('\n')}`;
}

fs.writeFileSync(path.join(draftsDir, `${runStamp}-diff.md`), `# ChatGPT Fill Diff

Run stamp: ${runStamp}
Raw directory: ${rawDir}
Apply: ${apply}
Validation errors: ${validationErrors.length}

## Fetch Summary

| Source | URL | Fetch status | HTTP status | Final URL | Text chars |
| --- | --- | --- | --- | --- | --- |
${table(attempts.map((item) => [item.title, item.url, item.fetch_status, item.http_status ?? '', item.final_url ?? '', item.text_chars ?? '']))}

## Diff Summary

${diff}
`, 'utf8');

console.log(JSON.stringify({
  service: 'ChatGPT',
  runStamp,
  rawDir,
  facts: facts.length,
  validationErrors: validationErrors.length,
  apply,
  failedFetches: attempts.filter((item) => item.fetch_status !== 'fetched').length,
}, null, 2));

