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
- **Pathways to Work**: [[Fiona Fletcher]] and [[Ash Hibbard]] discussed innovative pathways to employment and a collaborative approach to reintegrating individuals into the workforce.

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
