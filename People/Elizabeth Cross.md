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

- Not a meeting - these are notes made against a follow-up email. People involved: [[Thomas E McLeay]] (Tom), [[Elizabeth Cross]] (Lizzy), [[C Wick]] (Chandy Wickramarachchi), [[Mateo Leco|Mateo]].
- Email from [[Thomas E McLeay]] <t.mcleay@sheffield.ac.uk>, sent 19 November 2018 09:15, to [[Elizabeth Cross]] <e.j.cross@sheffield.ac.uk> and [[C Wick]] <c.wickramarachchi@amrc.co.uk>, subject "notes from friday":
- *Collaborative landscape identified**: Speech and Hearing (SPandH), Dept of Computer Science ([[Jon Barker]], [[Guy Brown]], [[Ning Ma]]) - robust speech processing, computational auditory scene analysis, audio-visual machine listening. Dynamics Research Group, School of MACE ([[Keith Worden]], [[Elizabeth Cross]], [[Neil Sims]]) - Structural Health Monitoring, ML for dynamical structures, chatter mitigation. Acoustics & Sensors experts ([[Kirill Horoshenkov]], [[Matthew Jones]]) - acoustic materials, UKAN sensor networks, physics-informed ML for acoustic-emission source localisation.

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
