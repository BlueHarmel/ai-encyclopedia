# AI 백과사전 (AI Encyclopedia)

> Updated: 2026-03-15
> IA 버전: v3 (3-Layer: Common → Service 101 → Recipes/Comparisons)

## 개요

백엔드 개발자 실무 워크플로우에 집중한 AI 서비스 백과사전.
각 서비스를 codex-101 수준(매뉴얼 형식, 구체적 예제, 깊은 실무 가이드)으로 기술합니다.

## 정보구조 (3-Layer IA)

| 레이어 | 비중 | 내용 |
|---|---|---|
| A. 공통 (Common) | 20% | 용어집, 정책, 검증 체크리스트 |
| B. 서비스별 101 | 50% | 각 서비스 챕터 00~10 + changelog |
| C. 레시피/비교 | 30% | 실무 레시피, 서비스 비교 |

## 디렉터리 구조

```
docs/
├── index.md                     # 전체 목차
├── glossary.md                  # 공통 용어집
├── policy/
│   ├── data-handling.md
│   └── verification-checklist.md
├── services/
│   ├── chatgpt-pro/             # 00~10 + changelog (1차 초안 완료)
│   ├── claude-pro/              # 00 초안 + 01~10 템플릿
│   ├── gemini-pro/              # 00 초안 + 01~10 템플릿
│   ├── genspark-plus/           # 00 초안 + 01~10 템플릿
│   └── github-copilot-pro/      # 00 초안 + 01~10 템플릿
├── recipes/
│   ├── incident-response.md
│   ├── code-review.md
│   ├── refactoring.md
│   ├── api-design.md
│   ├── sql-debugging.md
│   └── documentation.md
└── comparisons/
    ├── feature-matrix.md
    ├── which-to-use.md
    └── prompt-porting.md
```

## 서비스별 진행 상태

| 서비스 | 상태 | 비고 |
|---|---|---|
| ChatGPT Pro | ✅ 1차 초안 완료 | 00~10 + changelog |
| Claude Pro | 🔧 템플릿 상태 | 00 초안, 01~10 템플릿 |
| Gemini Pro | 🔧 템플릿 상태 | 00 초안, 01~10 템플릿 |
| Genspark Plus | 🔧 템플릿 상태 | 00 초안, 01~10 템플릿 |
| GitHub Copilot Pro | 🔧 템플릿 상태 | 00 초안, 01~10 템플릿 |

## 챕터 구성 (서비스별 공통)

- `00-overview` — 서비스 개요
- `01-ecosystem` — 생태계 및 포지셔닝
- `02-plans-limits` — 플랜/요금/제한
- `03-models-capabilities` — 모델 및 기능
- `04-ui-tools-integrations` — UI·도구·연동
- `05-core-workflows` — 핵심 워크플로우
- `06-prompt-patterns` — 프롬프트 패턴
- `07-recipes-backend` — 백엔드 레시피
- `08-troubleshooting` — 문제 해결
- `09-faq` — FAQ
- `10-references` — 참고자료
- `changelog` — 변경 이력

## 접속

- **GitHub Pages (공개):** https://blueharmel.github.io/ai-encyclopedia/
- **인덱스:** https://blueharmel.github.io/ai-encyclopedia/wiki/index.html

## 운영 상태

- GitHub Pages 배포: ✅ 활성 (cron 매일 12:10 KST 자동 배포)
- 백과사전 빌드 cron (`ai-encyclopedia:dashboard-builder`): ⏸ 일시 중지
- 편집/갱신: 수동 또는 cron 재활성화 후 자동화 가능
