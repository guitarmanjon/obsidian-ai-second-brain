---
aliases: []
team: University of Sheffield
role: VP for Research
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- VP for Research at [[University of Sheffield|UoS]]. James was hoping to get her strategic investment support to help scale [[AI]] RSE capabilities across the University. See [[2026-01-08 CMI - AI for E&M Fortnightly]].

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
