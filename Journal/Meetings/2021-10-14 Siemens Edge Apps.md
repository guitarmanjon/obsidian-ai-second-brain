---
date: 2021-10-14
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Steven Carter]] (organiser, R-R)
- [[Donka Novovic]]
- [[Nat Hudson]]
- [[JS]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Organised by [[Steven Carter]] (R-R) to give an overview of Siemens Edge apps.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Donka Novovic]] asked which apps are readily available at AMRC and which useful ones could be added to the project, with the Mini-MISSY project also in mind.
- [[Nat Hudson]] covered:
  - Data streaming now available via MQTT.
  - Analyze MyWorkpiece Monitor - creates a fingerprint per part, used in automotive where there are hundreds of parts/day.
  - Analyze MyWorkpiece Capture (in dev) - captures low frequency data for overrides, etc.
  - Analyze MyMachine/Condition - standard cycle run on an empty machine to create a mechanical fingerprint; software assumes the machine is empty and manual safe stops can be added; Mindsphere app available for detailed trend analysis and planning downtime/preventative maintenance.
  - LF signals can be added manually, but need to work out exactly what's wanted; can be found on the machine under Diagnosis, which lists available variables (e.g. feedrate address `/Channel/State/feed/` and `RateipoOVR[U1]`).
  - Analyze MyToolpath - AMRC already holds the license.
  - Toolwear - noted as always a tricky area.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
