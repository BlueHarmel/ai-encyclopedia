# OpenClaw / Telegram

Last verified: 2026-04-26

## Summary

Telegram은 send/receive, polling, webhook cleanup warning 같은 운영 신호가 중요하다. 정상/주의/장애 기준을 표로 정리한다.

## What The Sources Say

- This PC uses OpenClaw through local configuration and local gateway logs; public docs must not include secrets. (Local openclaw.json; Local gateway logs)
- The current target model for this PC is openai-codex/gpt-5.5 through OAuth, not OpenAI API key mode. (Local openclaw.json)
- Telegram webhook cleanup warnings are operational noise when send and receive are verified working. (Local gateway logs)
- Cron jobs that execute local commands must use explicit approvals or fixed scripts. (Local cron jobs.json; local approvals policy)

## Operational View

| Signal / fact | How to read it | Source |
| --- | --- | --- |
| This PC uses OpenClaw through local configuration and local gateway logs; public docs must not include secrets. | Use this as the current public operating fact for this PC. | Local openclaw.json; Local gateway logs |
| The current target model for this PC is openai-codex/gpt-5.5 through OAuth, not OpenAI API key mode. | Use this to confirm the configured authentication mode. | Local openclaw.json |
| Telegram webhook cleanup warnings are operational noise when send and receive are verified working. | Treat as an operational signal and check whether the user-visible function still works. | Local gateway logs |
| Cron jobs that execute local commands must use explicit approvals or fixed scripts. | Use this to decide whether automation can run without interactive approval. | Local cron jobs.json; local approvals policy |

## Source-Backed Details

| Fact | Source | Last checked |
| --- | --- | --- |
| This PC uses OpenClaw through local configuration and local gateway logs; public docs must not include secrets. | Local openclaw.json; Local gateway logs | 2026-04-26 |
| The current target model for this PC is openai-codex/gpt-5.5 through OAuth, not OpenAI API key mode. | Local openclaw.json | 2026-04-26 |
| Telegram webhook cleanup warnings are operational noise when send and receive are verified working. | Local gateway logs | 2026-04-26 |
| Cron jobs that execute local commands must use explicit approvals or fixed scripts. | Local cron jobs.json; local approvals policy | 2026-04-26 |

