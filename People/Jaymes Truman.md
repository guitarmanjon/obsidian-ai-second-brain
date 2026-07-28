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

- Machine vision and AI - [[Narcisa]]: visual inspection has moved to [[Jaymes Truman]] (a different theme); machine vision is more about whether the computer understands what it's seeing. [[Bikram]] is tech lead for AI and does a lot of machine vision. [[Kevin Obuya|Kevin]] covers visual inspection. [[Grace Lim]] covers AI and cyber, leaning towards visual. [[Wei Kin]] is a jack-of-all-trades across Unity and AI.
- Machine vision: [[Narcisa]] working with [[Jaymes Truman]] - [[Narcisa]] on cognition, [[Jaymes Truman]] on integration/machine vision; noted this relationship might need some help.
- **Robot control system - cabless demonstrator** ([[Jaymes Truman]]) — liked as a demo of the latest tech; question raised about data — is there an advantage to capturing data with the cabless system?

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
