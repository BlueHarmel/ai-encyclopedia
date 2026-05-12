# OpenAI / GPT / OpenAI API

Last verified: 2026-04-26

OpenAI API 페이지는 ChatGPT 앱과 개발자 플랫폼을 분리해서 이해하기 위한 기준 문서입니다. ChatGPT 구독, 앱 기능, 앱 모델 선택은 API endpoint, API billing, developer tool behavior와 동일하게 취급하지 않습니다.

## 핵심 구분

| 주제 | ChatGPT 앱 | OpenAI API |
| --- | --- | --- |
| 사용 표면 | chatgpt.com, 앱, workspace | platform.openai.com, API endpoint, SDK |
| 결제 | ChatGPT Free/Plus/Pro/Business/Enterprise/Edu | API billing, usage, token 비용 |
| 도구 | 앱 안의 파일, 이미지, 음성, deep research, connector | API tools, Responses API, function calling, file search, web search |
| 모델 availability | ChatGPT plan과 release notes 기준 | Platform docs와 API model availability 기준 |

## 운영 규칙

- ChatGPT Plus/Pro가 API 사용량을 포함한다고 쓰지 않습니다.
- API facts는 Platform docs나 API changelog에서 확인합니다.
- 앱과 API에 같은 모델명이 나오더라도 availability와 limit은 별도로 기록합니다.
