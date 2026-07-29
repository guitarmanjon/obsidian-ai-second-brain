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

- *Collaborative landscape identified**: Speech and Hearing (SPandH), Dept of Computer Science ([[Jon Barker]], [[Guy Brown]], [[Ning Ma]]) - robust speech processing, computational auditory scene analysis, audio-visual machine listening. Dynamics Research Group, School of MACE ([[Keith Worden]], [[Elizabeth Cross]], [[Neil Sims]]) - Structural Health Monitoring, [[Machine Learning|ML]] for dynamical structures, chatter mitigation. Acoustics & Sensors experts ([[Kirill Horoshenkov]], [[Matthew Jones]]) - acoustic materials, UKAN sensor networks, physics-informed [[Machine Learning|ML]] for acoustic-emission source localisation.

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
