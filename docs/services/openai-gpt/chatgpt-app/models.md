# OpenAI / GPT / ChatGPT App / Models

Last verified: 2026-04-26

## Summary

This page tracks ChatGPT model facts separately from ChatGPT tools. It focuses on model availability, context window, output budget, usage limits, release or rollout date, and official performance claims. Tool availability is maintained in `tools.md`.

## Current Model Table

| Model / Picker Label | Availability | Context window | Max output / token budget | Usage limits | Official performance / benchmark note | Release / rollout note | Official source | Last checked |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Instant / GPT-5.3 Instant | GPT-5.3 is available to all ChatGPT tiers. Paid tiers can manually select GPT-5.3 Instant from the model picker. | Free: 16K. Plus / Business: 32K. Pro / Enterprise: 128K. | Not separately published in the current ChatGPT Help article. | Free: up to 10 GPT-5.3 messages every 5 hours. Plus and Go: up to 160 GPT-5.3 messages every 3 hours, then switch to mini until reset. | OpenAI describes GPT-5.3 Instant as a fast workhorse for everyday work and learning, with improvements for information-seeking, how-tos, technical writing, translation, and conversational tone. Numeric benchmark results are not published in the current Help Center source. | GPT-5.3 is the default for logged-in users in the current ChatGPT Help article. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Thinking / GPT-5.5 Thinking | Plus, Pro, Business, Enterprise, and Edu access depends on plan and rollout. Plus, Pro, and Business have model picker access; GPT-5.5 is not available to ChatGPT for Healthcare workspace in the current article. | All paid tiers: 256K total, listed as 128K input plus 128K max output when Thinking is manually selected. Pro tier: 400K total, listed as 272K input plus 128K max output. | 128K max output in the context-window section. | Plus and Business: up to 3,000 manually selected Thinking messages per week. Go: up to 10 Thinking messages every 5 hours from the tools menu. Automatic switching from Instant to Thinking does not count toward the weekly limit. | OpenAI describes GPT-5.5 Thinking as its most capable reasoning model in ChatGPT, stronger at spreadsheet work, frontend code, hard math, document understanding, instruction following, image understanding, tool use, and web research than earlier Thinking models. Numeric benchmark results are not published in the current Help Center source. | GPT-5.5 is rolling out gradually to Plus, Pro, Business, and Enterprise users in ChatGPT and Codex. It is not launching to the API in the current article. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Pro / GPT-5.5 Pro | Available to Pro, Business, Enterprise, and Edu plans according to the current Help Center article. | The current Help Center article does not publish a separate context-window table row for GPT-5.5 Pro. | Not separately published in the current Help Center article. | Business and Pro plans offer unlimited access to GPT-5 models subject to Terms of Use and abuse guardrails. | OpenAI describes GPT-5.5 Pro as the highest-capability GPT-5.5 option in ChatGPT for the hardest tasks and long-running workflows. Numeric benchmark results are not published in the current Help Center source. | GPT-5.5 Pro is rolling out to Pro, Business, and Enterprise users in ChatGPT. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Mini fallback | Used after some GPT-5.3 limits are reached. | Not published in the current Help Center article. | Not published in the current Help Center article. | Free, Plus, and Go can switch to a mini version after reaching GPT-5.3 limits until reset. | Numeric benchmark results are not published in the current Help Center source. | GPT-5.3 Instant Mini replaced GPT-5 Instant Mini as fallback in April 2026 release notes. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) and [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) | 2026-04-26 |
| Retired ChatGPT models | GPT-4o, GPT-4.1, GPT-4.1 mini, OpenAI o4-mini, and GPT-5 Instant and Thinking are retired from ChatGPT as of February 13, 2026. | Not applicable. | Not applicable. | Not available in ChatGPT after retirement, with noted Enterprise/Edu Custom GPT transition timing for GPT-4o. | Not applicable. | Retired from ChatGPT as of February 13, 2026. ChatGPT Business, Enterprise, and Edu retained GPT-4o within Custom GPTs until April 3, 2026. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |

## Thinking Controls

