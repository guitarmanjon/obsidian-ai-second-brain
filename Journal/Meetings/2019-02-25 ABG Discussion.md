---
date: 2019-02-25
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[AB]]
- [[LB]]
- [[OO]]

## Purpose

> [!info] Why did this meeting happen?
> To plan the production/data-capture structure and budget for ABG work, including tool wear measurement, automated FRF, and Siemens Edge integration.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Tool wear measurements to be included.
- Two phases to production:
	- Phase 1: machining with lots of data capture over 2 weeks - OMI data plus Equator. One week of "all good" running, one week of variations (chuck allowing run-out setting, turning coolant off, wrong grade of material). [[AB]] has ideas from the Metrology hub; Kistler dyno considered as a possible indicator of force.
	- Data analytics: FRF system onto cRIO, developing apps etc. - estimated 1-1.5 months.
	- Phase 2: near-time processing, applying learning as tools, 1 week, same part, same data capture.
- Production process - 2 options: long-duration finish machining of a tool/die (making 2-3 over two weeks), or a short-duration widget (making many over two weeks).
- [[Rob Ward]] identified as a resource for analytics/machine learning - a free resource, feeding into objectives 4 and 5 of ABG_01.
- ABG_12: get automated FRF into H5; PM&C to support cRIO data capture from the FRF system; Objective 2 identified as key.
- Auto tool wear work: £5k needed; six M-code triggers required (open question whether these will be available); strain gauges in spindle.
- Move to full automation of testing: web page to decide on required data capture; [[AB]] noted the need for connectivity to Catia for full data capture.
- Question raised: could the Siemens Edge device on C52 be moved to H5 instead?
- Component should be industrially relevant: rigid (no thin wall/flexi flanges), simple geometry (standard profile milling, drilling) plus 5-axis scanning.
- Budget of £10-15k identified for Cutting Tech, including tool holders, material, programming, tech lead time etc.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
