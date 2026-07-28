---
date: 2019-01-17
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[Gavin]], [[JS]], [[Tom H]], [[Kieran]]
- Lisi: [[Onrej Polak]] (Process Dev Manager), [[Jock Hill]] (General Manager), [[Gerard]] (IT? director), [[Jean-Philippe Grace]] (Fasteners Manager), [[Jim Adamson]] (Local IT services delivery), [[Krzysztof Dec]] (Digitalisation Engineer)

## Purpose

> [!info] Why did this meeting happen?
> A site visit/review meeting with Lisi to discuss progress from Phase 1 of their smart factory work and to down-select technologies to take forward into Stages 2-4 (smart ecosystem, smart machines, prototype line/ATI bid).

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

*(Note: page 6 of the source interleaves two columns - the main meeting notes and a side column covering funding/KPI notes. Reconstructed below on a best-effort basis; ordering of the side-column items relative to the main notes is uncertain.)*

- [[Onrej Polak]] overview of Phase 1:
	- Aim for the day was to discuss down-selection of technologies to take forward.
	- Stage 2 - Smart ecosystem; Stage 3 - Smart machines (target completion for both: end of 2020); Stage 4 - prototype line, possible ATI bid.
- Side-column notes on funding/KPIs:
	- Eligibility for funding based on company ownership/country?
	- Timescale - working prototype by end of 2020; need to get on top of the funding application.
	- KPIs: reduce number of operators on the line (22 down to 8 over 4 shifts); reduce scrap (3/16" line, £200k of scrap/attrition); tooling costs (Pareto analysis shows most cost comes from 20% of tools).
- [[GH]] summary of what AMRC delivered in Phase 1, including funding timeframes.
- [[Gerard]] - Marmande site development: 6-month data capture trial, monitoring everything on the line (machine and process data), using Braincube to analyse the data. Able to correlate errors in the final product with issues on the line; scrappage significantly reduced. ML to be used in future for predictive work.
- Smart factory presentation - [[Onrej Polak]] & [[Krzysztof Dec]]:
	- Market analysis: [[Onrej Polak]] proposed a separate grinding cell to support the smart line, since grinding is complex and a significant cost driver; main line to focus on parts that don't need grinding (forge-to-size parts).
	- [[Krzysztof Dec]]: mapping operator daily tasks on the small diameter (SD) line via a time-and-motion study to inform investment decisions; data capture starting the following week for 16 days, day shift only, using a Google Play app.
	- Monitoring machine behaviour: Raspberry Pi solution (Smarti Pi touchscreen, Node-RED programming, PiFace Digital 2 board) to monitor parts produced and capture operator-input downtime reasons; linked to relays so the process cannot continue unless a reason is logged.
		- [[Gerard]]: important to "monitor machine and operator behaviour"; MQTT broker communicating with barcode scan RPi devices (one scanner currently serves more than one machine - [[Gerard]] proposed additional scanners, one per machine, to reduce operator movement).
		- Potential to add sensors later to bring process monitoring into the data capture (planned before end of year). 16 machines in total on the SD 3/16" line to be monitored.
		- [[Gerard]]: important to link monitoring to process outputs - impact on product quality.
- Down-selection of GBB solutions (Lisi had categorised a list ready for discussion):
	- Automated route scheduling for new parts - adapts/re-routes based on machine availability changes. [[Gerard]]: exists as standard in most MES; effort needed to link to ERP systems. [[Krzysztof Dec]]: digital twin would improve the solution. Not to be implemented before 2020.
	- Connectivity/DA - core to near-future work; standard connection interface and retrofit of sensors (some work already done at the Turkey site). Expandable/modular DAQ system; standard IoT broker (e.g. ATS Bus, Kepware, MQTT); OPC-UA desirable for the future.
	- Coolant and process condition monitoring - central coolant management; time-and-motion study plus machine data capture will inform its validity.
	- Database - standardised approach essential; Marmande work can inform this.
	- DES - direct link from MES to DES model with real-time update; desire for an in-house-updatable model rather than a bespoke solution only updatable by the creator/external expert.
	- Digital twin - more discussion needed; different parties have different expectations of what this should be (MES-DES link through to process-level simulations).
	- Enterprise Architecture - a "rule book" dictating how assets connect, pass data and interact, to allow easier integration of new assets.
	- Foreign part detection - includes sorting parts at line start (diameter, length, head type, or foreign part). Vision system could do all of this including measurement, but there's a question of whether a simpler solution (e.g. mass detection) would suffice if only foreign-part detection is needed. [[TH]]/Tom H and [[Kieran]] raised concern about complexity/cost of a vision system vs. benefit; suggested semi-automating current inspection methods.
	- Machine learning - desire to have this by 2020 for machine tool understanding, including whole-line ML to understand fault implications along the line.
	- Paperless - value of paperless questioned; time-and-motion study to inform how much time is spent on paperwork. Reservations around electronic sign-off/RFID abuse; HMI with e-doc access seen as essential. Bucket-tagging idea (only verified-good-part buckets allowed to enter a machine).
	- Set-up assistant - essential; machine presetting should be automated, or manual setting values captured/stored (speeds and feeds). Desire for smart machines to self-reference/recalibrate. Current machines need a solution to capture set-up data; new machines should be specified with auto set-up capability. Load increase due to poor set-up to be monitored; currently no feedback from dials used to adjust dies/rollers etc.
	- Tool monitoring - logging of tool failure (how/when); tool identification linked to machine data; data to show tool suppliers the process didn't change and highlight failures to them; RFID for tool tracking/tool life.
	- Visualisation - 3D model of shop floor/new line to let stakeholders see what it will look like; data flow view; part path. Different to digital twin, though WITNESS/other DES systems can do both.
	- Part transport - pneumatic 1-by-1 solution not suitable; RFID of buckets to guide AGVs to the right place; time-and-motion study to inform importance.
- Where next?
	- ATI bid: EOI for June 2019, full bid evaluation in July, funds released end of year. Need to know what the bid will entail; Stages 2 and 3 need output to influence the bid, and should run concurrently to allow a strong bid by May/June.
	- Lisi team to review the down-selection and rationalise, then bounce back to AMRC to advise/check, with continuous communication.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Stages 2 and 3 will run concurrently to allow a strong ATI bid by May/June.
- GBB technology down-selection not to be implemented before 2020 for the automated route scheduling item.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- [[Lisi team]] - (Review the down-selection of GBB solutions and rationalise, then bounce back to AMRC for advice/check)
