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

- Vooban - [[Hugues Foltz]] (Exec VP)
- **Vooban ([[Hugues Foltz]])**: Tailored AI solutions / digital transformation. Met Hugues over lunch - discussed shared UK/Canada challenges with slow AI adoption. Strong opinions: e.g. EU AI Act seen as stifling progress/adoption vs the US approach which is closer to forcing adoption. Vooban has ~200 people but is considered an AI superpower in Canada, competing with KPMG, Accenture etc. - Hugues sees this as illustrative of how slow the AI world still is in Canada. Vooban runs an annual event (possibly "Insights AI") featuring industry speakers discussing AI implementation journeys - Hugues couldn't find an equivalent in the UK, a possible joint opportunity. Somewhat open to research collabs with Vooban as tech provider. Looking to open a UK office/team soon.

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
