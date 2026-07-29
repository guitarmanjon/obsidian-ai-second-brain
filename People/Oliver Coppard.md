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

- Build a strategic partnership between [[University of Sheffield|UoS]] (including the AMRC) and IIT Bombay around [[AI]] for Manufacturing, bridging the Centre for Machine Intelligence (CMI) at [[University of Sheffield|UoS]] and the Centre for Machine Intelligence and [[Data Science]] (C-MInDS) at IITB. Driven by a top-down mandate from [[University of Sheffield|UoS]] senior leadership recognising IITB as a key strategic global partner, catalysed by a recent visit of IITB academics to Sheffield. Immediate goal: formalise the partnership via a [[University of Sheffield|UoS]]/AMRC delegation trip to Mumbai in October 2026, synchronised with the Northern Mayors India Trade Mission (South Yorkshire Mayor [[Oliver Coppard]]).
- [[Oliver Coppard]] - South Yorkshire Mayor; provides political capital and a ceremonial sign-off moment during the Mumbai trip, as part of the Northern Mayors India Trade Mission.

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
