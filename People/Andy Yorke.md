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

- **[[Rolls-Royce|R-R]] ADAPT**: reference architecture work from a few years ago is getting traction on the back of the [[AI]] adoption plan. [[Chris Nex]], [[Neil Tatman]], [[Andy Yorke]] from [[Rolls-Royce|R-R]] are up for it - Neil wants either AMRC or Omnifactory (Nottingham) to lead. Too big for one centre to do, but one centre needs to own it.
- *NP (Nikita Pietrow) - Inspection*: AG feedback on the roadmap - break the tech strands into smaller steps to show what can be had now as steps to a key milestone; link through the different pillars via a critical path. Query on whether a tech vision is needed before the roadmap. ATI slides not necessary for presenting to seniors. AG concerned about the practicalities of the demonstrator suggestions - a discovery phase needed for all inspection tasks to figure out how they can be digitised; initial virtual demonstrators discussed. Question on [[Rolls-Royce|R-R]]'s vision - demonstrators for the ATI programme vs. today's capability vs. the bigger vision; review of current processes; a "pre-production facility" keeps getting mentioned - need a COMPASS for [[Rolls-Royce|R-R]]. JS asked about fixing current PTF problems vs. thinking about a future facility - AG gave the example of drones currently used in PTF, which can help train future [[AI]] systems for a future facility; [[Christine Hannon]] (CH) - some pillars probably won't feed back into PTF in the near term, and are only about the future facility. IT involvement keeps coming up - [[Neil Tatman]] and [[Andy Yorke]] (?) - via an internal [[Rolls-Royce|R-R]] review / week-long workshop; maybe get AMRC/[[MTC]] involved. CH on declaring benefits - what does the individual tech bring to PTF, and how does it contribute to the future facility?

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
