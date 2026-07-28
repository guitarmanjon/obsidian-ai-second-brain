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
- **The North: Impacts of AI and Digital on Skills, Jobs, and Productivity**: [[Charlie Bartle]] (Zygenz) on the transformative effects of AI/digital on regional productivity. Zygenz's mission - AI consultancy, helping organisations implement LLMs and agents within service industries, specifically Law and HR. AI Labs - a hands-on training programme for LLMs and agents, with successful sessions recently held in Leeds. "Lovable" - an LLM-based tool that converts text prompts directly into functional apps.
- [[Charlie Bartle]] (Zygenz) - reach out via charlie@zygenz.com regarding AI Lab collaborations.

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
