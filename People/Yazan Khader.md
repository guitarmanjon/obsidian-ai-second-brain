---
aliases:
  []
team: Predictech
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Yazan Khader]]'s dissertation: "I4.0 and SMEs" - barriers to implementation of Industry 4.0 for local SMEs, comparing local and national SMEs in terms of barriers (expertise, resources, lack of understanding), informed by the [[Made Smarter]] review.
- Start-up visa: [[Yazan Khader]] coming back to UK on a start-up visa, can work alongside unrestricted hours - 2-year visa for recent graduates of UK universities.

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
