---
date: 2021-12-10
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[Rab]], [[Katie]], [[Aiden]], [[Jon]], [[Ryan]]
- Databricks: [[Richard Wylie]] (EMEA Azure Lead)
- WANDisco: [[Paul Scott-Murphy]] (CTO, Bay Area), [[David Richards]] (CEO)
- Microsoft: (attendee not recorded)
- AES Seals: [[Tom Broadbent]] (Software Dev Manager), [[Ian Newby]] (AVT Reliability - Machine Sentry platform: DB, sensors, hardware, software)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Joint session between AMRC, Databricks, WANDisco, Microsoft, and AES Seals to explore a tangible Azure Databricks stack demonstration using AES Seals' bearing failure data.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[David Richards]] (DR): the Digital Meets Manufacturing commission wants a tangible Azure Databricks stack demonstration, showing current best practice. AES have bearing failure data going back to 1968. AMRC Data Cloud to be developed together with AES Seals.
- [[Richard Wylie]] (RW): outlined a reference architecture based on core, Azure Databricks, and open source - "Azure Databricks Modern Analytics Architecture", documented on Microsoft docs (docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/azure-databricks-modern-analytics-architecture).
- [[Paul Scott-Murphy]] (PSM): WANDisco's contribution is ensuring data at scale can be handled.
- [[David Richards]] (DR): Databricks and data science credits available to both AES and AMRC, via the Databricks academy.
- [[Tom Broadbent]] / [[Ian Newby]] (TB/IN) gave history and use case at AES: Machine Sentry is their condition monitoring platform; vibration data captured as time series; data tagged with asset faults by senior engineers. [[Chris Rea]] (MD) wants better prediction and detection of bearing failure. Expert knowledge currently required to identify faults and predict failure. ADA is their current expert system - a time series comparison against a rule set: 100% correct 50% of the time, 80% correct all the time; runs on tablets or web portal with real-time feedback; works well for simple systems but struggles with gearboxes and variable-speed systems; unknown bearings are a particular challenge.
- Challenges raised: can bearing fault detection be improved when no bearing info is given? Given a detected fault, what is the remaining useful life? [[Tom Broadbent]] also raised improving rotating shaft estimation.
- SAs and CSAs from Databricks and Azure to be lined up. [[Rab]] and [[JS]] to work with AES on use cases and KPIs.
- [[Richard Wylie]] asked whether users wait for bearings to fail and what that costs. [[Ian Newby]] outlined 4 stages of bearing failure: (1) sub-surface cracking, 6-12 months of life left, least interesting to most customers; (2) HF noise, detected via Machine Sentry, shown via Hilbert transforms; (3) noise in the audio range; (4) looseness and breakage. Most users want 3 months' notice. Their system holds 16 million vibration readings (plus some oil/temperature readings), with 127,000 occurrences of stage 2 failure recorded, across 292 organisations and 2,300 different sites (not all live), 850,000 measurements per month across live sites, and 1.8 million different locations across all sites. Vibration is the biggest indicator of failure; temperature and oil monitoring (for metal particles) can also be used. AES previously looked at using TensorFlow in-house and Android applicability.
- [[David Richards]] (DR) outlined next steps: develop a proper architecture, deployed on the AMRC Cloud tenant with an AES Seals tenancy sitting below it.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Architecture to be built on the AMRC Cloud tenant, with an AES Seals tenancy underneath.
- [[Rab]] and [[JS]] to work with AES on use cases and KPIs.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[David Richards]] - (Develop proper architecture on AMRC Cloud tenant, with AES Seals tenancy below it)
- [[Rab]] - (Work with AES on use cases and KPIs, alongside [[JS]])
