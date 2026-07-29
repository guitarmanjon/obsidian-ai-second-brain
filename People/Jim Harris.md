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

- SamsonVT / Partful: [[Jim Harris]] (ex-[[Siemens]] Sales Director, independent sales advisor to Samson VT), [[Moray Kidd]] (Senior Lecturer at Manchester, supporting Samson VT), [[George Greenhalgh]] (Samson VT), [[John Ward]] (Samson VT CTO, joined online)
- [[Jim Harris]] gave an overview of the Samson background: driven by Sam Burgess (CEO?), ex-military, who saw the opportunity while out in the field for better spare-part identification during MRO activities - PDFs are always out of date, so up-to-date, connected immersive BOMs are an opportunity.
- [[Jim Harris]] has encouraged Teros to focus on asset monitoring rather than whole-enterprise monitoring (unlike, e.g., SensEye), using built-in control data from machines.

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
