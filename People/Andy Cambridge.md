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

- Agenda set by [[Andy Cambridge]]: to discuss a strategic vision for technology and systems at [[Collins Aerospace|Collins]], focused on (1) understanding current processes via digital system integration to identify problem statements, (2) industrialisation of key processes - AMRC to spearhead integrating MRL 6 technology into current processes while keeping an eye on future tech not yet available, and (3) a digital systems approach to improving current ways of working (ME functional skillset improvements / digitalisation).
- [[Andy Cambridge]] (Automation lead) and [[Scott Paterson]] (Industrialisation lead) are key partners for AMRC, to be kept informed but not actively involved, ensuring central alignment.

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
