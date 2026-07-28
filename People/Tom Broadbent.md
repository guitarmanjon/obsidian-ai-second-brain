---
aliases:
  []
team:
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- AES Seals: [[Tom Broadbent]] (Software Dev Manager), [[Ian Newby]] (AVT Reliability - Machine Sentry platform: DB, sensors, hardware, software)
- [[Tom Broadbent]] / [[Ian Newby]] (TB/IN) gave history and use case at AES: Machine Sentry is their condition monitoring platform; vibration data captured as time series; data tagged with asset faults by senior engineers. [[Chris Rea]] (MD) wants better prediction and detection of bearing failure. Expert knowledge currently required to identify faults and predict failure. ADA is their current expert system - a time series comparison against a rule set: 100% correct 50% of the time, 80% correct all the time; runs on tablets or web portal with real-time feedback; works well for simple systems but struggles with gearboxes and variable-speed systems; unknown bearings are a particular challenge.
- Challenges raised: can bearing fault detection be improved when no bearing info is given? Given a detected fault, what is the remaining useful life? [[Tom Broadbent]] also raised improving rotating shaft estimation.

## Notes

- ...

## Interactions

```base
filters:
  and:
    - file.inFolder("Journal")
properties:
  file.name:
    displayName: Title
  note.date:
    displayName: Date
  note.date_from:
    displayName: Date From
  note.date_to:
    displayName: Date To
  note.tags:
    displayName: Tags
views:
  - type: table
    name: Journals
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - date
      - tags
    sort:
      - property: date
        direction: DESC
      - property: date_from
        direction: DESC
    columnSize:
      file.name: 420

```

## See Also

- ...
