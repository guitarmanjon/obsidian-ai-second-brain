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

- Understand the outline content [[Dale Sinclair]] could talk about, to help shape the modular manufacturing / construction event and plan complementary speakers.
- Proposed date: backend of the year, likely September; [[Dale Sinclair]] (DS) noted a month is a long time in his world.

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
