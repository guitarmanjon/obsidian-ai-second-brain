---
date: 2021-08-18
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[Chao]]
- [[Steve McVey]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Discuss future opportunities and scope for AMRC/MTT collaboration on machine data and Factory+ integration.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Pre-meeting notes on future opportunities at AMRC:
  - Integration with Factory+ - would build on the work to get sensor data to a DB instead of CSVs; framework already in place; dashboards easy to put in place (Grafana).
  - Expected increase in work on the machine from the Ops side, though ongoing issues are slowing this down; [[Alex Conheeney]] is the key AMRC contact.
  - Cutting tech - cutting strategy development work is ongoing; simple and reliable data capture is paramount to this work.
  - Non-geometric validation - using machining data to validate parts, process and machine health; open question of how to validate the data that is itself validating the parts.
  - Sensors vs high frequency controller data - is there any redundancy as a result of having HF controller data?
- Meeting notes:
  - [[Steve McVey]] wants a clearer idea of what AMRC wants to get out of MTT.
  - [[JS]] explained: [[Steve McVey]] isn't familiar with Jonny's code so would need to learn what he's done; also covered DB structure and data retention strategy.
  - [[Chao]]: use data to train ML models, then only keep the ML models, not the raw data.
  - Assisting maintenance tasks - e.g. pre-ordering bearings because the system has 80% certainty a bearing will fail.
  - Thresholding issues - simple thresholds don't account for values just under or over the threshold, or how long a value has been at the threshold; more sophistication than plain thresholding is needed.
  - Brief mention of ongoing maintenance issues.
  - [[Steve McVey]] to go away and look at the work involved and report back.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Steve McVey]] - (Review the work involved and report back to AMRC)
- [[JS]] - (Explain DB structure and data retention strategy to [[Steve McVey]], including onboarding on Jonny's existing code)
