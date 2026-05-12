# Source To Publication Workflow

Last verified: 2026-04-26

This workflow fills service pages from official-source facts. The current v1 implementation is ChatGPT.

## Steps

1. Register the official source in docs/sources/source-registry.md.
2. Run the service fill script. For ChatGPT, use `node pipeline/scripts/fill-chatgpt.mjs --apply`.
3. Store raw collection output in pipeline/raw.
4. Store normalized fact JSON and validation JSON in pipeline/normalized.
5. Store a human-readable diff summary in pipeline/drafts.
6. Extract concrete facts directly into the relevant topic pages only when validation passes; do not publish a separate fact-ledger page.
7. Record coverage status in coverage-ledger.md.
8. Build the dashboard.
9. Run syntax, forbidden-word, mojibake, broken-link, and secret checks.
10. Publish to GitHub Pages only after approval.

## Verification

- Official documentation facts use direct links.
- Variable pricing, usage limits, and model availability include a last-checked date.
- Non-official sources stay in signal sections only.
- Failed source fetches must be recorded as fetched, blocked, not-found, needs-auth, changed-url, or fetch-failed.
- Public docs must not contain tokens, cookies, OAuth state, account identifiers, or raw private logs.
