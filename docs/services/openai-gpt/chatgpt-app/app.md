# OpenAI / GPT / ChatGPT App / App

Last verified: 2026-04-26

## Summary

This page covers the ChatGPT consumer and workspace app surface: chat.openai.com, subscriptions, model picker behavior, files, tools, memory, workspace settings, and account billing. It does not describe OpenAI API behavior unless the official source explicitly says the app and API are separate.

## App Surface Table

| Area | What the app source says | App-specific rule | Official source | Last checked |
| --- | --- | --- | --- | --- |
| Product surface | ChatGPT Plus is a subscription plan for enhanced access to the ChatGPT web app. | Treat Plus, Pro, Business, Enterprise, and Edu as ChatGPT app/workspace plans, not API plans. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Subscription management | Users manage subscription, invoices, and cancellation from ChatGPT account settings. | Billing actions for ChatGPT app subscriptions happen in ChatGPT account/workspace settings, not the API dashboard. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Plus app benefits | Plus includes priority access, higher GPT-5.3 limits, advanced reasoning models, faster responses, voice, image generation, file uploads and analysis, Deep Research where available, and custom GPT creation/use. | These are ChatGPT app benefits and should not be copied into API limits or API pricing. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Pro app benefits | Pro tiers include Pro models, Codex, deep research, image creation, memory, and file uploads. | Pro tier differences are mainly usage allowance; app benefits remain app facts unless API docs independently confirm equivalent API behavior. | [ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro) | 2026-04-26 |
| Model picker | ChatGPT exposes Instant, Thinking, and Pro labels, with GPT-5.3 Instant, GPT-5.5 Thinking, and GPT-5.5 Pro mapped by plan. | Model-picker labels are app UX. Do not assume identical API model IDs or availability. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| App tools | ChatGPT tools include web search, data analysis, image analysis, file analysis, Canvas, image generation, Memory, and Custom Instructions for supported models, subject to plan and exceptions. | Tool availability is app-scoped unless OpenAI Platform docs separately document the corresponding API tool. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Enterprise workspace | ChatGPT Enterprise is purchased at the organization level and managed through workspace membership, roles, seats, and workspace settings. | ChatGPT workspace access does not automatically grant OpenAI API Platform organization access. | [What is ChatGPT Enterprise?](https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise) | 2026-04-26 |

## Boundary Notes

| Boundary | App-side fact | What not to infer | Official source | Last checked |
| --- | --- | --- | --- | --- |
| App subscription vs API billing | Plus is billed as a ChatGPT subscription. | Do not treat Plus as prepaid API usage. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| ChatGPT model retirement vs API model access | The Plus article says API access is unchanged by the February 13, 2026 ChatGPT model retirement. | Do not delete API facts just because the model retired from ChatGPT. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Enterprise workspace vs API organization | ChatGPT Enterprise workspace membership and API Platform organization membership are separate. | Do not assume a user with Enterprise app access can call the API. | [What is ChatGPT Enterprise?](https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise) | 2026-04-26 |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| ChatGPT Plus is available on chat.openai.com. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| API usage is separate from ChatGPT Plus and billed independently. | [What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus) | 2026-04-26 |
| Being a member of a ChatGPT Enterprise workspace does not automatically make the user a member of the API Platform organization. | [What is ChatGPT Enterprise?](https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise) | 2026-04-26 |
