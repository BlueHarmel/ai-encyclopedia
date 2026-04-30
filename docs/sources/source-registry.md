# Source Registry

Last verified: 2026-04-26

공식 출처는 제품 사실의 원천이다. 공식 문서, 릴리즈 노트, 공식 가격/플랜 페이지, 공식 뉴스룸은 별도 뉴스 검증 없이 source-backed fact로 반영할 수 있다. 단, 가격과 사용량은 자주 변하므로 마지막 확인일과 확인 위치를 함께 남긴다.

## Service Source Packs

| 서비스 | 공식 출처 | 처리 |
|---|---|---|
| OpenAI / GPT | ChatGPT release notes, About ChatGPT Pro, ChatGPT Plus, OpenAI Platform docs, OpenAI Developers, Codex changelog, Codex rate card | fact fast path |
| Claude | Claude release notes, Claude Pro plan, usage and length limits, plan chooser, Claude docs, Anthropic docs, Claude Code docs | fact fast path |
| Gemini | Gemini API docs/changelog/pricing, Gemini app, Google AI Blog, Google Developers Blog | fact fast path |
| Genspark | Genspark official site | partial fact; help/changelog/pricing needs-recheck |
| GitHub Copilot | GitHub Copilot docs, plans, subscriber management, GitHub changelog | fact fast path |
| OpenClaw | OpenClaw docs + local config/cron/scripts/log summaries | local-source-backed, secrets excluded |

## Official URLs

- ChatGPT release notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- About ChatGPT Pro plans: https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro
- What is ChatGPT Plus: https://help.openai.com/en/articles/6950777-chatgpt-plus
- Codex rate card: https://help.openai.com/en/articles/20001106
- OpenAI Platform docs: https://platform.openai.com/docs
- OpenAI Developers: https://developers.openai.com/
- Codex changelog: https://developers.openai.com/codex/changelog/
- Claude release notes: https://support.claude.com/en/articles/12138966-release-notes
- Claude Pro plan: https://support.claude.com/en/articles/8325606-what-is-claude
- Claude usage and length limits: https://support.claude.com/en/articles/11647753-understanding-usage-and-length-
- Claude plan chooser: https://support.claude.com/en/articles/11049762-choosing-a-claude-plan
- Claude docs: https://docs.claude.com/
- Anthropic docs: https://docs.anthropic.com/
- Claude Code docs: https://code.claude.com/docs
- Gemini API docs: https://ai.google.dev/gemini-api/docs
- Gemini API release notes: https://ai.google.dev/gemini-api/docs/changelog
- Gemini API pricing: https://ai.google.dev/pricing
- Gemini app: https://gemini.google.com/
- Google AI Blog: https://blog.google/technology/ai/
- Google Developers Blog: https://developers.googleblog.com/
- GitHub Copilot docs: https://docs.github.com/en/copilot
- Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- GitHub Copilot changelog: https://github.blog/changelog/label/copilot/
- Genspark official site: https://www.genspark.ai/
- OpenClaw docs: https://docs.openclaw.ai/

## Signal Sources

뉴스, X 포스트, 커뮤니티 글, 개인 블로그, Reddit은 제품 사실의 최종 근거가 아니다. 이들은 signal, observed-signal, needs-recheck로 남기고 공식 출처가 확인될 때만 fact로 승격한다.

## Public Safety

로컬 OpenClaw 설정은 유용한 운영 근거지만, 공개 문서에는 token, OAuth credential, 개인 chat id, 원문 로그를 포함하지 않는다.


