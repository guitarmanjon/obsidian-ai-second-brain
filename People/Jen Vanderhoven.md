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

- 22/01/2025 - Call with [[Mark Taylor|Mark]] and [[Caroline Kelly|Caroline]] from [[CPI]]: CK (chemist background, now Head of Tech Strategy at [[CPI]]) on where the market is heading; [[JS]] gave an overview of what the [[IET]] TN does re: webinars; [[Mark Taylor|MT]] covered the impact of digital tech and biotech/engineering biology (replacing petrochemical-derived feedstock); [[Caroline Kelly|CK]] covered sustainability (circular economy, sustainability, digital). Current thinking: a broad-brush overview speaker on process industries (CK/MT to find someone); case study from F&D (Andrew); case study from petrochemical - possibly [[Jen Vanderhoven]] (COO, BBIA - joining up biosciences and chemistry) or Peter Clark from KTN.
- 12/05/2025 - Call with [[Jen Vanderhoven]]: to check she's still available, and whether it's OK to pass her details to [[Lyndsay]].

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
