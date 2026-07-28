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

- Draft candidate representatives per AMRC group for the visit: TMG - [[Pete C]], [[Sabino]](?); CC - ask [[Kev]]; Castings - [[Jack Naylor]], [[Ed Taylor]], [[Dave Looms]], [[Matt Cawood]]; Design - [[Dave King]](?); IMG - [[Jon]] and [[Alex]]; Labs - TBC; NW - [[Siva]]; Cymru - [[Bobby Manesh|Bobby]](?)/[[Harry Williams]](?)/[[Kevin Chan]] "Mau" (?).
- [[Jack Naylor]] - Castings capabilities

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
