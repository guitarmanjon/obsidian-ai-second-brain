---
aliases:
  - Louise Sharp
team: University of Sheffield
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- University of Sheffield. Handles queries on Additional Associate Support / FEC overhead costs for KTP finances.
- JS emailed [[Louise Sharpe]] on 16 June 2025: Boeing had raised this in the LMC and separately - the KTP candidate Boeing are most interested in (background in materials testing) knows the labs at the main university where this testing could be done, and Boeing want to know if this line item covers access to such facilities.

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
