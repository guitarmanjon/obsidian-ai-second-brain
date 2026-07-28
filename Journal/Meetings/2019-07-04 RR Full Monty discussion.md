---
date: 2019-07-04
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Steve Carter]] - RR Cyber Physical Systems
- [[Arthur Smith]] - RR Broaching
- [[Donka N]] - RR Associate Fellow for Machining
- [[Vicky S]] - RR Partnership Manager
- [[Harry B]]
- [[JS]]
- [[James M]]

## Purpose

> [!info] Why did this meeting happen?
> Discussion between AMRC and Rolls-Royce on the Full Monty project, exploring sensor/KPV correlation to part quality, AI opportunities in machining, and Edge connectivity options.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Donka N]] (DN): RR heavily interested in Full Monty, looking at connected systems generally - interested in what data is captured, how, where stored, etc.
- [[Arthur Smith]] (AS): RR have a component previously used for testing Hermles that covers many operation types - will check if it can be used by AMRC (programming and CMM work already done).
- [[Donka N]] raised a series of correlation questions: are sensors addressing the KPVs (Key Process Variables) for a process; which sensors are applicable; correlation of data across sensors and parts; correlation between inputs, sensors, and part output; visual as well as physical/dimensional defects; correlation to tool wear; and ultimately, how many sensors should be included.
- [[Harry B]] (HB): outlined 4 areas of AI in IMG with RR - visual (AV&R system), robotic accuracy (Rosie?), machining (little done yet, plenty of opportunity - relating process variables to sensor outputs, tool wear, and per-tool sensor selection e.g. AE for a 3mm tool vs spindle power for a 20mm tool, plus AI for improving the CAM process using actual data rather than just models), and shop floor planning.
- [[Steve Carter]] (SC): Edge apps will provide many out-of-the-box capabilities to understand process performance, with much higher data rate than OPC-UA; discussed time alignment/syncing of data streams and hardware robustness/speed of data exchange.
- [[Harry B]] asked what the aim of "closed-loop" is - [[Donka N]] answered: validation of part conformity, moving from a 3-step to a 1-step process; RR fixed processes have all variables fixed where possible, but RR's processes are moving towards variable processes allowing small in-process changes to ensure conformance - can sensor data give confidence the part is correct? Output needs to indicate part quality, not just be a dataset.
- [[Harry B]]: projects feeding in include the Tool Tip project and S-RAS (EPSRC).
- [[Steve Carter]]: understanding of Edge capability (obj 1.3.1) - testing the pedigree of these tools; correlation of sensor data to the Sinumerik Edge device. Need to check with Dynamics on the spec of the Edge system being procured and cloud connectivity. Three connectivity routes for 840D discussed: OPC (some data), direct cloud connection (a little more), and Edge (much more data at higher rates).
- [[Donka N]]: much of the discussed tech already exists on AMRC/RR roadmaps and has done for a while - need to start working with it and demonstrating capability rather than starting from ground zero each time.
- [[Harry B]]: review other Edge device options, not just Siemens controllers/devices.
- [[Donka N]]: proposed a matrix of sensors capturing what each is, why it's monitored, spec, relationship to KPVs, connectivity/DAQ, and correlation to other sensors.
- [[Arthur Smith]]: how much data should be collected before allowing a system to take control? [[Donka N]] noted large components might need ~10 before a process is agreed fixed, smaller components (blades) potentially ~300.
- [[Vicky S]]: suggested planning in an RR-applicable use case for this work.
- [[JS]]: would be useful to have a list of KPVs that RR work with - [[Chris Taylor]] might have access; possibly [[Dave Curtis]] for Grinding (though not directly applicable); relevant to Rotatives and Casings.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Arthur Smith]] - (Check if RR's Hermle test component can be used by AMRC)
- [[JS]] - (Follow up with [[Chris Taylor]] / [[Dave Curtis]] on RR's list of KPVs)
