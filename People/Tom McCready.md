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

- Note that this funding amount may be excessive between now and March; if agreed, £40k to be shared with [[Tom McCready]].
- **Project 3 - Development of NX plugin for rapid adaptive system setup** (£0k submitted to Catapult) - [[Tom McCready]] - £40k. Proposal to develop a plug-in to NX that, via a pop-up box, automatically sets up NX for integration into an adaptive system - similar in approach to the Mill-Turn development work done by [[Rob]] and [[Dennis Fretwell|Dennis]]. Aim to reduce typical setup time from 5 days to 5 minutes, and to encourage OEMs to invest in engineers rather than treating black-box solutions as obsolescence items.
- From [[Tom McC]]'s email of 12/06/2018 to [[Tom]] and [[Phil Kirkland|Phil]]: proposal that [[Tom McCready]] gets £40k for NX plugin development, with grinding then getting £60k only.

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
