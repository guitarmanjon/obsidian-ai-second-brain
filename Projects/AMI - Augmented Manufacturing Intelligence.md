---
priority:
date_from: 2025-01-29
date_to:
tags:
  - Project
  - AI-Manufacturing
last updated: 2026-07-28T00:00:00
---

## Objective

- Explore, and potentially formalise, an "Augmented Manufacturing Intelligence" (AMI) concept: how manufacturing workers can benefit from [[AI]] technologies - enhancing their skills and knowledge - while staying meaningfully [[Human-in-the-Loop|in the loop]], particularly in highly regulated industries (aerospace, submarines, defence) where full automation isn't viable or desirable.

## Key Results

- [ ] Settle on a name (AMI vs the earlier "Augmented Intelligence for Manufacturing Engineering Excellence" / AIMEE, which felt too narrowly scoped to Manufacturing Engineering)
- [ ] Establish whether this should converge with, or stay distinct from, [[David King|Dave King]]'s SYNCHRO proposal (HEU) - it covers very similar ground but expands beyond [[AI]]
- [ ] Scope [[KFactory]]'s platform against the AMI premise - check how much of this is already commercially solved
- [ ] Identify an anchor regulated-industry use case (aerospace / submarines / defence) to ground the concept in something concrete
- [ ] Connect the materials-science data thread ([[Pete Crawforth|Pete C]]'s sensor selection/TRL work) into the multimodal data angle

## Stakeholders

- [[David King|Dave King]] - SYNCHRO proposal for HEU, very close to this idea but broader than [[AI]]; the key relationship to sort out before this goes further.
- [[Pete Crawforth|Pete C]] - materials science data / sensor selection work; a possible input to the multimodal data thread.

## Progress

### Current Status

- 2025-01-29 - Concept captured as a personal brainstorm: the core premise (workers benefiting from [[AI]] while staying in the loop), alternative naming considered (AIMEE), and related threads noted (multimodal data, materials science data, [[KFactory]], regulated industries). See [[2025-01-29 AMI - Augmented Manufacturing Intelligence idea]].
- 2025-05-15 - Became aware of [[David King|Dave King]]'s SYNCHRO proposal for HEU - very close to this idea but broader in scope than [[AI]], and described as very well written (see the linked Google Drive folder in the original note).
- Dormant since the 2025-05-15 update - no further progress captured.

### Decisions Made

- Name: not yet settled. "Augmented Manufacturing Intelligence" (AMI) preferred over "Augmented Intelligence for Manufacturing Engineering Excellence" (AIMEE) for now, since AIMEE implied Manufacturing Engineering specifically rather than manufacturing more broadly.

### Blockers

- Not yet clear whether this should proceed as its own initiative or fold into Dave King's SYNCHRO proposal - needs a conversation with him to establish overlap and ownership before investing more time here.

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

- [[Human-in-the-Loop]] - the core design principle behind AMI
- [[Human Factors]] - related human-centred technology research
- [[Technology Adoption]] - the adoption/uptake angle for anything that comes of this
- [[AI for Manufacturing]] - broader [[AI]]-for-manufacturing coordination project; check for overlap
