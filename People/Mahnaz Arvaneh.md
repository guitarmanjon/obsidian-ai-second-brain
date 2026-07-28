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

- [[Mahnaz Arvaneh]] - CMI cross-cutting lead for innovation, panellist
- Panel (chaired by [[Denis Newman-Griffis]]; panellists [[Helen Kennedy]], [[Susan Oman]], [[Mahnaz Arvaneh]], [[Jon Stammers]]): key focus was the governance vs innovation dichotomy. JS highlighted that aerospace is highly regulated but that AMRC can still innovate within that regulatory context.

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
