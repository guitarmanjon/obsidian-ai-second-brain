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

- [[Richard King]], every week or two — Head of Manufacturing in Aero etc., UK.
- [[Amido]]'s non-exec is talking to [[Rina Ladva|Rina]] at MS about credits for AMRC to work with [[Amido]] and build a demonstrator — possibly leave this enquiry for now, based on this call's conversation. [[Rab S|Rab]] talks to [[Rina Ladva|Rina]] every ~6 weeks, and [[Richard King|Richard]] every week.

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
