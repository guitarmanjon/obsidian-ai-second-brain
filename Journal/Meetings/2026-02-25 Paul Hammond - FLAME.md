---
date: 2026-02-25
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Paul Hammond]]

## Purpose

- Introduction to FLAME, [[Paul Hammond]]'s complex system simulation tool, to scope potential AMRC applications.

## Key Discussion Points

- [[Paul Hammond]] is COM-based; built the RSE team at [[University of Sheffield|UoS]] and has now returned to academic work.
- Background in complex system simulation and GPUs. Commercialisation journey started to find out if there is application for it in other domains and industry. Software is now mature, no longer research-stage, and is dual-licensed under GPL and Commercial licenses.
- FLAME simulates complex systems - lots of entities, used to simulate emergent behaviour. Runs entirely on the GPU without the user needing to know about it, a bit like how PyTorch has abstracted GPU use for [[AI]].
- Digital twinning work has been prolific - traffic modelling on the Isle of Wight, passenger movement on trains - and it's also being used in materials science, e.g. rail steel wear.
- Performance scale is orders of magnitude ahead of traditional simulation methods.
- Discussed potential AMRC applications:
  - **Supply chain - keen to learn more, put in touch with [[Cansu Kandemir|Cansu]] and [[Victor Shi|Victor]].**
  - Factory flow.
  - **Tool wear.**
  - **Chip formation - [[Adam Brown]]? [[Sabino]]?**
  - **Composites - flow of resin into fibre weaves - [[Kev Kerrigan]].**
  - CFD - existing software is already good at this, but not when external factors need to be considered, or when the fluid component is coupled to something else.
  - Material behaviour.
- Also covered generic questions arising from the commercialisation process.

## Decisions

- No formal decisions - this was an exploratory introduction to FLAME and its potential applications at AMRC, with follow-up introductions to be made.

## Action Items

- [[Paul Hammond]] - (Put in touch with [[Cansu Kandemir|Cansu]] and [[Victor Shi|Victor]] on supply chain applications)
- [[Paul Hammond]] - (Explore chip formation application with [[Adam Brown]] and/or [[Sabino]])
- [[Paul Hammond]] - (Explore composites application - resin flow into fibre weaves - with [[Kev Kerrigan]])
