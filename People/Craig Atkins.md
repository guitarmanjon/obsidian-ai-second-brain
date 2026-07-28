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

- Digital: most MEs blissfully unaware of digital challenges, so little benefit talking to them about it directly. [[Sean]] is the key link for [[Chaitanya Krishnakumar|CK]] and connectivity challenges from the Sheffield team. [[Craig Atkins]] pushing for DES work - [[Chaitanya Krishnakumar|CK]] to push this forward with [[Cansu Kandemir|Cansu]] and the Industrial Engineering team.

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
