---
date: 2026-02-25
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Paul Hammond]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Introduction to FLAME, [[Paul Hammond]]'s complex system simulation tool, to scope potential AMRC applications.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Paul Hammond]] is COM-based; built the RSE team at UoS and has now returned to academic work.
- Background in complex system simulation and GPUs. Commercialisation journey started to find out if there is application for it in other domains and industry. Software is now mature, no longer research-stage, and is dual-licensed under GPL and Commercial licenses.
- FLAME simulates complex systems - lots of entities, used to simulate emergent behaviour. Runs entirely on the GPU without the user needing to know about it, a bit like how PyTorch has abstracted GPU use for AI.
- Digital twinning work has been prolific - traffic modelling on the Isle of Wight, passenger movement on trains - and it's also being used in materials science, e.g. rail steel wear.
- Performance scale is orders of magnitude ahead of traditional simulation methods.
- Discussed potential AMRC applications:
  - **Supply chain - keen to learn more, put in touch with [[Cansu]] and [[Victor]].**
  - Factory flow.
  - **Tool wear.**
  - **Chip formation - [[Adam Brown]]? [[Sabino]]?**
  - **Composites - flow of resin into fibre weaves - [[Kev Kerrigan]].**
  - CFD - existing software is already good at this, but not when external factors need to be considered, or when the fluid component is coupled to something else.
  - Material behaviour.
- Also covered generic questions arising from the commercialisation process.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- No formal decisions - this was an exploratory introduction to FLAME and its potential applications at AMRC, with follow-up introductions to be made.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Paul Hammond]] - (Put in touch with [[Cansu]] and [[Victor]] on supply chain applications)
- [[Paul Hammond]] - (Explore chip formation application with [[Adam Brown]] and/or [[Sabino]])
- [[Paul Hammond]] - (Explore composites application - resin flow into fibre weaves - with [[Kev Kerrigan]])
