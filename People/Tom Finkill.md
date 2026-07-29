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

- [[Tom Finkill]] introduced - coming in to take over from Matt Brown as key point of contact/programme lead; has relevant implementation experience from previous projects (IP, HP, Flexcelle) though no prior knowledge of [[MISSY]] itself.
- 13:57 [[Pete Crawforth]] left; 13:58 [[Tim Rooker]] joined online; 14:16 [[Pete Crawforth]] rejoined; 14:31 [[Tom Finkill]] left.

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
