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

- Intro to SAS — [[Lorcan Matthews]] (pre-sales), [[Harry Clark]] (academic relations manager). SAS is a central platform applied across all industries, including edge analytics and sensor data; rationalises data to a central location; data visualisation is also a big part of the business. Full pipeline: data aggregation → analytics → visualisation. Founder/CEO is Dr James Goodnight.

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
