---
date: 2018-09-14
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- HSE: [[JP Gorce]], [[Ed Sanderson]]
- AMRC: [[JS]], [[HL]], [[RH]]

## Purpose

> [!info] Why did this meeting happen?
> Potential project discussion with HSE about wireless sensor networks for health & safety monitoring (temperature, noise, gases, foreign objects, particulates, etc.) on the shop floor.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Note: the source page had a sidebar "Roadmap" box whose text was interleaved with the main notes in the PDF extraction; it has been separated out below as best as could be reconstructed.
- Roadmap sidebar note: Shop floor environment monitoring; combine with machine tool data and process outcomes for a complete picture; Time Agnostic (not real time) vs Time Resolved (real-time).
- Wireless - ease of install; HSE cannot link up to site networks.
- [[JP Gorce]] would be tech lead.
- [[Ed Sanderson]] - instrumentation, data gathering, based in major hazards dept.
	- Low data rates and high data rates (for short duration events, i.e. explosions).
- Round table intros.
- HL slides
	- Radio based systems
		- TI zigbee based system - proprietary?
	- Inductive based system
	- [[JP Gorce]] - useful for complementing the overall data to understand more of the process. Demos capability of AMRC.
	- Discussion: standard data format - can this be achieved?
- RH slides - internship work
	- Low cost drop-in measurement systems - rapid drop-in aligned with what HSE are looking at.
	- Xbee - good range inside, routers can extend range.
	- Correlating data / context - perhaps not so important for HSE work; more about level of environment variables linked to levels of activity.
	- WaspMote - [[JP Gorce]] already aware of it (Libelium). High cost - £2k per mote. Fall back option. Would prefer to spend money to develop capability and knowledge rather than buying an off-the-shelf product.
- Long term exposure to low levels vs short term to high levels - which is worse? HSE do not have data yet to support assessment. Time-averaged values are often used but these do not provide the granularity required (e.g. 8 hour average figure, no details).
- HSE project
	- Phase 0 of project at HSE - awaiting funding sign off.
	- Aerosols of key interest: RCS, welding fumes, metal working fluid mist, ultrafine particles, flour dust. Metal working fluid work ongoing at HSE - no legislation at present. Ultrafine particles are a challenge.
	- Potentially noise (HSE more about prevention rather than measurement) and vibration as well.
- Opportunities for AMRC
	- Phase 0 - exploratory: join WSN stakeholder group, overview of project proposal, integrate in project delivery team, identify AMRC members who may wish to join WSN stakeholder group.
	- Phase 1 - evaluation of tech in lab / model workplace: review wireless tech, advise on sensor integration, assist in collection of contextual info, recommend methodologies for integration of different data sources, investigate impact on intelligent autonomous manufacturing, suggest FoF workshop as a model workplace / demo.
	- Phase 2 - deployment in actual workplace: identify AMRC members who may volunteer / benefit from WSN, take part in evaluation of actual advantages / challenges.
- Future ideas: capture positions of employees (RFID?); smart HVAC systems (increase ventilation when more dust/aerosols present); how to fund work/progress involvement (employee exchange? sit on advisory group? does it fit with interests of PM&C / machining?).

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