| Setting | Availability | Effect | Official source | Last checked |
| --- | --- | --- | --- | --- |
| Standard | Plus and Business users when GPT-5.5 Thinking is selected on ChatGPT Web. | New default, balancing speed and intelligence. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Extended | Plus and Business users when GPT-5.5 Thinking is selected on ChatGPT Web. | More time for deeper responses than Standard. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Light | Pro users on ChatGPT Web. | Fastest Pro thinking-time option. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Heavy | Pro users on ChatGPT Web. | Deeper reasoning for higher-stakes or harder questions. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| GPT-5.5 and GPT-5.5 Pro are not launching to the API in the current Help Center article. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| Apps, Memory, Canvas, and image generation are not available with Pro according to the current article. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |
| GPT-5.5 Thinking remains available in Legacy Models for 90 days after launch for Plus and Pro users. | [GPT-5.3 and GPT-5.5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-55-in-chatgpt) | 2026-04-26 |

## Additional Source-Backed Facts

- ChatGPT Pro is a paid ChatGPT subscription documented by OpenAI Help Center. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Pro article states that ChatGPT Pro offers unlimited access to GPT-5 and legacy models, subject to OpenAI Terms of Use and guardrails. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- OpenAI documents Plus at $20 per month, billed monthly. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Pro article describes Plus $20, Pro $100, and Pro $200 as separate plan options. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Pro article says users can upgrade from the Pricing page or from Settings > My Plan. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Pro article says users can switch between the $100 and $200 Pro tiers from Settings > My Plan. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Pro article says users can change or cancel a subscription from Settings > My Plan. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Pro article says annual billing is not supported for ChatGPT Go, Plus, or Pro subscriptions. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The Plus article says annual billing is not supported for ChatGPT Plus subscriptions. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article says subscription management, invoices, and cancellation are handled from ChatGPT account settings. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article says refunds are typically processed within 5 to 10 business days after approval. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article says GPT-4o, GPT-4.1, GPT-4.1 mini, OpenAI o4-mini, and GPT-5 Instant and Thinking were retired from ChatGPT as of February 13, 2026. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article lists priority access during high-traffic periods as a Plus benefit. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article lists access to higher GPT-5.3 limits as a Plus benefit. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article lists access to advanced reasoning models as a Plus benefit. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Plus article lists voice conversations, image generation, file uploads and analysis, deep research tools, and custom GPT creation and use as expanded Plus features. ([What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777-chatgpt-plus))
- The Pro article says both Pro tiers include the same core capabilities and differ mainly by usage allowance. ([About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro))
- The April 21, 2026 ChatGPT release notes introduce ChatGPT Images 2.0 as available on all ChatGPT plans. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 21, 2026 release notes say images with thinking is available on paid ChatGPT plans when selecting Thinking and Pro models. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 9, 2026 release notes say GPT-5.3 Instant Mini replaces GPT-5 Instant Mini as the fallback after users hit GPT-5.3 Instant rate limits. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 22, 2026 release notes introduce Fast answers in ChatGPT for common information-seeking questions. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 22, 2026 release notes say Fast answers are available globally on web, iOS, and Android for logged-in and logged-out users across plans. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 22, 2026 release notes say Fast answers do not reference past chats or memory. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 22, 2026 release notes announce ChatGPT for Clinicians as a free version for verified clinicians in the United States. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 16, 2026 release notes say ads are rolling out for Free and Go users in Australia, New Zealand, and Canada, and that Plus, Pro, Business, Enterprise, and Education plans do not have ads. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 8, 2026 release notes say Outlook Email and Calendar apps for ChatGPT can work with delegated or shared Outlook resources when the user has access. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The April 2, 2026 release notes announce ChatGPT in Apple CarPlay for iOS 26.4 or newer on supported cars. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 27, 2026 release notes say updated Box, Notion, Linear, and Dropbox apps add new app actions including write capabilities where supported. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 25, 2026 release notes say long pastes over 5k characters are converted into attachments for ChatGPT Plus, Pro, and Business users. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 25, 2026 release notes say Google file connectors in ChatGPT are unified under Google Drive. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 25, 2026 release notes say Google Drive sync behavior is unchanged for Pro users. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 26, 2026 release notes say location sharing is optional, off until enabled, and configurable in Settings > Data Controls. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- The March 26, 2026 release notes say precise location data is deleted after it is used to provide a more relevant response. ([ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
