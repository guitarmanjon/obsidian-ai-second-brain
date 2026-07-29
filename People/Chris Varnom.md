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

- [[Chris Varnom]] noted there may be separate instances of connectivity for [[Nuclear AMRC|NAMRC]] and AMRC - need separation sometimes but also collaborative spaces.
- [[Chris Varnom]]: AMG have a single network, segregated by individual VLANs, avoiding connecting machines directly to the corporate network due to outdated OS/security. Gateways used instead (per Factory+); a VM could be hosted centrally that all sites access.

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
