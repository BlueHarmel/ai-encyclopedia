# OpenClaw

Last verified: 2026-04-26

## Overview

OpenClaw는 공개 문서와 이 PC의 local-private evidence를 함께 본다. 공개 페이지에는 운영 요약만 남기고 token, credential, raw private log는 넣지 않는다.

## Pages

- [Coverage Ledger](coverage-ledger.md): Original sources and their current coverage status.
- [Brain Vault Sync](brain-vault-sync.md): Brain Vault sync behavior.
- [Cron](cron.md): OpenClaw cron behavior.
- [Gateway](gateway.md): OpenClaw gateway behavior.
- [Memory](memory.md): OpenClaw memory behavior.
- [Security Approvals](security-approvals.md): OpenClaw security and exec-approval behavior.
- [Telegram](telegram.md): OpenClaw Telegram behavior.

## Original Sources

| Source | URL | Status | Last checked |
| --- | --- | --- | --- |
| OpenClaw official docs | https://docs.openclaw.ai/ | indexed | needs extraction into topic pages |
| Local openclaw.json | local-private | covered | summarized |
| Local cron jobs.json | local-private | covered | summarized |
| Local gateway logs | local-private | covered | summarized |
| Local vault sync scripts | local-private | covered | summarized |

## How This Section Is Organized

서비스 개요는 텍스트로 읽고, 각 하위 페이지는 원본 소스의 성격에 따라 표, timeline, comparison, feature map 중 하나로 정리한다. 가격/한도는 표, release notes는 timeline, app/API 경계는 비교표, 운영 문서는 상태표가 기본 형식이다.
