# Gemini / Tools

Last verified: 2026-04-26

## Summary

This page tracks Gemini API tools separately from Gemini API models. It distinguishes built-in tools executed by Google from custom tools that your application executes.

## Tool Table

| Tool | Type | What it does | Execution flow | Cost / limit note | Official source | Last checked |
| --- | --- | --- | --- | --- | --- | --- |
| Google Search | Built-in tool | Grounds responses in current events and web facts to reduce hallucinations. | Built-in tool flow: the model decides it needs the tool, Google executes it on its servers, and Gemini returns the final answer grounded in tool results. | Grounding with Google Search is billed for each search query the model decides to execute. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) and [Grounding with Google Search](https://ai.google.dev/gemini-api/docs/grounding/) | 2026-04-26 |
| Google Maps | Built-in tool | Builds location-aware assistants that can find places, get directions, and provide local context. | Built-in tool flow. | See Gemini API pricing page for tool-specific cost details. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Code Execution | Built-in tool | Allows the model to write and run Python code for math, data processing, and analysis. | Built-in tool flow. | Google says there is no additional charge for enabling code execution; billing uses the current input/output token rate for the Gemini model. You cannot install your own libraries. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) and [Code execution](https://ai.google.dev/gemini-api/docs/code-execution) | 2026-04-26 |
| URL Context | Built-in tool | Directs the model to read and analyze content from specific URLs or documents. | Built-in tool flow. | See Gemini API pricing page for tool-specific cost details. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| File Search | Built-in tool | Indexes and searches user documents for Retrieval Augmented Generation. | Built-in tool flow. | See Gemini API pricing page for tool-specific cost details. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Function Calling | Custom tool interface | Connects models to external tools and APIs through function declarations. | Custom tool flow: model returns structured JSON for a function call, your application executes it, then sends function results back to Gemini. | Modes include `AUTO`, `ANY`, and `NONE`. Use Function Calling when an intermediate external action is needed. | [Function calling](https://ai.google.dev/gemini-api/docs/function-calling) and [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Computer Use Preview | Custom/client-side tool pattern | Enables Gemini to view a screen and generate browser UI actions such as clicking, typing, and navigating. | Google's tools overview says Computer Use and custom tools are handled by the application or client environment. | Preview behavior and model support should be checked before production use. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Structured outputs with tools | Tool-adjacent output control | Combines built-in tools with schema-constrained final responses. | Gemini docs say this preview feature is only available to Gemini 3 series models. | Preview feature. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |

## Tool Combination Notes

| Capability | Current official note | Official source | Last checked |
| --- | --- | --- | --- |
| Built-in tools in one API call | For built-in tools like Google Search, Google Maps, URL Context, File Search, and Code Execution, the entire process happens within one API call. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Built-in plus custom tools | Gemini 3 series models support combining built-in tools with custom tools in a single turn. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
| Code execution plus grounding | Gemini docs say code execution can be combined with Grounding with Google Search. | [Code execution](https://ai.google.dev/gemini-api/docs/code-execution) | 2026-04-26 |
| Structured outputs vs. function calling | Use Function Calling when the model needs an intermediate step via tools or data systems. Use Structured Outputs when the final response must match a schema. | [Using Tools with Gemini API](https://ai.google.dev/gemini-api/docs/tools) | 2026-04-26 |
