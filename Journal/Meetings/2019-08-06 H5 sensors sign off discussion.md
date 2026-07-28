---
date: 2019-08-06
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[JM]]
- [[HL]]
- [[IB]]
- [[RB]]
- [[LB]]
- [[OO]]

## Purpose

> [!info] Why did this meeting happen?
> To agree the approach for testing and signing off the H5 sensor system before/during delivery.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Temperature sensors: fairly straightforward to test - machine tool starts at ambient, all temperatures should rise with ambient and again during machining. For accessible sensors, an IR thermometer could be used to verify.
- Accelerometers: verify via tap testing. Caution around modal points - sensors placed on a node (zero displacement position) could give useless readings.
- Strain gauge: [[OO]] asked whether these could be used effectively as a dyno, comparing strain gauge results against a real dyno.
- System tests: proposed regular (monthly?) fingerprint routines to verify sensor functionality, plus annual machining tests (including chatter) for further verification. Would be nice to run fingerprints at MTT to compare pre- and post-delivery to AMRC. Machine tool SAT (site acceptance test) - monitor sensor signals during SAT as these typically include individual axis moves etc.
- Calibration: accelerometers aren't important for calibration (just frequency matters); strain and temperature calibration matter more.
- Documentation: question of whether there will be documentation for software architecture as part of SAT, and how to confirm all software is working as required - is presence of data in output files sufficient evidence, or should the software do more verification itself?
- Cabling: [[JM]] raised strain relief / cable tautness - enough cable for strain relief, but not so much slack that it flaps about and affects sensor readings.
- Approach: comprehensive documentation expected from MTT (sensors, DAQ rates, software design); connections for FRF to cRIO; ability to capture data from all sensors at once and whether sensors can be turned on/off individually; system expansion/future-proofing; verify sensor performance for each sub-system during FAT; whether warranty covers sensors/DAQ; and training on using the sensor systems.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
