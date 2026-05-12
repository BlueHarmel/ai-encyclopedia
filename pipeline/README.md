# AI Encyclopedia Fill Pipeline

Last verified: 2026-04-26

This pipeline fills the encyclopedia with official-source facts. It is semi-automatic: collection, normalization, validation, document updates, and diff generation are automated, but public deployment remains a separate approval step.

## Current Collection Targets

- ChatGPT legacy fact filler: `node pipeline/scripts/fill-chatgpt.mjs --apply`
- Generic source collector: `node pipeline/scripts/fill-service.mjs --service="Claude"`
- Quality gate: `node pipeline/scripts/quality-check.mjs`
- Audit report: `node pipeline/scripts/audit-encyclopedia.mjs`

## Service Pipeline

`scripts/fill-service.mjs --service="<Service Name>"` generalizes the ChatGPT fill flow. It reads `docs/sources/source-registry.md`, fetches official URLs for one service, writes raw snapshots under `pipeline/raw/<service>/`, normalized source records under `pipeline/normalized/<service>/`, validation output under `pipeline/reports/`, and draft review material under `pipeline/drafts/<service>/`.

Use this for the next service passes in this order: Claude, GitHub Copilot, Gemini app, OpenClaw official docs, Genspark source discovery, People signals.

## Audit Pipeline

`scripts/audit-encyclopedia.mjs` creates a weekly drift report. It counts status markers, old checked dates, broken local links, mojibake, and signal/fact boundary risks. The report is advisory and should be reviewed before publication.

## Stages

1. Collect official source pages listed in `docs/sources/source-registry.md`.
2. Store raw HTML and stripped text in `pipeline/raw/<service>/<run-stamp>/`.
3. Normalize source records or extracted facts into `pipeline/normalized/<service>/`.
4. Validate every fact for required fields, official OpenAI URL, existing target page, forbidden wording, and mojibake.
5. Write validated facts into service markdown pages only when validation passes.
6. Write a human-readable diff summary in `pipeline/drafts/<service>/`.
7. Build and verify the dashboard separately.
8. Publish to GitHub Pages only after approval.

## Fetch Status Values

- `fetched`: HTTP fetch succeeded.
- `blocked`: server returned 403 or blocked scripted collection.
- `not-found`: server returned 404.
- `needs-auth`: server returned 401.
- `fetch-failed`: network or unexpected fetch failure.
- `changed-url`: source moved and needs registry update.

## Promotion Rule

Official documentation, release notes, pricing pages, and help-center pages can become facts without additional news verification. News, community posts, X posts, education material, and third-party blogs remain signals until an official source confirms the product fact.

## Public Safety

Do not write tokens, cookies, OAuth state, account identifiers, private chat IDs, or raw private logs into public docs.


