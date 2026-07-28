---
date: 2018-10-24
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Dan Ostling]] (Machining Dynamics Expert)
- [[Jorgen Hagglund]] (Application Specialist)
- [[Justin Davies]]
- [[JS]]

## Purpose

> [!info] Why did this meeting happen?
> To explore potential areas of collaboration between AMRC and Sandvik around Silent Tools+ instrumented boring bar technology.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- 2 streams of work possible - apps-based and research-based. Discussion around potential areas of collaboration on Silent Tools Plus.
- [[Dan Ostling]]'s presentation:
	- Paper available: "Cutting process monitoring with an instrumented boring bar measuring cutting force and vibration" (https://doi.org/10.1016/j.procir.2018.09.004), conference in Budapest. Carolina university researchers looking at printed electronics on tool tip, temperature measurement.
	- Silent Tools - damping goes back to Borstang in 1968; tech hasn't changed much since.
	- Challenges of deep hole boring - "cutting in the dark" due to the nature of the process: process stability (chatter), tool deflection (dimensional errors), vibration, insert wear, insert breakage, chip control.
	- SilentTools+ gives the operator a "window" into the process.
	- Sensors: accelerometers, strain gauges (allows calculation of force and deflection if tool dimensions known), Bluetooth link to PC.
	- Data from test cuts reveals interesting insights into deflection and force during profiling, use of worn tools, good examples. Tangential and radial forces to investigate.
	- Values: cutting strategy - less measuring/spring cuts; less probing as surface position during cutting is known.
	- [[Dan Ostling]] sees more involvement around the applications side of development, less so on tech development. What are people doing today (e.g. RR)? What could be improved? Potential for more complex features if needed. Machine data from WFL not possible at present - working with WFL in Spring to enable (is WFL OPC enabled?).
	- Target markets: shafts and landing gear.
- Working with machine tool builders (WFL) would give greater benefit but there is an option for standalone, which would just miss out on machine tool data. Quicker to get a standalone demo though - but having machine tool data/integration gives a better demo and captures customers. Sandvik also looking at field bus comms for speed.
- Discussion around embedded temperature readings - interest in the work done in ABG2473B. Wouldn't use EDM's insert for process, but for process development. [[Dan Ostling]]: knowing the change is just as valuable as knowing the absolute temperature - "researcher's trap" of wanting to know exact temperature.
- Timing of data: can we put a vibration sensor on the machine tool to look at timing feature, a la clacker board? Is this a project that needs to happen?

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Justin Davies]] - (Arrange further work via SoR, etc.)
