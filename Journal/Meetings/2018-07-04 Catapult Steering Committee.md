---
date: 2018-07-04
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Emily Medley]]
- [[Hue]]
- [[Seun Ojo]]
- [[Adam Brown]]
- [[Sabino]]
- [[Jon S]]

## Purpose

> [!info] Why did this meeting happen?
> A Catapult Steering Committee meeting to review progress on strategy trials, virtual machining vs measured cutting forces, and data streams/capture for VM validation.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Emily Medley]]:
	- Overview of strategy trials; development of SOPs for tooling and strategy trials, with handover to technicians/KTC for future testing.
	- 3-axis / pocketing / spigoting: V15 good for turning and indexable work where insert cost is cheap and processes can be aggressive (15 minutes tool life is acceptable), but not great for solid tools.
	- Kistler vs SPIKE - what baseline data is needed, and is SPIKE good enough or is more needed from Kistler?
	- Spiralling a spigot vs spiralling a pocket - is the spigot test valid for predicting pocket behaviour?
	- Automated data capture flagged as key for data management.
	- 5-axis trials: focus on surface finish/quality rather than tool life; conical taper barrel tools; looking at application to Structures (currently only used on aerofoils).
	- Specific challenge features: free-standing thin walls (3mm), deep pockets with thin walls, tight corners, slot roughing.
	- Trials starting 16 July in preparation for proper tests in September; prep for actual machine trials in August/September.
	- Synchronisation of data across Spike, Kistler, vibration, MTConnect; NI libraries for Visual Studio; want to avoid using multiple laptops as sync is tricky.
	- Vibration data capture - [[Hatim]] to facilitate.
- [[Hue]]:
	- VM vs measured cutting forces; review of ABG080.
	- Question: can the AMRC VM solution predict tool deflection and the resulting large steps left in heavy roughing (direct slotting from ABG080)?
	- Software in use: MachPRO, Vericut Force, MMPS and Twin Control; TWS not considered.
- [[Seun Ojo]]:
	- Overview of data streams being considered, particularly those required for VM validation.
	- Tagging data capture - could engineers use drop-downs to apply a tag to the data?

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Hatim]] - (Facilitate vibration data capture)
