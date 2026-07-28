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

- *Key research pioneers/institutions cited**: University of Sheffield's SPandH group ([[Jon Barker]], [[Guy Brown]], and the Consistent Confusion Corpus project); AMRC/Factory 2050, including [[Jon Stammers]]'s own PhD background in automated urban/natural audio classification; AMRC's Design and Prototyping Group's work with Wilson Benesch on acoustic-optimised additive-manufactured structures; [[David King]]'s MediTel telexistence robot; AMRC Cymru's AR-headset ventilator-challenge retraining work. Dynamics Research Group, MACE - [[Keith Worden]] (SHM pioneer), [[Nikolaos Dervilis]] (data-centric ML for structural dynamics), and an XAI team (M. Nadeem Ahangar, Z. A. Farhat, [[Aparajithan Sivanathan]]) applying Grad-CAM/SHAP to acoustic anomaly-detection models. Global DCASE community leaders: Yuma Koizumi (NTT/Google), Yohei Kawaguchi (Hitachi, creator of the MIMII dataset), Keisuke Imoto (Doshisha, co-creator of ToyADMOS).
- *Collaborative landscape identified**: Speech and Hearing (SPandH), Dept of Computer Science ([[Jon Barker]], [[Guy Brown]], [[Ning Ma]]) - robust speech processing, computational auditory scene analysis, audio-visual machine listening. Dynamics Research Group, School of MACE ([[Keith Worden]], [[Elizabeth Cross]], [[Neil Sims]]) - Structural Health Monitoring, ML for dynamical structures, chatter mitigation. Acoustics & Sensors experts ([[Kirill Horoshenkov]], [[Matthew Jones]]) - acoustic materials, UKAN sensor networks, physics-informed ML for acoustic-emission source localisation.

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
