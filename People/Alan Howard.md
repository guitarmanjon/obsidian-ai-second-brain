---
aliases:
  - AH
team: IET
role: IET Manufacturing TN committee member
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- IET Manufacturing Technical Network committee member. Jon has never met him, likely never will.
- 2022 budget/planning items included: Manufacturing Award ([[David Matthews]], March-June), Future Roles for Manufacturing Engineers ([[Matt Farnsworth|MF]], March), Future of Manufacturing Automation ([[Chris Proudfoot]], Sept/Oct), Digital in Manufacturing ([[JS]], Sept/Oct), Sustainability Event/Workshop ([[Chris Proudfoot]], Q4), Networking Events ([[Alan Howard]]/[[Chris Proudfoot]], May & October), Digital Manufacturing Conference ([[SJ]], December).
- From [[Alan Howard]]: Digital and Sustainability are often brought together - make sure the sustainability agenda is included (referencing the IET's joint report on manufacturing, digital and net zero).

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
