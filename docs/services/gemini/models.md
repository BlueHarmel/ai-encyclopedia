# Gemini / Models

Last verified: 2026-04-26

## Summary

This page tracks Gemini API model facts separately from Gemini API tools. It focuses on model ID, context size, output token limit, modality, release/update date, knowledge cutoff, and official performance notes. Tool behavior is maintained in `tools.md`.

## Current Model Table

| Model | Status | Context window / token limits | Inputs / output | Official performance / benchmark note | Release / update date | Knowledge cutoff | Official source | Last checked |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gemini-3.1-pro-preview` | Preview | 1M input / 64K output. | Gemini 3 family model; detailed modality limits should be checked on the model page. | Google describes Gemini 3.1 Pro as best for complex tasks requiring broad world knowledge and advanced reasoning across modalities. The current developer guide does not publish benchmark numbers in the visible model table. | Gemini 3 family page current as of Google docs; all Gemini 3 models are in preview. | Jan 2025. | [Gemini 3 Developer Guide](https://ai.google.dev/gemini-api/docs/gemini-3) | 2026-04-26 |
| `gemini-3-flash-preview` | Preview | 1M input / 64K output. | Gemini 3 Flash. | Google describes Gemini 3 Flash as a 3-series model with Pro-level intelligence at Flash speed and pricing. The current developer guide does not publish benchmark numbers in the visible model table. | Gemini 3 family page current as of Google docs; all Gemini 3 models are in preview. | Jan 2025. | [Gemini 3 Developer Guide](https://ai.google.dev/gemini-api/docs/gemini-3) | 2026-04-26 |
| `gemini-3.1-flash-lite-preview` | Preview | 1M input / 64K output. | Gemini 3.1 Flash-Lite. | Google describes Gemini 3.1 Flash-Lite as a workhorse model for cost efficiency and high-volume tasks. The current developer guide does not publish benchmark numbers in the visible model table. | Gemini 3 family page current as of Google docs; all Gemini 3 models are in preview. | Jan 2025. | [Gemini 3 Developer Guide](https://ai.google.dev/gemini-api/docs/gemini-3) | 2026-04-26 |
| `gemini-2.5-pro` | Stable | 1,048,576 input tokens; 65,536 output tokens. | Inputs: audio, images, video, text, and PDF. Output: text. | Google describes Gemini 2.5 Pro as a state-of-the-art thinking model for complex problems in code, math, STEM, and long-context analysis of datasets, codebases, and documents. Numeric benchmark results are not published in the current model page. | Latest update June 2025. | January 2025. | [Gemini 2.5 Pro](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) | 2026-04-26 |
| `gemini-2.5-flash` | Stable | 1,048,576 input tokens; 65,536 output tokens. | Inputs: text, images, video, audio. Output: text. | Google describes Gemini 2.5 Flash as the best price-performance model for low-latency, high-volume tasks that require reasoning. Numeric benchmark results are not published in the current model page. | Latest update June 2025. | January 2025. | [Gemini 2.5 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash) | 2026-04-26 |
| `gemini-2.5-flash-lite` | Stable | Not copied into this page yet; requires direct model-page extraction. | Gemini models overview describes it as the fastest and most budget-friendly multimodal model in the 2.5 family. | Numeric benchmark results are not published in the overview table. | See model page. | See model page. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| `gemini-2.0-flash` | Deprecated / previous model | Gemini overview describes it as having a 1M token context window. | Text and multimodal behavior should be checked on the deprecated model page before use. | Google describes it as a second-generation workhorse model with speed, native tool use, and a 1M token context window. | Deprecated; shut-down timing should be checked on Gemini deprecations page. | See model page. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |

## Model Version Rules

| Version type | Meaning | Operational note | Official source | Last checked |
| --- | --- | --- | --- | --- |
| Stable | Points to a specific stable model. Stable models usually do not change. | Most production apps should use a specific stable model. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| Preview | Preview models may be used for production but usually have billing enabled, more restrictive rate limits, and at least 2 weeks deprecation notice. | Use when the feature is needed and preview risk is acceptable. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| Latest | Alias to the latest release for a model variation. It can be stable, preview, or experimental. | Google says a 2-week notice is provided by email before the version behind latest changes. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| Experimental | Not usually suitable for production and can have restrictive limits. | Availability can change. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| Google lists Gemini 3.1 Pro, Gemini 3 Flash, Gemini 3.1 Flash-Lite, Nano Banana 2, Nano Banana Pro, Gemini 3.1 Flash Live, and Gemini 3.1 Flash TTS as Gemini 3 models in preview. | [Gemini models](https://ai.google.dev/gemini-api/docs/models) | 2026-04-26 |
| Google says all Gemini 3 models are currently in preview. | [Gemini 3 Developer Guide](https://ai.google.dev/gemini-api/docs/gemini-3) | 2026-04-26 |
| Gemini 2.5 Pro and Gemini 2.5 Flash both publish 1,048,576 input-token and 65,536 output-token limits in their model pages. | [Gemini 2.5 Pro](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) and [Gemini 2.5 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash) | 2026-04-26 |
