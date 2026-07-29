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

- **MayaHTT ([[Marc Lafontaine]])**: Very experienced company, 150+ projects in [[IIoT]]/[[AI]] space. [[Siemens]] Insights Hub plug-in/app; Smart Machine Assistant is an [[Machine Learning|ML]]-based system relying on [[Siemens]] hardware for data capture from machine tools, providing optimised parameters for operators (advisory only, doesn't control). UK presence for ~6 years via long relationship with [[Rolls-Royce]]; Marc personally involved with several [[Rolls-Royce|R-R]] business areas. Doing physics-based [[AI]] work. Potentially useful for the Composites team - Maya have done fibre orientation work. Open to R&D collaborations and could be a good outlet/integrator for AMRC R&D that needs a next step.
- [[JS]] - Consider potential link between MayaHTT ([[Marc Lafontaine]]) and the Composites team on fibre orientation work.

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
