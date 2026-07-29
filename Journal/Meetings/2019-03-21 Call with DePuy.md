---
date: 2019-03-21
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]] (AMRC)
- [[Malcolm Brown]] (AMRC)
- [[Szymon Baron]] ([[DePuy]])
- [[Adrita Mumtahina]] ([[DePuy]])
- [[Evans Chikarakara]] ([[DePuy]])
- [[Paul Dwyer]] ([[DePuy]])
- [[Eymard Gorman]] ([[DePuy]])

## Purpose

- Open conversation with [[DePuy]] exploring adaptive machining, in-process monitoring, and tool wear/breakage, to identify where AMRC's process monitoring capabilities could add value.

## Key Discussion Points

- Open conversation around adaptive machining.
- [[Evans Chikarakara|Evans]] (EG): machine a part, [[CMM]] it, identify failures and update machining to correct - building an expert system to mimic what a person would do.
- In-process monitoring: opportunity noted for handling part loading errors (MSP's NC-PerfectPart is designed for this). Concern that in-process measurement is slow, though "doesn't have to be." Discussed whether in-process measurement could reduce [[CMM]] use - if a part is a long way out, scrap it rather than sending to [[CMM]], though [[Paul Dwyer]] wasn't sure this is a goer as [[CMM]] is the final decision point.
- [[Paul Dwyer]]: lots of in-cycle [[Probing|probing]] on some parts, triggered by tool change/new tool/sister tool; used for validating finish and triggering re-finish if needed. SPRINT considered too expensive for the components [[DePuy]] makes - not enough value.
- Tool breakage/wear ([[Evans Chikarakara|Evans]]): tool wear causing out-of-tolerance parts; looking at installing technology to overcome this.
- [[Paul Dwyer]]: off-machine is better for getting tool profile (doesn't use [[CNC]] time); [[Probing|probing]] is better for capturing tool wear. UC Dublin work ([[Szymon Baron]]): instrumentation of pallets with embedded sensors, connected to MTConnect for positional data; force feedback used for tool wear monitoring; concerns over commercial use/IP; material hardness may affect how well the system works; Nordmann already running on machine for breakage detection, skipping to sister tool. UCD system can be embedded in tombstones etc.
- Noted that [[DePuy]]'s internal teams need to talk to each other more.
- Summary of [[DePuy]] interest areas: tool chipping, sensorisation of fixturing, data analysis/machine learning of data already collected, tool balancing for freeform surface products.
- Follow-up email (from [[Malcolm Brown]], referencing "Jon" in third person) summarised AMRC's process monitoring track record and proposed areas for [[DePuy]]:
  - Existing AMRC work: adaptive machining based on in-process measurements (cut, measure, cut with offsets applied); adaptive feed control based on machine/sensor data (example: ellipse, adjusting feed at the vertex per spindle load); adapting the work coordinate system based on part loading errors (MSP's NC-PerfectPart).
  - Proposed new areas: adapting machine loading based on machine utilisation (using actual spindle utilisation/amp-hours rather than just parts produced); retrospective data analysis - [[DePuy]] collects large amounts of machine data but doesn't do much with it, which AMRC could help with under the adaptive machining banner; through-life data capture, analysis and adaptation - capturing data from raw material forging through to in-service use so failures can be traced back to root cause ("big data - from forming to performing"); process and [[Machine Health Monitoring|machine health]] monitoring - referencing AMRC's current Catapult project on circle-diamond-square parts, due to complete end of March; Full Monty / Cincinnati H5 - AMRC's planned ABG proposal around the H5, involving a production run capturing a large data set followed by analysis for process/[[Machine Health Monitoring|machine health]] indicators, likely including a machine-learning element.

## Decisions

- None recorded.

## Action Items

- None recorded.
