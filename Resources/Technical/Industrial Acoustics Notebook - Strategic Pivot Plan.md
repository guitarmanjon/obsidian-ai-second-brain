---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-01
---

## Summary

> [!info] Why is this resource worth keeping?
> Jon's living research notebook (July 2026) documenting a strategic pivot toward integrating urban soundscape / machine-listening research into manufacturing contexts - using low-cost, human-audible acoustic monitoring plus modern deep learning to unlock insight into safety, machine health, and tacit knowledge on the shop floor. Sets out a whitepaper case ("Hearing the Factory Floor"), a three-pillar framework, relevant University of Sheffield/AMRC academic links, and a proposed roadmap back into acoustics research.

- ...

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

**The disruptive hook** - modern manufacturing is "acoustically dark": vibration/temperature/PLC data is captured extensively, but the rich airborne acoustic environment is routinely ignored, historically due to background noise and specialised sensor cost. Breakthroughs in Audio Spectrogram Transformers, self-supervised learning, and robust speech-in-noise processing now make it viable to extract deep operational insight using cheap, off-the-shelf microphones (human-audible spectrum, 20 Hz-20 kHz, under £100 per node) rather than expensive contact-based Acoustic Emission probes - treating the whole workshop as an "Industrial Auditory Scene" to untangle overlapping sounds into discrete, classifiable events.

**Three-pillar framework**:
1. **Workplace Safety** (highest priority) - acoustic event localisation for hazards (dropped parts, slip/trip incidents, safety guard gates opening out of sequence); hazardous acoustic mapping for HSE decibel-exposure compliance; audio-visual safety fusion with privacy-preserving cameras to trigger emergency stops in robotic workspaces.
2. **Non-Invasive Machine Health** (immediate ROI) - unsupervised anomalous sound detection trained on normal-operation sound only; machining chatter classification for real-time feed-rate correction; pneumatic/fluid leak auditing to save energy costs.
3. **Shop-Floor Tacit Knowledge Capture** (emerging frontier) - robust speech-in-noise transcription for shift handovers and voice-assisted logs; colloquial jargon translation into structured maintenance logs via LLMs; voice-activated "digital threading" integrated with MES.

**Collaborative landscape identified**: Speech and Hearing (SPandH), Dept of Computer Science ([[Jon Barker]], [[Guy Brown]], [[Ning Ma]]) - robust speech processing, computational auditory scene analysis, audio-visual machine listening. Dynamics Research Group, School of MACE ([[Keith Worden]], [[Elizabeth Cross]], [[Neil Sims]]) - Structural Health Monitoring, ML for dynamical structures, chatter mitigation. Acoustics & Sensors experts ([[Kirill Horoshenkov]], [[Matthew Jones]]) - acoustic materials, UKAN sensor networks, physics-informed ML for acoustic-emission source localisation.

**Proposed 3-phase roadmap**:
- Phase 1 (months 1-2): re-skilling/benchmarking against the MIMII and ToyADMOS2 datasets, plus a literature review of the annual DCASE Challenge Task 2.
- Phase 2 (months 3-5): AMRC sandbox pilot at Factory 2050 - three low-cost microphone arrays around an active manufacturing cell, collecting continuous multi-task data across safety, machine-anomaly, and speech-in-noise use cases.
- Phase 3 (months 6+): joint academic/industrial grant bids (Innovate UK, EPSRC) with MACE and Computer Science, using the Factory 2050 pilot data to scale to high-value industrial environments.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- [[Industrial Acoustics - Comprehensive Literature Review]] - the deeper literature review underpinning this pivot plan.
