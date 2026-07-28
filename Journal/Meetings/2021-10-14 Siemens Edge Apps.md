---
date: 2021-10-14
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Steve Carter|Steven Carter]] (organiser, R-R)
- [[Donka Novovic]]
- [[Nathaniel Hudson|Nat Hudson]]
- [[JS]]

## Purpose

- Organised by [[Steve Carter|Steven Carter]] (R-R) to give an overview of Siemens Edge apps.

## Key Discussion Points

- [[Donka Novovic]] asked which apps are readily available at AMRC and which useful ones could be added to the project, with the Mini-MISSY project also in mind.
- [[Nathaniel Hudson|Nat Hudson]] covered:
  - Data streaming now available via MQTT.
  - Analyze MyWorkpiece Monitor - creates a fingerprint per part, used in automotive where there are hundreds of parts/day.
  - Analyze MyWorkpiece Capture (in dev) - captures low frequency data for overrides, etc.
  - Analyze MyMachine/Condition - standard cycle run on an empty machine to create a mechanical fingerprint; software assumes the machine is empty and manual safe stops can be added; Mindsphere app available for detailed trend analysis and planning downtime/preventative maintenance.
  - LF signals can be added manually, but need to work out exactly what's wanted; can be found on the machine under Diagnosis, which lists available variables (e.g. feedrate address `/Channel/State/feed/` and `RateipoOVR[U1]`).
  - Analyze MyToolpath - AMRC already holds the license.
  - Toolwear - noted as always a tricky area.

## Decisions

- None recorded.

## Action Items

- None recorded.
