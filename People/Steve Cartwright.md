---
aliases:
  []
team: MTC
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[MTC]]. Jon has been in meetings with him over the last few months in relation to [[Rolls-Royce|R-R]] Factory of the Future.
- Note: NOT to be confused with [[Steve Carter]] ([[Rolls-Royce]]) - both are sometimes shortened to "Steve C", resolve per-instance only, don't add "Steve C" as a blanket alias here.

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
