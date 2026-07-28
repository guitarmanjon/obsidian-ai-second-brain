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

- From [[HB]]: TRE - very keen on IMG leading in this area. COMPASS - has been included in a bid from main UoS without IMG's knowledge; [[HB]] talking to [[Andy Silcox]], anchoring TRE with AS as IMG's thing. R-R and single-aisle/narrow body: digital strategy - is R-R nervous about deploying AI into the company? Idea to bring Boeing and R-R together to discuss digital strategy; [[HB]] going to start pushing this with [[Chris Nex]], building on ADT work (with MTC)? AVGI: [[HB]] has said he'll approach ATI about getting out of the contract, which R-R have taken on board; meeting with R-R on Monday, [[HB]] going to push the Boeing digital angle - mention to [[Alex]].
- **R-R ADAPT**: reference architecture work from a few years ago is getting traction on the back of the AI adoption plan. [[Chris Nex]], [[Neil Tatman]], [[Andy Yorke]] from R-R are up for it - Neil wants either AMRC or Omnifactory (Nottingham) to lead. Too big for one centre to do, but one centre needs to own it.

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
