---
aliases: []
team: AMRC
role: Year in Industry placement (starting full time soon)
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Year in Industry placement student, moving to a full-time role soon. Put together a spreadsheet on additional sensor tech, referenced re: the NextGen programme. See [[2023-01-30 Next Gen Call]].
- Supervised by Tim R on Grand Challenge work. Involved in HySaaS data science discussions.

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
