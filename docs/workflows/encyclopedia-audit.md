# Encyclopedia Audit Workflow

Last verified: 2026-04-26

## Purpose

The audit workflow checks whether the public AI Encyclopedia still behaves like a source-backed service manual. It is designed to report drift, not to publish changes automatically.

## Weekly Checks

| Check | What it catches | Expected action |
| --- | --- | --- |
| Quality gate | mojibake, unfinished markers, raw Markdown links, secret-like strings | Block publish until fixed |
| Coverage drift | sources stuck at indexed or needs-extraction | Add extraction tasks to the service backlog |
| Source freshness | old last checked dates on pricing, limits, models, and availability | Recheck official source before editing facts |
| Broken links | missing local Markdown targets and public 404 risk | Fix links before build or publish |
| Dashboard integrity | JS syntax, document count, key service strings, navigation hierarchy | Rebuild and smoke test |
| Signal boundary | X, news, or community claims promoted as facts | Move back to signal or confirm with official sources |

## Standard Command Order

| Step | Command | Output |
| --- | --- | --- |
| 1 | `node pipeline/scripts/quality-check.mjs` | Quality report and publish gate |
| 2 | `node pipeline/scripts/audit-encyclopedia.mjs` | Weekly audit report in `pipeline/reports/` |
| 3 | `powershell -ExecutionPolicy Bypass -File ..\..\tools\ai-encyclopedia-dashboard\build_dashboard.ps1` | Updated `wiki/index.html` |
| 4 | `node --check ..\..\tools\ai-encyclopedia-dashboard\build_dashboard.mjs` | Dashboard builder syntax check |
| 5 | `powershell -ExecutionPolicy Bypass -File ..\..\scripts\publish_ai_encyclopedia_github_pages.ps1` | GitHub Pages publication |

## Publish Rule

Automated jobs may collect sources, create normalized facts, and write audit reports. Public document changes and GitHub Pages publish remain approval-based.
