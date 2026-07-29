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

- [[Max Champneys]] - [[AI]] Fellow for Sustainability and Resilience (Engineering and Manufacturing theme)
- [[Max Champneys]] - [[AI]] Fellow for Sustainability and Resilience (under Engineering and Manufacturing theme), background/focus on uncertainty, uncertainty characterisation of dynamical systems; potential surrogates-for-machining-tribology project with AMRC.
- [[JS]] - Consider surrogates-for-machining-tribology project link with [[Max Champneys]].

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
