---
date: 2020-12-03
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[Derry Falkner]]
- [[Mark Stocker]]

## Purpose

> [!info] Why did this meeting happen?
> A technical discussion with Fives Landis about their in-house CNC control system (OpenCNC), exploring the potential for open-sourcing/collaboration and a possible AMRC/university consortium project.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later. (Dense technical dump - presented as a bulleted list rather than forced narrative.)

- Fives make their own control system, giving them the flexibility to do what they need to.
- Can see the benefit of the control system to a wider audience:
  - Give UK manufacturers opportunities to delve into the heart of the control system.
  - Allow software teams to work with the core of the control.
  - Open-sourcing control software with core IP removed.
  - Delta Tau controller - open source controller in the US, used across universities and research centres, becoming embedded in machine tools now.
  - History of development with Cranfield Precision, back to 1972, including hardware development.
- Developed their own controller as Siemens, Fanuc, etc. struggle with the applications Fives Landis target.
- Real-time kinematic calculations in the clock so the machine can be programmed as an orthogonal machine.
  - Machine demoed during the MTA session - twin rotary tables.
  - Millisecond clock cycle - benefit to near real-time control?
- Data streaming is easily doable.
- Some machines have a 10nm "following error".
- Machines with Landis components use a Delta Tau controller.
- Modern controller (CNC6400) is PC-based - can run on a standard desktop PC.
  - PCI Express slots for circos interface to Bosch drives, and Field Bus (Profibus/Profinet currently supported; Ethernet, Profidrive coming in future).
  - Core of control is written in C - looking to open source through AMPI collaboration.
- Logging:
  - Over 100 channels.
  - Logs for the last 1000 components kept on the machine.
  - Clock rate - 1 millisecond.
  - OPC-UA built in.
- RS274 (G-code) programming not used - too limited for what their machines do.
  - Post-processing? - they have their own part programming tool.
- KTP definitely an option to get new blood into them.
- Interval Zero - provides RTX.
- NC Exec does calculations at 1000/2000 Hz.
- ISAGRAF - £50 license - interacts with PLC? IEC61131 standard.
- SERCOS - hardware interface to drives.
- Most is already open. Looking to open up NC Exec/Core to allow users to put their own programs in there.
- Parameter driver part program editor.
- Demand modifier - can change what an axis is doing, depending on input to the modifier.
- Big Data opportunity - 1 kHz sample rate.
- Performance log viewer, including FFT capability built in.
- AI used to profile cam - AI determined the velocity at which the cam rotated, and AI modification of workspeeds.
- Writing of real-time code is a big win for Landis - having this capability in the UK is a missing skill.
- [[Rob Ward]] EngD??
- Idea: build an AMRC CNC with Landis OpenCNC control, incorporating all of the research activities at AMRC.
  - Open platform to try to control mechanisms.
  - Fits with the idea that the UK should be developing its own machine tools.
  - Possible consortium: Landis, Huddersfield?, TUoS, AMRC.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
