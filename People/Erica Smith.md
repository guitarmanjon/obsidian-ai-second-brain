---
aliases:
  - Erica
  - Erica S
team: Machining Group, AMRC
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Machining Group colleague; involved in MISSY (WP3/WP4/WP5) and R-R Controls visit work. Looking at building a team (~£500k) to look after the OWAST database and supporting software, working with Research IT.

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
