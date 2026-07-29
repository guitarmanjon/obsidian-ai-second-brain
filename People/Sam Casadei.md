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

- From [[Jon Bray]]'s introduction: [[Sam Casadei]] is part of the SELA group, whose theme this year is [[AI]] & [[Machine Learning]]. [[Sam Casadei|Sam]]'s group has been given a project from a Sheffield small farmer called Regather, who want to harness data from crops to identify produce quality.
- [[Sam Casadei|Sam]]'s group is focusing on novel uses of [[AI]] and [[Machine Learning|ML]], and has decided to look at farming / small holdings / agritech.

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
