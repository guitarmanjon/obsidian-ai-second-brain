---
date: 2022-08-10
tags:
  - Journal
  - Meeting
---

## Attendees

- [[John Davis]] - Seiki
- [[JS]] (author, on behalf of AMRC)

## Purpose

- Assess whether Seiki AIR can meet AMRC's requirement for a cloud-hosted, API-accessible machine monitoring system across 14 companies within a 3-month timescale.

## Key Discussion Points

- Original requirement (from JS's email): monitoring systems across 14 companies, 3 machines each, minimum requirement to monitor utilisation and capture downtime reasons via an operator tablet or similar; ideally cloud-hosted with API access; tight timescale of ~3 months.
- Seiki AIR is on-premise only, but Seiki can supply an on-prem PC to meet the requirement.
- Monitoring options include: current clamp, tapping into the traffic light signal tower, talking to the [[CNC]] via software protocol (e.g. MTConnect), or digital I/O (offers power-on, running, and alarm as a minimum).
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

- None recorded.

## Action Items

- [[John Davis]] - (Send over some budget numbers.)
