---
date: 2026-07-14
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Amir]], [[Rob Skilton]] (UKAEA, robotics), [[Jon Stammers]], [[Sam Carter]] (PhD student)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Feedback session on [[Sam Carter]]'s literature review presentation on remote handling/teleoperation for robotics in fusion engineering, and discussion of next steps for collaboration with UKAEA.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Intros: [[Rob Skilton]] - UKAEA, Lead on Robotics for remote maintenance, particularly liaising with low-TRL research & universities, 14 years at UKAEA. [[Amir]] - plenty of experience in remote robotics. [[Sam Carter]] - 4th year PhD, casual worker role at the moment looking at robotics in advanced manufacturing for nuclear fusion.
- Sam's lit review presentation: "Remote Handling - From Teleoperation to Shared Control". Video demo of teleoperation using a mobile phone motion sensor, developed by Sam himself - noticeable that he had to look at the phone a lot when pressing buttons, raising a question on haptic feedback of controllers.
- MASCOT used in JET - human control of a teleoperation system, with feedback to the human through the controllers so the person can tell if the robot is gripping.
- Bottlenecks in teleoperation are caused by the human - attention, precision, slowness, high workload.
- Shared control - human specifies the intended movement, robot assists with the precise execution. Demo shown of shared control - open question on whether there's a risk from not having haptic feedback from the robot, or whether that's even a requirement.
- Discussion: [[Amir]]'s research on predictive robotics/robot path planning. Haptic feedback - the JET system doesn't have fingertip tactile feedback but does feed back gripper state; new tech uses gloves that inflate air chambers to give haptic feedback across the hand. Shared control would likely still retain some haptic feedback, keeping the human in the loop in a supervisory capacity.
- [[Rob Skilton]]: tactile and haptic feedback are very relevant to nuclear tasks, particularly for reinforcement learning tasks. STEP hasn't really considered the dexterity requirement needed for dismantling and disposal of hazardous parts. World models for contact-rich manipulation tasks could be used to train control strategies with context, helping train for robot dexterity.
- What next: possible workshop. [[Rob Skilton]] offered to host a visit to UKAEA to see some of the challenges in person, alongside a workshop - covering dexterous manipulation and COMPASS (robotic handling of large flexible components), with opportunities around COMPASS handling, SMR, interoperability, and data handling. Teleoperation and haptic guidance is a well-established need already; research is perhaps more needed in automation/autonomy, with teleoperation as a fallback in abnormal situations. World models for difficult situations and haptics ("contact rich manipulation"). Flexibly deforming objects - UKAEA has some expertise in unknown flexibility of objects; potential to align some COMPASS research here in future, with world models potentially feeding into this too. Focal point for follow-up discussions: world models and analytical models for remote manipulation.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- UKAEA / [[Amir]] - Ask [[SHB]] about robotic manipulation using analytical and world models to train a system.
