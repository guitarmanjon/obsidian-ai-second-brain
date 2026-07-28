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

- [[Jon Stammers]] (attendee). Speakers/panellists: [[Jason Hayes]] (Sheffield University), [[Fiona Fletcher]] (Rotherham Metropolitan Borough Council), [[Ash Hibbard]] (Marvel Training), [[Charlie Bartle]] (Zygenz), [[Andy Haldane]] (Chancellor, University of Sheffield; Chair, AMRC Board), [[Sarah Tulip]] (And Then Consulting, panel chair), [[Rob Hamilton]] (North East Combined Authority), [[Crispin Reed]] (The Coders Guild), [[Mel Kanarek]] (Sheffield Digital), [[Victoria Tomlinson]] (Next-Up).
- **Keynote: UK Productivity and the Four Capitals**: [[Andy Haldane]] discussed the stagnation of UK productivity and pay, identifying a lack of investment in four types of capital - Physical (investment in infrastructure/equipment near the bottom of the G7), Human (high economic inactivity, persistent skills gap), Social (connectivity and trust - "who you know" still outweighs "what you know"), Political (highly centralised system, needs more devolution to metropolitan areas). Points of optimism - top-tier UK companies outranking international counterparts in per-capita growth; Rotherham's 60%+ rise in productivity attributed to AMRC investment; the UK is a leader in innovation and should broadcast its successes more.

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
