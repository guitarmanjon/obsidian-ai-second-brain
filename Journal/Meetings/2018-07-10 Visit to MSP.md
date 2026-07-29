---
date: 2018-07-10
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Pete]]
- [[Tony Fipps|Tony]]
- [[Maryanne]]
- [[Jon S]]
- [[Chloe]]
- [[Keith Worden|Keith]] (new Technical Account Manager)
- [[Margaret]]

## Purpose

- ...

## Key Discussion Points

- Topics to discuss (from email thread): differences between [[Probing|probing]] systems, benefits of NC-PerfectPart, standard programming in [[CAM]] for standard features, how AMRC becomes involved in more projects (possibly via [[CAM]] integration), what AMRC needs to do to become fully NC-PerfectPart compatible (training, CAD/[[CAM]], convincing operators to actually run NC-Checker); NC-PP and SPRINT; NC-PP through [[CAM]]/integration/auto-update of [[CAM]]; NC-Checker run time still a barrier to implementation at AMRC; machine data collection.
- MSP now offering bespoke, almost turnkey solutions using the same products, integrating with CAD/[[CAM]], post-processors, etc.
- [[Rolls-Royce]]: support for Hermle [[Probing|probing]] has ended - question over whether [[Rolls-Royce|RR]] have in-house skills to develop this further.
- [[Probing]] at AMRC: I+ not ideal (3-axis, less accurate). Link to CWF - [[Tony Fipps|Tony]] to contact [[Rufino Bolado|Rufino]] regarding what they want to do at CWF.
- Installation on VM or servers - to discuss with IT: how many people can access, same MAC address across all VMs, one VM per machine tool, all machines need networking. MSP say they can solve this - all machines can have NC-PP "installed" on VM, with the operator logging in to run NC-PP/Checker and all data saved on the VM.
- Using [[Probing|probing]] through [[CAM]] requires training for engineers across various [[CAM]] packages.
- MSP want to develop solutions per [[CAM]] vendor rather than bespoke projects/products.
- Post-processor work needed to implement; HyperMill interested in ground-up integration work with MSP.
- Safran have bought into MSP as part of their processes - possible link to Large Landing Gear work in Structures at AMRC; WFL limitation may need further work; Aptsource is the outcome; link up with Structures suggested.
- Needed: training for programmers, and inserting MSP sequences.
- 3-axis vs 5-axis machining: MSP usable for inspection, but cannot re-align in 3-axis mode. Condition-of-supply report also mentioned.
- When MSP support is needed, call [[Chloe]] to arrange - no need for engineers to be left stranded.
- NC-Checker: further training needed for operators on speeding up the process; visibility could be improved via a seminar for engineers/operators, possibly at the Internal Conference; talk to [[Ash]]/[[Carl]] about who to include, and involve tech fellows.
- [[Matt F]] raised how to roll this out and enforce it (note: source includes an apparently unrelated/garbled aside - "Karaoke in Japan").
- Proposed project to demo/roll out: involve an AMRC engineer/team, with a presentation at the end by the AMRC engineer and MSP.
- Integrate into [[On-Machine Inspection|OMI]]/MHV at [[Rolls-Royce]]: [[Rolls-Royce|RR]] CDS now using NC-Checker; MSP on [[Rolls-Royce|RR]]'s approved products list; MHV resistance based on existing Duttonmatic cycles, limited to [[Siemens]] controllers (management joined between Washington and Sunderland sites; Sunderland has more than [[Siemens]] controllers).
- Data from controller: not real-time, data agnostic.
- Black box: sits in the machine cabinet, removes need for a dedicated PC, communicates directly with the machine tool and data storage (network).
- [[Maryanne]]: data audit - where does data collection fit with MSP's product?

## Decisions

- ...

## Action Items

- [[Tony Fipps|Tony]] - (Contact [[Rufino Bolado|Rufino]] regarding CWF plans for [[Probing|probing]])
