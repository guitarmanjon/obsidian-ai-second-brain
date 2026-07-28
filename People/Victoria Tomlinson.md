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
- **Panel session** (chaired by [[Sarah Tulip]]): [[Rob Hamilton]] (Assistant Director of Economic Strategy and Innovation, North East Combined Authority); [[Crispin Reed]] (CEO, The Coders Guild); [[Mel Kanarek]] (Co-founder, Sheffield Digital - mentioned the Sheffield Digital Mentoring Scheme); [[Victoria Tomlinson]] (Chief Executive, Next-Up) - focused on the importance of capturing tacit knowledge, particularly from the over-50s demographic, to ensure valuable expertise is retained rather than lost upon retirement.
- [[Victoria Tomlinson]] - potential follow-up regarding strategies for retaining tacit knowledge from experienced staff.

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
