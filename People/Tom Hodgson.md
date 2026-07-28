---
aliases:
  []
team: THo
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Tom Hodgson]] - Head of Metrology F2050
- Senior attendees discussed as potential invitees to a future session (not necessarily present at this prep meeting): [[Andy Silcox]] (potentially just to say hello) and [[Tom Hodgson]] (tentative).

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
