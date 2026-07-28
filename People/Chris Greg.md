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

- [[Jon Stammers]] (closing note): [[Chris Greg]] approached JS about a pot of Compass "risk budget" funding for short projects (likely 2-3 months) with relevance to Compass - a lightweight, roughly one-page submission process expected soon. Topics of interest mentioned: factory connectivity/high-speed data capture, data analytics, and part/quality understanding relevant to Compass long-term. Flagged as a heads-up for anyone with relevant ideas.
- Watch for [[Chris Greg]]'s Compass mini funding call and prepare a one-pager if relevant.

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
