---
aliases: []
team: Boeing Korea Engineering & Technology Center (BKETC)
role:
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- Presented on [[AI]] @ BKETC during the [[2026-02-09 Boeing Korea Visit]] - actively applying [[AI]] solutions across [[Boeing]] production (perception, predictive/decision-making, generative, MLOPS). Also referenced in [[2026-02-10 Social Media Training]] re: a follow-up "tracer" visit.

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
