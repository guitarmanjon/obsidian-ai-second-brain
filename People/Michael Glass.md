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

- [[Jon Stammers]] (attendee). Hosted by [[Josh D'Addario]]. Panellists: [[Dave Simpson]] (DNV), [[Rachel Hassall]] (DNV), [[Michael Glass]] (SSEN Distribution), [[Jon Thompson]] (Yottar), [[Yiu-Shing Pang]] (UK Power Networks), [[Abbas Mahmood]] (Energy Networks Association).
- Panel: [[Rachel Hassall]] (DNV, [[Data Science]] and [[AI]] lead), [[Michael Glass]] (Data Governance and Information Manager, SSEN Distribution), [[Jon Thompson]] (Chief Product Officer, Yottar), [[Yiu-Shing Pang]] (Data sharing manager, UK Power Networks), [[Abbas Mahmood]] (Head of Data and Digitalisation, Energy Networks Association).
- Hurdles to improving collecting, sharing and using open data: [[Michael Glass]] (MG) - metadata challenge is significant; Ofgem data best practice principles; referenced the ENA data triage playbook; data described/defined differently across organisations - data standards, schemas, ontologies, interoperability of data. [[Yiu-Shing Pang]] (YP) - DNOs have different ways of describing things, so standardisation is a major hurdle. [[Jon Thompson]] (JT) - need to balance the benefits of publishing open data vs. the risks of doing so, e.g. critical infrastructure data being used by harmful actors.

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
