---
date: 2024-11-07
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[JD-C]]
- [[KS]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Agree the SoW amendment for Siemens Insights Hub work, covering cost split, training, and data ingestion/analytics approach.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Quote split into two: £13k for AMRC to pay, £27k to be paid by the MISSY PO.
- Training: [[JD-C]], plus either [[Grace]] or [[Dan]] from IMG.
- Data ingestion: [[TR]]'s suggestion of splitting into two is good - lean on Siemens for the actual ingestion work. Per [[TR]] on Slack: a lot of unknowns with Insights Hub, particularly data ingestion, which isn't yet well understood; recommends splitting into Siemens data (integrating Industrial Edge and streaming data via BFC - expected to be straightforward but likely won't be) versus third-party sources; a sizeable risk budget will likely be needed for this uncertainty, though probably not to the same extent as the Databricks data engineering effort.
- Data analytics: [[Grace]] and [[Dan]] to look at the basics of analytics. Per [[TD]] on Slack: prioritise porting Javi's scalogram work as the main use case since it's primarily based on Industrial Edge data; secondary use case options are Erica's quality checks on low-frequency data, or the high-frequency LabVIEW analytics (more interesting test but harder to port); doubtful (but would be impressed) if Insights Hub can handle TDMS data.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Insights Hub quote split: £13k AMRC-funded, £27k funded via the MISSY PO.
- Data ingestion to be split between Siemens-sourced data (Industrial Edge/BFC) and third-party sources, leaning on Siemens for the former.
- Data analytics to prioritise porting Javi's scalogram work as the primary use case.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Grace]] / [[Dan]] - (Look at the basics of analytics, prioritising the scalogram work port)
