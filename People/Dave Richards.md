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

- Factory+: SME engagement planned; data models/management needed work, setting back plans; next year Catapult money will fund engagement with local firms and tier 1s, working towards production-ready; the following year targets ADG, ABG, AS as a product for integrators; pushing infrastructure work (software imaging, gateways) over to IT this year to free up [[Alex]] and team for research; not much to commercialise around Redhat; cloud connectivity is longer term; feedback from [[Dave Richards]] on architecture.
- [[Andy S]] - (Confirm attendees for [[HVMC]] roadmap workshop on 3rd Feb, including [[Farrow]], [[Rosser]], [[Griffen]], and [[Dave Richards]] / Yorks [[AI]] Labs)

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
