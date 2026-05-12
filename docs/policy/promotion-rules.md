# Promotion Rules

백과사전은 raw source를 바로 게시하지 않는다. 공식 출처는 빠르게 반영하고, 비공식 신호는 맥락을 붙여 승격 여부를 보류한다.

## States

- `raw`: 수집만 된 상태.
- `normalized`: 날짜, URL, 요약, 관련 서비스가 붙은 상태.
- `draft`: 서비스 문서에 반영할 수 있는 초안.
- `published`: 공개 백과사전에 반영된 상태.
- `needs-recheck`: 공식 출처가 없거나 URL이 불안정한 상태.
- `superseded`: 공식 출처에 의해 더 이상 최신이 아닌 상태.

## Public Safety

- 토큰, 계정 ID, 개인 대화 원문, 로컬 상세 로그는 공개하지 않는다.
- 로컬 운영 사실은 "이 PC에서는 이렇게 운영한다" 수준으로 요약한다.
- 외부 링크가 죽으면 삭제하지 않고 `needs-recheck`로 낮춘다.
