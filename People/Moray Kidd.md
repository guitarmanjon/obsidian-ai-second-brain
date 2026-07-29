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

- SamsonVT / Partful: [[Jim Harris]] (ex-[[Siemens]] Sales Director, independent sales advisor to Samson VT), [[Moray Kidd]] (Senior Lecturer at Manchester, supporting Samson VT), [[George Greenhalgh]] (Samson VT), [[John Ward]] (Samson VT CTO, joined online)
- Training data for anomaly detection: [[Moray Kidd]] explained the system is trained on normal operating data so anomalies can be picked out; a multi-dimensional approach reduces false alarms and also allows faster commissioning. For new assets with unknown failure history, the approach is anomaly detection rather than detecting specific failures. The system relies on customers already having data - the amount required depends on use case.
- [[Moray Kidd]] - (Possibly lead an Innovate resubmission involving Teros - to be confirmed)

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
