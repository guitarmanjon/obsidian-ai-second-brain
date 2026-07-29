---
acronym:
tags:
  - Area
last updated: 2026-07-28T00:00:00
---

## Overview

> [!info] What is this area and why does it matter?

- [[Machinability]] libraries/research - how easily a material can be machined, tied to Chris Taylor and [[CAM]] work.

## Key Concepts

- ...

## Techniques

```base
filters:
  and:
    - file.inFolder("Techniques")
properties:
  file.name:
    displayName: Title
  note.tags:
    displayName: Tags
  note.last updated:
    displayName: Last Updated
views:
  - type: table
    name: Techniques
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - last updated
      - tags
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 420

```

## Resources

```base
filters:
  and:
    - file.inFolder("Resources")
properties:
  file.name:
    displayName: Title
  note.source:
    displayName: Source
  note.tags:
    displayName: Tags
  note.last updated:
    displayName: Last Updated
views:
  - type: table
    name: Resources
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - source
      - last updated
      - tags
    columnSize:
      file.name: 420

```

## See Also

- ...
