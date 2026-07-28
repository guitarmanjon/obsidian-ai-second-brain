---
date: 2019-02-12
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[AB]]
- [[HL]]
- [[SA]]
- [[PC]]

## Purpose

> [!info] Why did this meeting happen?
> To discuss temperature measurement approaches (sensor type, position and compensation) as a key input to induced stress modelling and process monitoring/control work.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Dan Structures has a need for induced stress modelling tools, for which temperature measurement is key.
	- Potential project here; requirement is for through-tool high-pressure coolant.
	- Thermocouples have slow response times.
- Current tech is relative temperature measurement.
	- [[AB]] found a paper involving Ceratizit showing a thermocouple down the centre of a solid end mill (Procedia Manufacturing 18 (2018) 81-88, https://doi.org/10.1016/j.promfg.2018.11.011; Pro Micron Spike R&D tool holder used).
	- Next generation is measurement of actual edge temperature using technology other than thermocouple - thermocouples are fast enough as shown in ABG2473 work.
- Solid tools identified as the ideal case.
- Three strands of work identified: sensor position, sensor type, compensation.
- [[PC]] raised: why do we want to know the exact tool/workpiece interface temperature?
	- Relevant to process monitoring and process control.
	- Tool wear can be informed through relative temperature.
	- Residual stress modelling benefits from absolute temperature.
	- Discussion of coupling force and temperature - noted these aren't always correlated directly (e.g. cutting faster can lead to lower forces but higher temperature).
- [[AB]]: temperature as another measurement to add through the Catapult system.
- EngD discussion with AFRC: data from the forming process plus data from the machining process gives a prediction of residual stress.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
