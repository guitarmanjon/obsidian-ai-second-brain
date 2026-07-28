---
aliases:
  []
team: Sabino
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Sabino Ayvar-Soberanis]] (Sabino) - lots of cross-group links in Catapult 26/27, good news. AI in Materials events - [[Jacqui Cole]] presenting, from Cambridge, on information management - follow-up via the CMI. A few ADG projects in TMG related to Digital topics.

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
