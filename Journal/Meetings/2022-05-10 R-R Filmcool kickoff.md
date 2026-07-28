---
date: 2022-05-10
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Jamie McGourlay]]
- [[Alex Lee]] (placement)
- [[Richard Douglas]] - Technical Project Manager, leading data science projects, background in engine health monitoring and enterprise analytics
- [[Paul Harrison]]
- [[JS]]
- [[HB]]

## Purpose

> [!info] Why did this meeting happen?
> To scope the Thingworx-based productionisation of the Filmcool EDM trend-detection tool for Rolls-Royce.

- Discuss the Thingworx capability piece of work and confirm data formats/next steps for productionising the filmcool tool.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Thingworx capability piece of work under discussion.
- Quote from [[Jon Hall]]: talking with Roy about upgrading the Thingworx deployment to 9.3, need to confirm with R-R what format data will come in and how to get it into the Thingworx database.
- Statement of Requirements (SoR) has come from R-R; AMRC's Statement of Work (SoW) response is awaited.
- [[Jamie McGourlay]] gave an overview of MISSY for [[Richard Douglas]]'s benefit.
- R2 Data Labs' Signature Analyser ("tactical tool") is currently a proof of concept, potentially to be moved to Thingworx.
- Background to the filmcool work: an expert on the shop floor could spot trends in EDM data, and the ambition is to codify that knowledge/logic (currently captured in some Python scripts) and productionise it.
  - Phase 1 - capture logic in a Python script.
  - Phase 2 - productionise, with a functional spec developed by [[Richard Douglas]], including the need for easy updating as performance changes.
  - Phase 3 (far future) - EDM closed-loop control, with an option to update the tool.
- Sample data needed to guide the Thingworx work - some machines output CSV, some XML, but [[Paul Harrison]] confirmed data will be provided in JSON format (already converted by R-R). Samples to be provided.
- [[Jonathan Butters]] - lead Data Scientist at R-R who worked on this, has Thingworx experience.
- Plan for a blind trial at the end - same data run through both the PTC tool and the Thingworx tool to compare results.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Data will be supplied to AMRC in JSON format, already converted by R-R.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Richard Douglas]] - (Provide sample JSON data to guide Thingworx development).
- AMRC - (Respond to R-R's SoR with a Statement of Work).
