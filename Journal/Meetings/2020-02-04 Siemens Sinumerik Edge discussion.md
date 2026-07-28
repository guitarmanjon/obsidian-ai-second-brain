---
date: 2020-02-04
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[SO]] (AMRC)
- [[JS]] (AMRC)
- [[EO]] (AMRC)
- [[Ryan D]] (AMRC)
- [[Ben M]] (AMRC)
- [[Alex G]] (AMRC)
- [[Alan Norbury]] (Siemens)
- [[Nathaniel Hudson]] (Siemens)
- [[Dave Cant]] (no longer Siemens?)
- [[Rob Poyner]] (Siemens)
- [[Andy Hodgson]] (Siemens)
- [[Steve Carter]] (RR)

## Purpose

> [!info] Why did this meeting happen?
> To discuss Rolls-Royce's requirements and Siemens' Sinumerik Edge technology for machine connectivity and data capture at AMRC.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Alan Norbury]] opened with why the group was meeting, and what RR's requirements are; also raised what machine opportunities exist at AMRC given busy machines.
- [[Steve Carter]] (RR):
  - RR have demonstrated connecting 5 assets in Singapore to a cloud service, involving Kepware, across a number of different asset types (Nanobox?).
  - RR now have an approved IT infrastructure for getting data to the cloud - no WiFi, no 5G, copper only.
  - Key question: how does this tech improve quality, cost, delivery (and safety)?
  - Interested in Edge box capability - low and high fidelity data, and what data can be captured.
- Discussion (10:45) around AMRC machines:
  - [[JS]] gave an overview of Full Monty.
  - Comparison of Hermle vs. H5.
- MTConnect / UMATI discussed - MTConnect was not a popular choice in the room.
- [[Steve Carter]]: recommended a Systems Engineering approach - identify the actors and what they need, which should define the data captured.
- [[EO]] gave an overview of offline/online solutions.
- RR's "Digital Enterprise" initiative referenced.
- Edge software officially released in October.
- Discussion of a Brownfield production line solution - Digibox.
- [[Dave Cant]] gave an overview of current apps:
  - 100 variables at 1kHz using Edge on the Solution line.
  - Optimize MyMachining / Adaptive Control uses accelerometers on the machine, based on technology acquired from Omitive(?).
- Mendix mentioned as used by RR in Singapore for an IoT demo.
- [[Rob Poyner]]: ideally need Edge devices on both H5 and C52.
  - [[Nathaniel Hudson]]: can use one Edge device across multiple machines with a config change, but not simultaneously.
- Simatic S7 for automation; Sinumerik Edge for NC.
- Sinumerik Integrate allows connectivity to Mindsphere.
- UMATI is integrated into Sinumerik Edge.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
