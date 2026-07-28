---
date: 2021-07-13
tags:
  - Journal
  - Meeting
---

## Attendees

- AMRC: [[JS]], [[Erdem Ozturk|EO]], [[SA]], [[Chao Sun]], [[James Moore|JM]], [[Daniela Sawyer]]
- Siemens: [[RP]], [[NH]], [[Mark Coombs|Mark Coombes]] (machine tools business manager), [[Charles Tivey]] (manufacturing expert for aerospace, UK)

## Purpose

- Siemens walked AMRC through their SINUMERIK Edge / Industrial Edge development work in the Aero Validation Centre, to compare against AMRC's own Edge specifications and share learnings (originally proposed by [[Rob Poyner]] via email).

## Key Discussion Points

- [[RP]] introduced the Lean Digital Validation Lab for Industry 4.0 ([[Charles Tivey]] is lead) - Edge compute and SINUMERIK Edge has been the starting point; based in Germany, with a branch in CCAM.
- [[Charles Tivey]]:
  - Pushing interoperability across all Siemens products, aligned with Aerospace business processes.
  - Bill of Processes from the validation centre.
  - Main use case for the call: not a specific process, but a CNC process that must be traceable and auditable for legal purposes - focus on the architecture to allow that. Kamal robot at CCAM doing an additive process.
  - How to take traces from Edge, store them, and allow investigation for many years to come.
  - Data from Analyze / My Workpiece appended as special data; TeamCentre Analyze myworkpiece coming out soon to overlay Edge data on CAD/CAM.
  - Data pulled into OpCentre using a Restful interface; product data brought as close as possible to the operation for context, pushed to the controller via OPC-UA into GUDs, then captured by Edge.
  - Embedding OpCenter interface into modern controllers lets operators see op sheets, drawings, data, etc., feed information back, and trigger data injection into the controller on pressing start.
  - Industrial Edge applied in this scenario has "knowledge" of cell capabilities, and links robots in a collaborative machining scenario.
- Linking to AMRC work:
  - Take forging geometry to influence CAD/CAM for machining processes.
  - Trial of Omative looking likely once Industrial Edge is installed - need to find funds to support dedicated work with Siemens kit.
  - SINUMERIK uses a 4ms clock cycle; data is packaged and sent to Edge every 100ms, so a 200ms response time is best case.
  - Work ongoing to link in PROFINET data for real-time data capture.
  - Open question: Industrial Edge link to cRIO in H5?
  - Latest SINUMERIK Edge software has MQTT northbound capability and a web UI for pulling data.
  - Phil - Acubot NDT machines use dual robot control from a single Siemens controller; a Google search on this yielded no results.

## Decisions

- Trial of Omative to proceed once Industrial Edge is installed, conditional on finding funding for dedicated work with Siemens kit.

## Action Items

- [[JS]] - (Find funds to support dedicated Omative trial work with Siemens kit)
- [[JS]] - (Investigate potential Industrial Edge link to cRIO in H5)
- [[JS]] - (Follow up on Phil's Acubot NDT dual-robot control question, given the initial search yielded no results)
