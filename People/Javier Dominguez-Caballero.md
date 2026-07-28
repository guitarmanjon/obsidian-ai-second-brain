---
aliases:
  - Javier
  - JD-C
  - Javi
team: AMRC
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- AMRC colleague. Attended the Senseye vendor meeting; also referenced re: use of MIRO and contributed slides to a presentation on AI. See [[2023-07-26 Daily Notes]], [[2023-09-05 Senseye Meeting]], [[2024-01-25 Presentation Prep]].

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
