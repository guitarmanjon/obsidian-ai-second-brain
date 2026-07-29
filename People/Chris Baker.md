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

- [[Chris Baker]] - Science Director, Intelligent Data Ecosystems, Rothamsted Research (panellist)
- Panel on [[AI]] opportunities in decarbonisation: [[Lucy Yu]] highlighted forecasting of energy networks for supply/demand optimisation, and weather forecasting for generation impact (e.g. DeepMind's Gencast). [[Chris Baker]] noted Rothamsted has extensive data useful for validating [[AI]] models, stressing importance of validation/verification. National Data Library mentioned repeatedly re: building accessible, validated datasets. Centre for Net Zero has developed the "Faraday" model - a generative [[AI]] model (based on GMMs, not an [[LLM]]).

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
