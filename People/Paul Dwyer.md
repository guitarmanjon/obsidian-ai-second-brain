---
aliases:
  []
team: DePuy
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- In-process monitoring: opportunity noted for handling part loading errors (MSP's NC-PerfectPart is designed for this). Concern that in-process measurement is slow, though "doesn't have to be." Discussed whether in-process measurement could reduce CMM use - if a part is a long way out, scrap it rather than sending to CMM, though [[Paul Dwyer]] wasn't sure this is a goer as CMM is the final decision point.
- [[Paul Dwyer]]: lots of in-cycle probing on some parts, triggered by tool change/new tool/sister tool; used for validating finish and triggering re-finish if needed. SPRINT considered too expensive for the components DePuy makes - not enough value.

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
