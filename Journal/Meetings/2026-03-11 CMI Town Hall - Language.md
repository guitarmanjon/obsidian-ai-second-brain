---
date: 2026-03-11
tags:
  - Journal
  - Meeting
---

## Attendees

- Not explicitly recorded — see speakers named in Key Discussion Points.

## Purpose

- CMI (Centre for Machine Intelligence) town hall covering Gen AI governance, grants, agentic systems, responsible AI, and education.

## Key Discussion Points

- **JM update**
  - UoS Player.

- **[[Tom Griffiths]] - Principles of using Gen AI in R+I**
  - Launched in 2025 alongside GRIP policy.
  - 5 principles: Appropriateness, Attribution, Accuracy, Adherence to data protection principles, Accountability.
  - Guidance tool available.
  - University pages on Gen AI guidance being launched next month.
    - → **Share this in AMRC.**

- **[[Hari Sood|Hari]], RPI - NVIDIA Academic Grant Programme**
  - Manufacturing is a key interest.
  - **Closing dates 30 June, 30 Sept, 31 Dec.**

- **[[Nikos Aletras]] - Teaching Machines to Learn Like Humans**
  - "The quest for data-efficient AI" — LLMs described as "Idiot Savants".
  - Humans learn from ~100-200M words up to age 18; modern AI trains on trillions of words.
  - Running out of human generated data by 2028.
  - Energy and water use are a concern.
  - New approach: give machines an "education" — combining Comp Sci with Cognitive Linguistics via Language Learning Tasks (L²T), with linguists involved in training.

- **[[Carolina Scarton]] - LLMs in Language processing tasks (good, bad + ugly)**
  - Good - innovation, creativity, efficiency. Bad - misinformation, bias, displacement. Ugly - control, environmental impact, resource depletion.
  - Multilingual NLP remains a barrier - most tools are trained in English; lots of data still needed for other languages; fine-tuning only really works for 'Latin-script' languages; "in-context learning" is an alternative approach.
  - Experimental work on disinformation found LLMs are good at creating disinformation.

- **[[Edwin Brown]] + [[Shaun Donnelly]] - Intro to Agentic Systems**
  - **[[Edwin Brown|Edwin]]**: Agents try to overcome LLM limits - restrictive/single-step behaviour, context limitation, lack of interaction with the outside world (addressed via tool use). Anatomy of an agent: LLM as the brain, tools as the hands, and a nervous system that orchestrates. Example given using Claude for a complex calculation from language prompts.
  - **[[Shaun Donnelly|Shaun]]**: Context management - an agent has a token budget (context window) covering prompt, reasoning, tool calls, response, etc. "Context rot" - full windows lead to lower quality context returns; managed via summarisation, truncation, or sub-agents. Sub-agents are non-permanent, usually predefined, and used by an orchestrator for parts of a large task. Multi-agent setups use an orchestrator plus teams of agents for specific elements of a task.

- **[[Christos Christodoulopoulos]] - The Language of Responsible AI**
  - Principal Tech Advisor, ICO (Information Commissioner's Office), Edinburgh.
  - LLMs are just conditional probability / statistical language models - the question is how to control this probability.
  - Controls available: network architecture, post-output checks, (text) watermarking.
  - Generated Text Watermarking approach from Christos + team: inject a randomly selected Abstract Meaning Representation (AMR) snippet into model output, then parse text on the detection side to find AMR traces.
  - ICO provides UK data protection guidance - AI Code of Practice in draft, Agentic AI report published Jan '26.
  - Regulation vs Innovation: safety features have helped innovation elsewhere (e.g. rollercoasters) - regulation does not always stifle innovation.

- **[[Skye Zhao]] - Gen AI for Education: Towards Inclusive and Equitable Learning**
  - Overview of Gen AI's impact on education - benefits, concerns, uses, guidance, policy, etc.

- **Community Pitches**
  - Digital Twins in Architecture - [[Xiang Ren]].

## Decisions

- No formal decisions — this was a series of talks/presentations, not a decision-making session. Follow-up noted: **Share this in AMRC** (Gen AI guidance pages).

## Action Items

- [[Tom Griffiths]] - (Share the University's Gen AI guidance pages in AMRC once launched next month.)
- [[Hari Sood|Hari]] - (Note NVIDIA Academic Grant Programme **closing dates 30 June, 30 Sept, 31 Dec** for manufacturing-relevant applications.)
- [[Skye Zhao]] - (Consider what can be learned from Skye's Gen AI in education research for staff training in Industry.)
