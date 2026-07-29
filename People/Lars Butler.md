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

- My development: tried to start leading AMRC [[AI]] work strategically via an [[AI]] workshop, but this fell by the wayside - hard to prioritise. Sandler sales training - useful change of mindset, good ideas for up-front planning, though not much opportunity yet to put it into practice. External engagements: UnLTD business breakfast panel; BVAA conference keynote "How green is my [[AI]]?" (well received). [[IET]] Technical Network ongoing - hosted the Manufacturing and [[AI]] webinar with [[Akeel Attar]] and [[Lars Butler]].

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
