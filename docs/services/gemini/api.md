# Gemini / API

Last verified: 2026-04-26

## Summary

This page covers the Gemini API developer surface: model docs, API release notes, pricing, tools, billing, rate limits, files, token counting, and developer workflows. It is separate from Gemini consumer app behavior.

## API Surface Table

| Area | What the API source covers | API-specific rule | Official source | Last checked |
| --- | --- | --- | --- | --- |
| Documentation home | Gemini API documentation is the primary official source for API behavior. | API behavior should come from `ai.google.dev`, not from the consumer app page unless Google explicitly links the behavior. | [Gemini API docs](https://ai.google.dev/gemini-api/docs) | 2026-04-26 |
| Models | Gemini API model docs list model families, model IDs, token limits, supported modalities, version patterns, and deprecations. | Use model IDs such as `gemini-2.5-pro`, not consumer app labels, when documenting API usage. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| Tools | Gemini API tools include Google Search, Google Maps, Code Execution, URL Context, Computer Use, File Search, and Function Calling. | Built-in tools are executed by Google; custom tools and Computer Use require client/application execution. | [Gemini tools](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Pricing and billing | Gemini API billing is based on free and paid/pay-as-you-go tiers, with rate limits and pricing varying by model. | API billing does not describe consumer Gemini app subscriptions. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Release tracking | Gemini API release notes are the official source for API changes. | API release notes should not be used as consumer app release notes unless the same app behavior is documented. | [Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog) | 2026-04-26 |

## Developer Checklist

| Question | API answer source | Why this matters | Last checked |
| --- | --- | --- | --- |
| Which model ID should code call? | Gemini model docs. | Consumer app labels are not API model IDs. | 2026-04-26 |
| How large can the request and response be? | Model-specific token-limit pages and long-context docs. | Token limits vary by model. | 2026-04-26 |
| Which tools can be enabled? | Gemini tools docs and tool-specific pages. | Tool support and billing can vary by tool and model. | 2026-04-26 |
| How is usage billed? | Gemini API billing and pricing docs. | API Free Tier, Pay-as-you-go, Prepay, and Postpay rules are API-specific. | 2026-04-26 |
| What changed recently? | Gemini API release notes. | API release notes are the durable update source for developer behavior. | 2026-04-26 |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| Gemini API documentation is the primary official source for API behavior. | [Gemini API docs](https://ai.google.dev/gemini-api/docs) | 2026-04-26 |
| Gemini API release notes are the official source for API changes. | [Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog) | 2026-04-26 |
| Gemini API pricing is documented on the official pricing page and billing guide. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
