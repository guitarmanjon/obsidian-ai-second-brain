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

- [[Rolls-Royce|R-R]]: [[Alison Gamble]], [[Matt Chamberlain]], [[Geraint Prisk]], [[Jamie McGourlay]], [[Harry Burroughes]] (left at 10:00)
- [[Matt Chamberlain]] and [[Alison Gamble]] gave an overview of what they were hoping to achieve with this project. Comes under the ADAPT programme - "Advanced Disassembly, Assembly & Performance Testing". Timeline for the new facility for Entry into Service (EIS) is 2035. Target is 32 engines per week, but 10 years out there will be MRO operations on top of this (3x, 4x the production volumes) - AG: focus on assembly for this project. So far nothing has been designed and nothing sold in terms of a new engine, but moving from a 22hr (current) to 4.5hr takt time is key. The 10 technology areas shared in the SoR have been further broken down into 2-3 sub-topics, shown in the slide pack.
- This work is ultimately going to feed into [[Rolls-Royce|R-R]]'s application into ATI batch 51 (outline stage either September or November; full application stage dates not yet announced). Weekly touchpoints - 8:30 on a Monday. Deliverable dates: 18th May workshop; 25th May discovery and alignment (?); 13th June D1 - initial rapid assessment captured in an Excel workbook; 29th June D2 - Tech roadmap presentation (both a dry run and to a wider [[Rolls-Royce|R-R]] audience); 13th July D3 - detailed output in ATI-ready format. Deliverable dates to be confirmed no later than 1 week before deadline, if they need to move. Key contacts are [[Jamie McGourlay]], [[Geraint Prisk]], [[Matt Chamberlain]], and [[Alison Gamble]]. AG sketched a rough timeline - note that tech development/introduction doesn't stop at 2035, it can and will carry on after then; 65 engines in the first year (2035), then roughly doubling every year after that until ~2000/year.

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
