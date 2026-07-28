---
aliases: []
team: University of Cambridge
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- From the University of Cambridge. Guest speaker for Materials 4.0 - James was trying to get her for the AI for Engineering & Manufacturing theme lead role. Has done work using LLMs for literature harvesting for materials research. See [[2026-01-08 CMI - AI for E&M Fortnightly]].

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
