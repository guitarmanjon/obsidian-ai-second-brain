---
aliases:
  - James M
team: CMI (Centre for Machine Intelligence)
role: Director, CMI
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Director of the Centre for Machine Intelligence (CMI). Regular contact across CMI catch-ups and the [[AI]] for Engineering & Manufacturing theme. See [[2025-09-23 CMI AI Enabled Research]], [[2025-10-01 CMI and RSE]], [[2025-10-13 CMI - AI and Research Computing]], [[2025-09-24 CMI Weekly Catch Up]], [[2026-01-22 CMI Weekly Catch Up]], [[2026-01-08 CMI - AI for E&M Fortnightly]], [[2026-02-16 James and Jon - Tom]].

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
