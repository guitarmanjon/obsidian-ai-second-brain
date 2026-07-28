---
date: 2023-10-10
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Iain Crosley]]
- [[Darren Falconer]]
- [[JS]]
- [[Jon H]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Feedback session with XpertRule (XR) on their experience setting up Factory+ as part of onboarding a new colleague.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- New colleague [[Eric]] at XR looking at Factory+ (or "Smart Factory" as [[Iain Crosley]] calls it) as part of onboarding.
- [[Darren Falconer]] summarised [[Eric]]'s experience setting up Factory+ for XR:
  - [[Eric]] spun up F+ management on an AWS virtual machine.
  - Some feedback that documentation is missing bits for setting up DNS.
  - Issues with a temp sensor - DMP wouldn't accept the number entered by XR, appeared to be treating it as a string.
    - Some issues with Eng Low on the schema for the temp sensor (demoed live).
  - Question: can another schema be added to a Device? Answer: no - would need to create an array of sensors instead.
  - Question raised over whether individual company sites/plants would have their own F+ instance, or whether there could be a central instance across sites.
- [[Darren Falconer]] drew parallels between XF and Factory+.
- Discussion around setting up IPCs - AMRC relies heavily on its IT team for new IPCs and VMs, which is why AMRC hasn't seen the same DNS issues.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- No individual F+ instance per site decided - array of sensors is the workaround rather than adding another schema to a single Device.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
