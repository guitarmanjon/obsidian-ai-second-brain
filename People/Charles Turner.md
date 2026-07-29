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

- [[AMRC Data Cloud|Data Cloud]] is being talked about externally ([[Charles Turner]] telling Sheffield manufacturers it's ready and free) — raises questions: who gets companies on board, what sensor systems/data/access/guidance is needed, whether the "EyUp" course is the intended onboarding path, how to fund the time needed, how to respond if a company approaches tomorrow wanting to get on board.

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
