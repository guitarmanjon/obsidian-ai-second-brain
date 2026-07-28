---
date: 2024-02-21
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Jon Stammers|Jon]]
- [[Saul Cozens]] (email correspondence)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Work package activity for HVMC HPC/AI: explore and capture the current state and constraints around unlocking knowledge and data sharing needed to enable AI activities on the Isambard estate (per SoW shared by NCC).

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- From the SoW shared by NCC: mainly an IT exercise to explore/capture current state and constraints for unlocking knowledge/data sharing to enable AI activities on the Isambard estate.
	- Objective 1: knowledge from across HVMC - each centre to have a data and knowledge repository accessible for AI work, by their own teams or by supply chains.
	- Objective 2: ensure and enable seamless access to the system and integration with these data/knowledge repositories.
	- Each centre to provide a report summarising the data/information management current state of the organisation, including blockers, limitations, and IT/OT hardware/software limitations.
	- Collective set of requirements for HVMC to be the final output, developed by NCC from current-state assessments and 2 workshops (planned 15th Feb, 15th March) to capture framework requirements and the process for Isambard access in future.
	- Centre deliverables: current-state report (initial ready for the 15th Feb workshop, updated for 15th March). Collective deliverable: Data and Knowledge sharing framework document.
	- Things to include: Databricks as an option for data sharing; Data Connect (ISO27001-certified method - details from [[Saul Cozens]]?); Turing Data Safe Haven?; Dafni ([[Lindsay]]?); FAIR principles; Data Centric Manufacturing?; the Apollo protocol (IET, unifying digital twins across sectors); "let's not reinvent the wheel"; Globus.org.
- Email exchange with [[Saul Cozens]] (21/02/2024):
	- [[Jon Stammers|Jon]]'s initial email: asked whether Data Connect follows the Data Safe Haven (DSH) service published by UCL (as mentioned by [[Artur Grigals|Artur]]), in the context of a cross-HVMC project looking at what data sharing frameworks different centres have and whether/how they could support sharing data across centres in future.
	- [[Saul Cozens]]'s reply:
		- DSH is a platform built on Ronin, deployed in AWS.
		- Sheffield's Secure Data Services (SDS) provide a wrapper for DSH (and other platforms), helping researchers use the right mechanisms to protect data to the required level, built around an Information Security Management System (ISMS).
		- SDS (staff, platforms, ISMS) is certified to both NHS DSPT and ISO27001 - important for giving partners/data owners confidence.
		- Data Connect helps researchers get access to health and social care data wherever it's held; if it has no home (a TRE or SDE in the health data world), Data Connect uses SDS to find it a suitable home (maybe DSH, maybe another platform).
		- Rules around sharing health data are very stringent, often restricting use, movement, usage period, and linking with other datasets.
		- Not sure where UCL fits in specifically, beyond having collaborated with the author of the key paper on secure data environment architecture (arxiv.org/pdf/1908.08737.pdf).
		- None of the above is itself a "data sharing framework" - if anything the opposite, since they ensure data is *not* shared; but demonstrating the ability to keep data secure is an essential step toward being trusted to share it.
		- Also looking at Globus - a tool that does facilitate moving data from one environment/organisation to another; again not a data sharing framework itself, but another piece of the puzzle.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Jon Stammers|Jon]] - (Prepare current-state report ahead of the 15th Feb HVMC workshop)
- [[Jon Stammers|Jon]] - (Follow up with [[Saul Cozens]] on Data Connect/DSH/Globus as inputs to the data sharing framework)
