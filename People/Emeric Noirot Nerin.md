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

- Airbus Central (St Eloi): [[Emeric Noirot Nerin]] (tech development and maturity for hard metal cutting), [[Florian Versolato]] (online tool wear monitoring), [[Willy Cadet]]
- [[Emeric Noirot Nerin]]'s slide: 90% Ti, bit of Inconel and some steel.
- [[Emeric Noirot Nerin]]: tool path strategy as first step - still using dated, tried and tested programs that are stable - how can the process be optimised? Tool wear - hybrid approach of prediction and monitoring. Monitoring - liked the approach of using data for each area of need (operational, machine health, process monitoring). Valley of death between industrialised solution and concept - always a risk.

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
