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

- [[Matt Ellis]] - Lecturer in [[Machine Learning|ML]] group
- [[Matt Ellis]] presented on the [[Machine Learning|ML]] group. Topics included neuromorphic computing (computing systems that process information the way the human brain works), spanning robotics, neuroscience and healthcare. PyKale library mentioned as a reproducible [[Machine Learning|ML]] library (possibly part of PyTorch). Neural Stochastic Differential Equations described as a form of "digital twin".
- Potential supervisors considered: [[Kathy]] ([[NP]]'s current supervisor, or colleagues of hers); [[Dongwhan Shin]] (autonomous vehicles - [[NP]] already has contact and will follow up); [[Matt Ellis]] and [[Luca Manneschi]] (suggested by [[Tom Hayward]]); [[Mengdie Zhuang]] (suggested by [[Kathy]]).

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
