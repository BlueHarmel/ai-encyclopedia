# People Signal Registry

This registry tracks public signals from influential AI people. These sources are not product documentation. They are context signals only.

## Tracked People

| Person | Why track | Stable source | X source | Treatment |
|---|---|---|---|---|
| Andrej Karpathy | LLMs, agents, AI education, AI UX | https://karpathy.ai/ | https://twitter.com/karpathy | concept / learning signal |
| Andrew Ng | AI education, applied AI, industry adoption | https://www.andrewng.org/ | https://twitter.com/AndrewYNg | learning / industry signal |
| Yann LeCun | AI research direction, JEPA, world models, criticism of LLM-only approaches | https://yann.lecun.com/ | https://twitter.com/ylecun | research direction signal |
| Demis Hassabis | AI lab strategy, DeepMind research direction | https://deepmind.google/ | needs-confirmation | lab / research signal |
| Peter Steinberger | OpenClaw, local-first personal agents, agent UX, developer workflow tooling | https://steipete.me/ | https://x.com/steipete | builder / agent tooling signal |

## Recording Rules

- X posts, interviews, podcasts, newsletters, and news articles are signals, not stable product facts.
- Product availability, pricing, limits, release dates, and model access must be confirmed from official documentation before promotion.
- If public X mirrors are blocked, record `source-unavailable` and stop. Do not try ad-hoc scraping or unofficial API workarounds from cron.
- Prefer stable sources: official homepages, official blogs, newsletters, papers, talks, and official organization announcements.
- Store useful signals in `pipeline_v2/people-signals/` first. Promote only after review.

## Signal Types

| Type | Meaning | Promotion rule |
|---|---|---|
| `opinion-signal` | A viewpoint or interpretation from the person | Keep as labeled context |
| `research-signal` | Research direction, paper, talk, or technical thesis | Can update People or Concepts pages |
| `learning-signal` | Course, post, explanation, or educational resource | Can update workflows or learning notes |
| `release-signal` | Product or model release claim | Requires official product documentation before fact promotion |
| `source-unavailable` | Source could not be reached | Record in audit only |

## Source Notes

- Andrej Karpathy homepage: https://karpathy.ai/
- Andrej Karpathy X: https://twitter.com/karpathy
- Andrew Ng homepage: https://www.andrewng.org/
- Andrew Ng X: https://twitter.com/AndrewYNg
- Yann LeCun homepage: https://yann.lecun.com/
- Yann LeCun X: https://twitter.com/ylecun
- Google DeepMind: https://deepmind.google/
- Peter Steinberger homepage: https://steipete.me/
- Peter Steinberger OpenClaw post: https://steipete.me/posts/2026/openclaw
- Peter Steinberger X: https://x.com/steipete
- OpenClaw GitHub: https://github.com/openclaw/openclaw
