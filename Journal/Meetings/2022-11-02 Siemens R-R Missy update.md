---
date: 2022-11-02
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[NH]]
- [[AB]]
- [[Charles Tivey]]
- [[RP]]
- [[JS]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Update discussion on the Siemens/Rolls-Royce MISSY project, covering data capture, chatter detection, and progress against Mini-MISSY timelines.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[NH]] to provide a large dump of software/licenses etc.
- [[AB]] (cutting tech) to be involved in MISSY for data capture, supporting the Apps team with cutting trials.
- [[Charles Tivey]] to provide someone to support analysis work using Toolpath.
- [[NH]] would like the data captured during Mini-MISSY (and potentially G-code) so his team can review it.
- [[NH]] noted MM's programs are very short - question of whether programs will be broken down within MISSY. Likely yes for initial training/testing/stabilisation; final validation runs (~100) may be single program.
- [[NH]] proposal discussed (details not captured in notes).
- Chatter detection discussion:
  - Frequency of chatter is beyond the sampling rate of Edge.
  - Need accelerometer data to identify chatter.
  - Siemens ACM product might help - a milling solution.
  - Turning chatter is more of an issue since the high rotating mass means it isn't clearly visible at the control/drive/motor point.
  - Reference: Siemens ACM datasheet (assets.new.siemens.com).
- Edge captures at IPO cycle time; machine complexity affects this - WFL M30 gives 333 Hz on Edge, whereas other platforms achieve 500 Hz.
- [[RP]] asked whether the pace has picked up enough to satisfy Jamie's concerns - [[JS]] believes so for Mini-MISSY data analytics.
- Prep for MISSY (and the charter [[RP]] put together) deferred to a future session.
- Plan to review the map of faults to be detected (from an R-R exercise ~12 months ago) and assess which can be captured/detected/prevented using production-ready tools, including reasoning trees within each factory for fault finding based on MES data (SAP reason trees).

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Prep for the MISSY charter deferred to a future session.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[NH]] - (Provide large dump of software/licenses)
- [[AB]] - (Get involved in MISSY data capture, supporting Apps team with cutting trials)
- [[Charles Tivey]] - (Provide someone to support Toolpath analysis work)
- [[NH]] - (Review Mini-MISSY captured data and G-code)
- [[RP]] - (Bring the MISSY charter to a future session)
