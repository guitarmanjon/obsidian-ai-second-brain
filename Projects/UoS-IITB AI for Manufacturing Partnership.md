---
priority:
date_from: 2026-07-27
date_to:
tags:
  - Project
  - AI-Manufacturing
  - IITB
last updated: 2026-07-27T00:00:00
---

## Objective

- Build a strategic partnership between UoS (including the AMRC) and IIT Bombay around AI for Manufacturing, bridging the Centre for Machine Intelligence (CMI) at UoS and the Centre for Machine Intelligence and Data Science (C-MInDS) at IITB. Driven by a top-down mandate from UoS senior leadership recognising IITB as a key strategic global partner, catalysed by a recent visit of IITB academics to Sheffield. Immediate goal: formalise the partnership via a UoS/AMRC delegation trip to Mumbai in October 2026, synchronised with the Northern Mayors India Trade Mission (South Yorkshire Mayor [[Oliver Coppard]]).

## Key Results

- [ ] Signed Letter of Intent (LoI), backed by institutional senior leadership and witnessed by the South Yorkshire Mayor
- [ ] Co-authored 2-page Technical Blueprint for a 12-month pilot project (e.g. co-designing metadata schemas for a Manufacturing Data Space)
- [ ] Mapped architecture for cross-border data governance, explicitly separating safe metadata/synthetic datasets from restricted aerospace IP
- [ ] Agreement on institutional talent pipelines (e.g. a Joint PhD or Dual-Award Programme) for sustained bottom-up engagement between CMI, AMRC, and C-MInDS

## Stakeholders

- [[Oliver Coppard]] - South Yorkshire Mayor; provides political capital and a ceremonial sign-off moment during the Mumbai trip, as part of the Northern Mayors India Trade Mission.
- UoS academic delegation + AMRC engineers - travelling to Mumbai in October (individuals not yet named in source material).
- IITB C-MInDS academics - partner institution counterparts.
- Potential local industrial partners for Day 2 of the Mumbai workshop: Tata Group, Mahindra & Mahindra, Godrej Advanced Technologies.

## Progress

### Current Status

- 2026-07-27 - Strategic assessment/briefing blueprint captured, covering: background and mandate; AMRC/UoS strengths (Factory+, data-centric manufacturing ideologies, industrial AI track record, the COMPASS testbed); the unique value proposition to IITB (high-TRL translation, high-fidelity structured data via Factory+, the COMPASS Secure Data Environment for sensitive IP); three "clear winner" collaboration pathways (a cross-border transnational data space / shared metadata ontologies; federated learning for defect detection inside the COMPASS SDE; multilingual production assistants combining AMRC shop-floor knowledge with IITB's NLP expertise); and a proposed 3-day Mumbai workshop structure (Day 1 technical/architecture scoping; Day 2 industrial partner integration; Day 3 political capitalisation and LoI sign-off with the Mayor).

### Decisions Made

- ...

### Blockers

- Cross-border data governance and export-control questions (IP, aerospace/defence sensitivity) are flagged as needing to be mapped out during Day 1 breakout sessions in Mumbai - not yet resolved.
- Specific pilot project scope (e.g. exact metadata schema / Digital Twin pipeline target) not yet fixed - earmarked as a Day 2 co-authoring exercise.

## Related Journals

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

- [[AI for Manufacturing]] - broader AI-for-manufacturing coordination project across AMRC/UoS/CMI/HVMC; this partnership is a distinct, India-specific thread rather than one of its coordination "pods".
