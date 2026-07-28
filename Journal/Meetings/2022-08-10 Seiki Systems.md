---
date: 2022-08-10
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[John Davis]] - Seiki
- [[JS]] (author, on behalf of AMRC)

## Purpose

> [!info] Why did this meeting happen?
> AMRC has a project launching to install monitoring systems across 14 companies (3 machines each) to track machine tool utilisation and downtime; [[John Davis]] of Seiki was consulted on whether their system (Seiki AIR) could meet the requirement, followed by a live demo on 22/08/2022.

- Assess whether Seiki AIR can meet AMRC's requirement for a cloud-hosted, API-accessible machine monitoring system across 14 companies within a 3-month timescale.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Original requirement (from JS's email): monitoring systems across 14 companies, 3 machines each, minimum requirement to monitor utilisation and capture downtime reasons via an operator tablet or similar; ideally cloud-hosted with API access; tight timescale of ~3 months.
- Seiki AIR is on-premise only, but Seiki can supply an on-prem PC to meet the requirement.
- Monitoring options include: current clamp, tapping into the traffic light signal tower, talking to the CNC via software protocol (e.g. MTConnect), or digital I/O (offers power-on, running, and alarm as a minimum).
- Hardware installs (digital I/O, current clamp) take a day for 3 machines; other methods are remote.
- Cost is per resource monitored, not per user: £2,000 starting point, £1,000 per module as needed, £250 per machine for machine data acquisition, plus cost per day for site visits.
- No additional sensors currently on offer, though Seiki is looking at power monitoring.
- Follow-up on 22/08/2022: live demo of Seiki AIR.
  - Operator panel shows utilisation breakdown by machine, with ability to dig into downtime reasons entered.
  - Reporting view shows factory layout overview with status indicators per machine.
  - Analytics by shift, resource, and time period; export as PDF, Excel, Word, or data file.
  - OEE reporting included.
  - Data access via SQL, best done via SQL views as defined by Seiki.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[John Davis]] - (Send over some budget numbers.)
