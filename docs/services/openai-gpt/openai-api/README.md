# OpenAI / GPT / OpenAI API

Last verified: 2026-04-26

## Summary

This page covers OpenAI's developer/API surface as it relates to ChatGPT. The API is documented separately from the ChatGPT app and uses its own documentation, billing, models, tools, state, streaming, and deployment behavior.

## API Surface Table

| Area | What the API source covers | API-specific rule | Official source | Last checked |
| --- | --- | --- | --- | --- |
| Documentation home | OpenAI Platform docs are separate from ChatGPT product documentation and include API reference, Codex, ChatGPT developer docs, Apps SDK, and Commerce sections. | Use Platform docs for API implementation facts. Use Help Center for ChatGPT app facts. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| Core concepts | The API docs list text generation, code generation, images and vision, audio and speech, structured outputs, function calling, Responses API, and tools. | API concepts should be documented with endpoint/model/tool names from Platform docs, not copied from ChatGPT app UI labels. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| API tools | The API docs list separate tools including web search, MCP and connectors, skills, shell, computer use, file search, retrieval, tool search, local shell, image generation, and code interpreter. | API tools are developer platform capabilities and may differ from ChatGPT app tools in naming, availability, billing, and setup. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| Run and scale | The API docs list conversation state, background mode, streaming, WebSocket mode, webhooks, file inputs, compaction, token counting, and prompt caching. | These are API operation patterns. They should not be described as ChatGPT app settings unless a ChatGPT Help Center page says so. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| Billing separation | ChatGPT Plus article says API usage is separate and billed independently. | ChatGPT subscription payment does not cover API token usage. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Enterprise separation | ChatGPT Enterprise workspace membership and API Platform organization membership are separate. | API access requires membership in the API Platform organization. | [What is ChatGPT Enterprise?](https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise) | 2026-04-26 |

## API Fact Checklist

| Question | API answer source | Why this matters | Last checked |
| --- | --- | --- | --- |
| What model ID should code call? | OpenAI Platform model docs or API reference. | ChatGPT app labels such as Instant, Thinking, and Pro are not guaranteed API model IDs. | 2026-04-26 |
| How is usage billed? | OpenAI API pricing and billing docs. | ChatGPT app subscriptions and API billing are separate. | 2026-04-26 |
| Which tools can an API agent use? | OpenAI Platform tool docs. | Tool naming and setup can differ from ChatGPT app tools. | 2026-04-26 |
| How should state, files, streaming, or background work be implemented? | OpenAI Platform run-and-scale docs. | These are developer implementation concerns, not app subscription facts. | 2026-04-26 |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| The API docs list core concepts including text generation, code generation, images and vision, audio and speech, structured outputs, function calling, Responses API, and tools. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| The API docs list run-and-scale topics including conversation state, background mode, streaming, WebSocket mode, webhooks, file inputs, compaction, token counting, and prompt caching. | [OpenAI Platform docs](https://platform.openai.com/docs) | 2026-04-26 |
| The Plus article states that API usage is separate from ChatGPT Plus and billed independently. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |

## Additional Source-Backed Facts

- The Plus article states that API usage is separate from ChatGPT Plus and billed independently. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article says API access is unchanged by the February 13, 2026 ChatGPT model retirement. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The API docs list core concepts including text generation, code generation, images and vision, audio and speech, structured outputs, function calling, Responses API, and tools. ([OpenAI API Platform Documentation](https://platform.openai.com/docs))
- The API docs list separate API tools including web search, MCP and connectors, skills, shell, computer use, file search, retrieval, tool search, local shell, image generation, and code interpreter. ([OpenAI API Platform Documentation](https://platform.openai.com/docs))
- The API docs list run-and-scale topics including conversation state, background mode, streaming, WebSocket mode, webhooks, file inputs, compaction, token counting, and prompt caching. ([OpenAI API Platform Documentation](https://platform.openai.com/docs))
