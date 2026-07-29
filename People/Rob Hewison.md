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

- [[Sarah Kilner]] (SK) presented slides on Marketing and Exploitation of COMPASS. Four tiers of opportunities, from full ([[Boeing]] use case) through to tier 4 which is digital only - defines equipment only, not customer segregation. 11 opportunities identified across the 4 tiers - Data and [[Digital Twin]] are the 2 opportunities for Tier 4. Potential target customers identified based on the 11 opportunities. Note: data sharing agreements needed for those using the facility. [[Rob Hewison]] (RH) - tier 4 is the most attractive, based on a conversation with [[Airbus]], though tier 4 (Data & DT) needs the other streams to be active. Some discussion over feasibility of individual streams / use of individual bits of kit - got quite technical.

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
