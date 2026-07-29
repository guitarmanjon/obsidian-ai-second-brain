---
date: 2025-11-18
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Siva]] - presented the AMRC North West slide deck on [[AI]].
- [[Narcisa]] - involved in the Electronics assembly project.
- [[Nadeem]] - working on audio-based classification and explainable [[AI]].
- [[Mohsin Farhat|Mohsin]] - key to the InKA project.

## Purpose

- AMRC North West's session in the [[AI]] Mapping workshop series (see [[AI Mapping Workshop Template]]), mapping current [[AI]]-related projects, techniques, and future aspirations for the group.

## Key Discussion Points

- **Barriers**: GPU servers across AMRC - where are these? Lack of a working demo. Insight needed into bringing tech to the shop floor. IT reportedly spending £1m next year on infrastructure/GPUs.
- **Leyland trucks**: Leyland plan to embed people at NW to learn how to use the system, then take it back to Leyland. Application: quality inspection - checking correct assembly of engines (clips and clamps present). Challenges with frame rate/GPU performance were resolved by future work with CUDA. Uses computer vision. The underlying pipeline was developed by the NW team before Leyland funded the project.
- **[[BAE Systems|BAE]] smart bench**: computer vision for assembly; CV also checks the assembly to allow progression through operations, creating a log of completed work.
- **Weld inspection - air bubbles**: labelled data coming from the partner; a CV task to look for defects.
- **Leyland (wheels/tyres)**: quality inspection of wheels and tyres using machine vision.
- **[[BAE Systems|BAE]] picking parts**: IBM Cognex machine vision picks up parts incorrectly placed in a tray; the NW team found the tool wasn't worth pursuing further for research purposes.
- **Electronics assembly**: quality control and traceability; pick-and-place driven by G-code; [[Narcisa]] involved.
- **Composite weave**: removing manual inspection of carbon-fibre layers using machine vision; a camera follows the laying down of woven pieces to build a digital twin, with a 3D picture built from the vision outputs.
- **Closed-loop process control**: uses vibration and microphone data; FFT of data and stability lobes; a pipeline for closed-loop control. Data acquisition based on cRIO, though NW built their own DAQ. Considered using Mudak(?) for registry access on the machine, but LinuxCNC gave a better option.
- **InKA**: [[Mohsin Farhat|Mohsin]] is key to this; has now developed to allow GPT-style prompts; currently limited to ABG and ADG projects. Attribute-based access control is fairly new for InKA - not a new concept generally, but not widely implemented elsewhere; allows restriction of results based on role/attributes etc. Also involves knowledge graphs.
- **Explainable [[AI]]**: papers have been published on this topic; [[Nadeem]] working on it; shows how neural networks focus on specific areas of the data.
- **Non-conformance report (NCR) timeline**: [[BAE Systems|BAE]] Hawk NCRs; [[AI]]-assisted error codes; finding the root cause of errors passed forward. [[BAE Systems|BAE]] unwilling to share data unless desensitised, but happy to share via USB.
- **[[BAE Systems|BAE]] - as designed, as built, as maintained**: checks the aircraft throughout its life (MRO team); discrepancies are highlighted by a vision system.
- **Audio-based work**: [[Nadeem]] looking into this, using existing tools to classify audio (3D FFT-type approaches).
- **High speed drive**: EEG data combined with car position on a track (alpha and beta signals); mapping time-domain and context-domain data (X/Y position, braking, etc.) reveals a lot more about the process.
- **Future**: foundation data models for manufacturing processes - lack of foundational data for machining processes; data exists across AMRC but isn't centrally accessible; a platform for this is under development, including an experiment template for operators to fill in.

## Decisions

- None recorded.

## Action Items

- None recorded.
