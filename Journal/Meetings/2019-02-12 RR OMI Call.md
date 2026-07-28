---
date: 2019-02-12
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[JS]], [[JM]]
- RR: [[JMcG]], [[AM]] (Andy Mantle), [[Peter Roden]], [[Mark Benson-Brown]], [[Richard Preston]], [[Diane Oddie]]
- Also referenced in notes: [[Richard Foster]], [[Sam Fifield]], [[James Moore]], [[Rob Evans]], [[Richard Morris]], [[DO]]

## Purpose

> [!info] Why did this meeting happen?
> A call between AMRC and Rolls-Royce to set the scene on RR's needs across business units, review the AMRC's MP2.3 OMI work, and discuss opportunities (including HPIP) for further on-machine inspection work to reduce reliance on CMM.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

*(Note: pages 17-18 of the source are heavily garbled - two columns interleaved throughout, one being pre-meeting "Pre-notes"/"Agenda" content and the other the live meeting "Notes". These have been separated below on a best-effort basis; exact ordering within each section is not fully certain given the extent of the interleaving.)*

**Pre-notes / Agenda**

- [[Richard Foster]] "requirements", with input from [[Sam Fifield]]:
	- Reducing reliance on CMM - how can OMI help? [[SF]] hinted at "inspection by inference": measure tools at start/end of process; measure some faces made with the same tool to infer other features. [[RF]]: a control plan is needed for this, and confidence in results is key to eliminating the end-of-machining inspection cycle.
	- Speeding up probing time - prior RR ADG and MP2.3 work; CAM-based probing (NX poor here); could SPRINT assist, since it's already available on machines?
	- Geometric and process data - could this be better utilised to support measure cuts and confidence building?
	- Broken tools leading to oversize measure cuts - logic to capture this; measure tools if OMI reveals an oversize measure cut.
	- Machine Health Verification.
- From a meeting on 12 November 2018: ABG proposal around reducing final inspection using OMI/machine data; confidence in OMI results vs. CMM for critical features; AS13004 PFMEA approach; connected supply chain.
- Agenda:
	- Setting the scene - [[Richard Foster]] and [[Andy Mantle]] (RR), to give a brief overview of Rolls-Royce's needs across the various business units.
	- HPIP requirements - [[Sam Fifield]], AMRC - what needs have been recognised within AMRC for OMI.
	- Review of MP2.3 OMI work - [[James Moore]], AMRC - summary of the MP2.3 OMI work and proposals for future work that didn't take place.
	- Discussion and next steps - all. Earlier discussions had included potential for an ADG or ABG project at AMRC - is there potential for inclusion in remaining Manufacturing Portfolio work? Open discussion on where to go next.

**Live meeting notes**

- [[JS]] gave an overview.
- [[AM]] (Andy Mantle) - why this meeting exists: Barnoldswick needs; [[Richard F]]; anything useful from MP2.3; rapid probe moves - can DMG provide an M-code similar to the Hermle? [[AM]] needs to follow up on procedure for this.
- [[Diane]] (Oddie): 2 new DMGs, with 2 different probing systems (SPRINT and standard), used for checking fixtures and inspecting features. Restrained parts in the fixture mean the final on-machine inspection doesn't meet requirements (controlled temp and unconstrained) - is there a desire to move to this route? Yes, to reduce time, but it needs to be deemed acceptable by engineering. Also covered: compensation/measure cuts, in-process checks, working with Renishaw, and the MCRL gate.
	- Calibration of probes is not controlled as tightly as on CMM; possible internal learning based on Hermle machines at Washington.
	- [[Richard Foster]] looking into placement of an artefact on DMG 210/125; artefacts already exist to check probes (3D Quickset to calibrate the master probe).
- [[Sam]] (Fifield): HPIP requirements. Question: can any CMM items be transferred onto the machine, or does this just shift the bottleneck to the machine tool? Idea of being smarter with data already collected - e.g. only measuring tool length (in relation to measure cuts) to infer correct feature size, replacing the end-of-machining cycle with measure cut + tool length data. Example: front bearing housing has a 20-30 minute end-of-machining cycle. Faster probing time might not be a huge gain since there aren't many probing routines in the machining (diameters ~1500mm, saving of a few minutes per part).
- [[James]] (Moore) overview of MP2.3 work (slides to be shared on ForumPass):
	- AI3329 summary, focused on OMI - complex features desktop study and ADG2268 review were the only work completed, out of 12 potential bits of work.
	- Outcome: 5 technologies were found suitable; 80-20 rule - most features could be handled by 2 technologies.
	- Probing cycle time reduction: Hermle implemented a new M-code to ignore probe triggers so the probe can move in rapid, proved with a cardboard box test. Investigated impact of forces/deflection on probes during acceleration/deceleration - high-speed camera showed no deflection; Renishaw confirmed rapid moves before the probe were more likely to damage the machine than the probe itself. Potential savings for RR were significant - £17k over 7 parts/year.
- What next? Any opportunity in HPIP?
	- [[Diane]]: DMG 125 probing cycles are designed for end-of-process inspection - cycle time reduction could be significant; SPRINT is on the 125 so this would help.
	- [[AM]]: tool measurement not currently accurate enough - concerns include accuracy of the device used, which part of the tool is measured, tool push-off not accounted for (though this wouldn't matter if tolerances were large enough).
	- [[AM]] interested in what can be done with on-machine measurements being "bought off" by Engineering. Unconstrained measurement is an issue - some features (e.g. bosses/bores) less impacted than larger features. If Engineering will accept it, it could happen. Temperature - shop floor does get cold; [[AM]] asked about focusing on wider-limit features, and what dimensional control exists without temperature control. [[DO]]: GKN have done temperature compensation for OMI based on thermal expansion.
	- [[Richard Morris]] very keen on this work; [[Rob Evans]] in Engineering working on reducing CMM inspection approval.
	- [[DO]]: GOM project ongoing - more relaxed features being GOM'd, tighter features CMM'd.
	- Correlation between OMI and CMM results: [[DO]] has done some work here - 2 μm difference seen on a test part. MeasurLink not yet set up in the FBH building for all DMGs; FBH is a good candidate (simpler, detailed features to compare).
	- Temperature data capture on shop floor - idea of a standard-length part with a temperature logger to indicate machine tool conditions; carbon part unaffected by temperature.
- Post meeting: setting of right-angle heads (manual load) - guaranteeing spindle rotational position, using a probing cycle to check spindle angle and provide compensation; a parameter controls the spindle angle. Potential from [[SF]]: right-angled head, reduced cycle time.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Next catch-up meeting agreed for 13th March, 14:00, for 15 minutes.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[JS]] - (Keep the conversation going with [[Richard Foster]] and [[Sam Fifield]] to see how it develops)
- [[JS]] - (Send an invite for the ~15 minute catch-up call, 13th March 14:00)
