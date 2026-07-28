---
aliases:
  []
team: Produmax
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Mandy Ridyard]] (Produmax): UK productivity definition questioned. "Sig" - improving leadership in manufacturing productivity (PDF referenced). Red-green-blue people exercise - done with all employees? KTP proposed to simulate operator intelligence. Employee engagement survey mentioned.

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
