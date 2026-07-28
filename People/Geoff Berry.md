---
aliases:
  []
team: RTL
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- The source text on this page interleaves two columns: live meeting notes and the text of an email [[JS]] sent to [[Geoff Berry]] on 30 October 2019. Reconstructed below.

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
