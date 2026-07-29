---
aliases:
  - Shiv
team:
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Ex-AMRC colleague, now at [[Razor]]. Was on a KTP (Knowledge Transfer Partnership) - salary increase, annual leave calculation, and tool-wear testing experiments discussed. See [[2023-02-06 Daily Notes]], [[2023-09-06 KTP Catchup]], [[2024-05-02 Shiv Annual Leave]].

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
