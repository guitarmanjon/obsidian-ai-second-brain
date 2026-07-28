---
date: 2026-07-21
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[JS]], [[GL]], [[SM]], [[Emlo]] (?), [[Zohaib]], [[Richard J]], [[Pritesh]] (?)
- Airbus: [[Paul Blatch]] (?), [[Amar Liaqat]], [[Mark]] (Design to Manufacture), [[Andy Cain]], [[Triston]] (?), [[Matthew Duckworth]]

Note: some proper nouns and acronyms in the original handwritten source were hard to read - these are marked (?) throughout, with best-guess transcriptions kept as written.

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- AMRC site visit to Airbus, covering their digital/PLM systems and connected-assets work across A350 and single-aisle production.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

**A350 North - Redesign / Mod Process**
- A350 under constant redesign, e.g. UKR (?).
- [[Mark]] gave an overview of the process: **ACP** (everything goes into this system - tied system, costs etc.) → **ACC** (MP - Mod Proposal) → **CR** - Change Request (ACC - Aircraft Central Config) → APS drives change into **Delmia** (?). Goes through various other systems to drive manufacturing change, including **SAP**.
- **Skywise** (?) used for referencing - many systems driven by the dataset; systems on top allow data to be made for each aircraft produced → traceability → EASA audits. Data lake solution: **Palantir**.
- Design changes happen all the time - some result in In-Service Bulletins requiring aircraft servicing to implement. (Noted in the moment: "why are we seeing this??")
- Some changes done at Broughton, some done in Bremen, Toulouse etc.
- [[Paul Blatch]] (?): "We're showing you this so you can see we're already digitised" - automated backend systems rather than previously manual lists, so people can focus on actioning change.
- Lots of ACC acronyms and assumptions made in these conversations.
- Design drives everything - changes cannot be actioned the other way.
- What's being shown is the benchmark, for A350 - single aisle has more complexity and Airbus are trying to bring it into line. Amount of data is huge, so updates only run twice per week.

**System / SAP notes**
- System likely developed by a 3rd-party contractor out of Toulouse.
- SAP - one system, many interfaces. Remembering transaction codes is a challenge.
- Lots of repetition of effort, it seems.
- SAP dev environment exists for staff to experiment.
- **CVAT** (?) - Customer Value-Added Time.
- All these systems exist because of ongoing development, but nothing is properly matured/embedded (?).
- SAP as a single system would lose a lot of challenges/functionality (?) - currently there are many independent systems, allowing room for collaboration.

**Operator's Viewpoint - [[Nick]] (?)**
- ACP is the primary tool + SAP.
- ACP etc. also link into "third parties" - i.e. Supply Chain, Sprint, GKN.
- Some parts are outsourced, e.g. standard brackets. Critical "Class 1" parts are fully traced.
- **CAIR** - Contract Airworthiness Inspection Records (?). **AIR** - Aircraft Inspection Record.
- Systems are structured around how processes have developed - doesn't mean the data is structured in a useful way.
- [[Paul Blatch]] (?) is currently building an ontology & taxonomy, with [[Jim Eyre]].
- SAP transaction codes are basically different ways of looking at the same data.
- Measurement data feeds the machining of facing components at **FAL** (Final Assembly Line), so the fit is flush.
- **ACPub** - Aircraft Progress (?) (next gen?).
- A wing will start with ~1000s (?) of "to-do" items that get ticked off as it progresses. MES on shop floor checks items; low operator interaction with MES.
- Side note: critical knowledge capture occurs when people retire who have critical experience.

**ARP - [[Rob]] + [[Owens]]/[[Nick]]**
- [[Nick]] - 40 years at Airbus.
- Airbus Resource Planning - **ARP**. Single aisle focus.
- Re-"tooling" - the digital backbone for single aisle production. Started in 2018. First metal to be cut with the new system this year (or next year?).
- A lot of new products, incl. pylons (?), hubs, undercarriages (?) etc.
- People are key to the toolkit.
- Transition has included dual PLM while the new system is spun up and the old is decommissioned.
- [[Rob]] gave an overview of benefits & constraints: product, process, design, industrial agreements etc. will not change - just get a more robust and modern digital system.
- UK is playing catch-up to European colleagues.
- 2027 will be about change - training, onboarding.
- Single aisle is very paper-based, driven by 2D design (vs. A350, which is 3D & digital).

**[[Robert Whiffen]] (?) - Connected Assets**
- "Digital Alchemy" - drawn up in Germany? With a Hamburg demo.
- Ambition/vision has nothing new: automating processes that are currently manual; connectivity is key; AMRs; "pull" production flow based on data captured.
- Assets are predominantly hand tools. Each tool has its own supplier protocol for connectivity - Airbus tried developing a common chip that suppliers had to use for any tool sold to Airbus, which didn't work out; now Airbus deal with the various protocols, maintaining the connection software.
- 5-step implementation: Standalone ↔ Asset ↔ Process ↔ Process ↔ Digital Twin (Connectivity → Monitoring → Control → Digital Twin).

**SAP Hanach? (latest version?) (?)**
- Connectivity/Digital Alchemy is difficult to secure funding for because the ROI is not clear.
- Project with [[Waldo Hutchinson]] (?) at the UK site successfully deployed under Data Analytics / "Process Control".
- Local adoption is a challenge due to maturity + SAM (?).
- **Edge Architecture**: INDUS Enclave for Edge Docker stack. Overall architecture looks similar to [unclear - noted in the source as "f+"]. Geolocation is causing issues due to latency - has led to quality challenges.
- Adoption is a challenge - when the systems don't work, operators lose faith, which makes further trials/implementation start on the back foot.
- Compartmentalisation of data - everyone sees the same data through a different view. E.g. 5 different ways of describing the same tool. People copy data from the master, leading to incorrect data.

**Discussion**
- MTS being updated - internal Airbus development team.
- SAP 4/HANA (S4) will be used on single aisle production - it is a PLM system.
- [[Paul Blatch]] (?) wants to learn more about ontologies - everyone is looking at the same data but in different ways.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
