---
date: 2023-07-04
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[JS]], [[TR]], [[LL]], [[Vandana]], [[Luke Rutter]]
- SamsonVT / Partful: [[Jim Harris]] (ex-Siemens Sales Director, independent sales advisor to Samson VT), [[Moray Kidd]] (Senior Lecturer at Manchester, supporting Samson VT), [[George Greenhalgh]] (Samson VT), [[John Ward]] (Samson VT CTO, joined online)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Introductory meeting with SamsonVT (rebranding as Partful) to learn about their immersive 3D BOM/MRO platform and their condition-monitoring product Teros, and to explore possible collaboration.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Intros; confirmed SamsonVT is rebranding as Partful (https://partful.io/).
- [[Jim Harris]] gave an overview of the Samson background: driven by Sam Burgess (CEO?), ex-military, who saw the opportunity while out in the field for better spare-part identification during MRO activities - PDFs are always out of date, so up-to-date, connected immersive BOMs are an opportunity.
- Primarily an immersive 3D environment with BOM integration; the 3D model is rendered down to documentation viewable on low-power laptops and mobile devices.
- Reference customers/sectors: Norton Motorcycles, Lotus, agricultural equipment, and emerging companies such as e-bikes.
- [[John Ward]] demoed the Partful platform: built on Blender; "part selection" and "work instructions" are the two tools under Partful. A 3D model of a motorbike explodes into individual parts (e.g. selecting a fuel tank cover), linking to parts catalogue data for pricing, colour options, part numbers, etc. Work instructions build on the same 3D model animation to show how parts fit together.
- Teros (condition monitoring solution, currently being developed via an Innovate grant) - the roadmap plans to link all three tools (Teros, part catalogue, work instructions) to minimise downtime - seen as a really powerful opportunity.
- [[George Greenhalgh]] demoed/overviewed Teros (https://www.teros.io/): SensEye referenced as a possible competitor (also Konektio?). Strong team behind the product, including maintenance experts and data scientists.
- Training data for anomaly detection: [[Moray Kidd]] explained the system is trained on normal operating data so anomalies can be picked out; a multi-dimensional approach reduces false alarms and also allows faster commissioning. For new assets with unknown failure history, the approach is anomaly detection rather than detecting specific failures. The system relies on customers already having data - the amount required depends on use case.
- Question on how RS fit into the picture: RS were previously involved to provide hardware for data capture, but this isn't currently a requirement since most companies already have process control data (e.g. from PLCs). Integrators might be involved in the future.
- [[Jim Harris]] has encouraged Teros to focus on asset monitoring rather than whole-enterprise monitoring (unlike, e.g., SensEye), using built-in control data from machines.
- A side idea raised during the session: could sensor data collected for condition monitoring be aligned to the parts that exist in the Partful platform, to aid fault tracking over time?

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Get a working demo of Partful/Teros set up (owner not specified).
- [[Moray Kidd]] - (Possibly lead an Innovate resubmission involving Teros - to be confirmed)
- Explore a 3-way collaboration between AMRC, Samson (Partful) and an end user (owner not specified).
