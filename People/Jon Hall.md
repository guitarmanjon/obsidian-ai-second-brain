---
aliases:
  - JH
  - Jon H
team:
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Contact re: IMG delegate conversations on polymers ([[2026-01-15 ATR Update]] - [[Jack Rooke]] has spoken with him). Also presented at an EFFRA HEU pitching event, which led to [[2026-02-02 HEU Call with FactorSL.es]].

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
