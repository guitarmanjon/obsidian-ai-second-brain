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

- Collaboration with University of Manchester: engagement with industry element of the work, wanting to start soon; [[Shirley Harrison]] as point of contact; SME focus considered useful, rather than just large companies; survey being developed based on literature and tech reviews, to be sent out through usual channels.
- [[Shirley Harrison]] has a hit list of companies - need to establish what she already knows about what SMEs want.
- [[JS]] - Talk to [[Shirley Harrison]] on what she knows already.

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
