---
date: 2016-11-30
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]] (AMRC), [[TM]] (AMRC), [[Mino]] (DMG), [[Ralph Riedemann]] (DMG)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Meeting with DMG (machine tool manufacturer) on AMRC's digital machine shop / data strategy roadmap.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[TM]] presented an overview of AMRC's past work and future direction — moving to data collection from machine tools. IMG does plenty of work in this field, but AMRC/FoF research themes relate to machining and cutting metal specifically.
- Data/connectivity architecture stack discussed level by level:
	- Level 2 — how data collection systems communicate with other systems (SAP, IMS, etc.)
	- Level 3 (FoF) — PCs next to each machine tool for local real-time compute; cloud computing for shop-wide analysis; cRIO + machine data (e.g. FOCAS) need better correlation with sensor data.
	- Level 4 — SQL is enough at AMRC; Google Analytics considered for cloud analysis.
	- Level 5 — processing data dependent on the user (manager vs. operator).
	- Level 6 — Seiki-style apps for reporting data to users.
	- Level 7 — integration with enterprise systems (MES, ERP, etc.)
- Sensing: thermocouple on cutting edge, condition monitoring (flute counts, FFTs), in-process measurement (probe tools, axis drives).
- Connectivity & edge computing: FoF infrastructure (IT tender); MTConnect (pros: widely used, easy support; cons: not truly standard, read-only); proprietary comms like FOCAS (more info from controller); Windows nodes next to machines.
- Control approaches: event-based (e.g. in-process measurement feeding back to CAM compensation via DELCAM); real-time (dynamic feed rate changes — considered phasing out real-time control for niche systems only); decision support (getting data to the right person in time); knowledge-based CAM flagged as a potential research area.
- Analytics: "Product DNA" concept — correlating material forming/machining/inspection data; KPVs and KPIs; [[TM]]'s thesis work using PCA on sensor data, tool path info, and milling process condition to generate a 2D dataset.
- Celos (DMG's smart machine concept): technology cycles, machine protection control (crash/vibration detection), condition monitoring; smart factory — connected smart machines, shop floor activity monitor; smart company — factories linked via Microsoft Cloud (chosen for global server distribution); Celos PC lets NC programs run with more memory/storage than the NC itself.
- Future collaboration ideas: a "machinability cell" combining a milling tool, lathe and robot (robo2go) as a Celos case study, developed with DMG; [[Ralph Riedemann]] keen to be involved in tendering for machines, noting UK staff aren't always up to date with the latest German/Japanese tech; Celos 2.0 (possibly built on 840D) would offer paperless shop floor functionality.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- No firm decisions recorded — primarily an exploratory technical discussion.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Mino]] - (Fill in more detail on Celos 2.0)
