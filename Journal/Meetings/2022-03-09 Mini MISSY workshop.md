---
date: 2022-03-09
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[JS]], [[Adam B]], [[Jodie G]], [[Faris Nafiah]]
- R-R: [[Jamie McGourlay]], [[Steven Carter]], [[Steven Halliday]], [[Donka Novovic]], [[Megan Creswick]]
- AFRC: [[May Hicks]], [[Andy Hamilton]]

## Purpose

> [!info] Why did this meeting happen?
> Mini MISSY project workshop covering feedback on prior working practices, data usage/security, and technical review of chatter-related findings.

- Review actions from the last meeting, discuss data usage/security for the Turing DSG, and dig into root cause analysis findings from the MISSY project.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Actions/feedback from last meeting:
  - [[Jodie G]] fed back that R-R could have held many discussions internally before involving AMRC, rather than using AMRC meetings to gather R-R's own internal requirements - this fell outside budget scope and was non-value-added for AMRC.
  - R-R encouraged to rein in expectations for the size of budget involved (£15k for a data review package and supporting data capture is small).
  - The 3-way relationship between AMRC, R-R and Siemens could have been better managed - R-R didn't fully appreciate that Siemens were providing equipment and support FOC, so AMRC wasn't top of Siemens' priority list; R-R would have needed to push harder with Siemens for that.
- Data usage (assuming no barriers): Turing Data Study Group planned around September, already using this data to prepare, with the 3 parts showing unexpected behaviour raised as an explicit challenge feature. Also referenced: AMRC Data Cloud.
- [[Jamie McGourlay]] gave a project update: MUSIC to reach final definition in the next couple of months, start date around October 2022. Benefits case still needs definition - tricky for this project. R-R has an internal deadline of 24th March to convince manufacturing leads the work should proceed. Assembly and Test group's balancing processes might benefit from MISSY work/output.
- Root cause analysis - 3 parts exhibited chatter:
  - [[Jamie McGourlay]] questioned whether the data has been explored enough to find indicators of what was happening on those parts.
  - [[Adam B]]: controller data is too low frequency to pick up chatter, which shows up at a few kHz; also questioned whether it was chatter at all, versus force vibration etc.
  - BoB vs. WoW (best of best vs. worst of worst) comparison discussed.
  - [[Megan Creswick]] raised concern that none of the data picked up the machining defects, which undermines the point of the work.
  - [[Andy Hamilton]] asked whether R-R have data analysis methods/tools they could share to give better guidance in future - depends heavily on the challenge.
- Turing DSG considerations:
  - [[Donka Novovic]] raised data security questions: storage location, access, UK-based hosting, security clearances, and what can happen to the data afterwards - Iranian nationals flagged as a particular concern.
  - Agreed there should be no mention of R-R in the challenge itself.
  - [[Steven Halliday]] to be kept in the loop.
  - [[Andy Hamilton]] asked how much IP restriction applies given it's not an R-R product; [[Donka Novovic]] raised export control concerns; [[Jamie McGourlay]] noted that since it's not a product or linked to an engine, it would be hard to find the right control mechanism - but the biggest concern is that R-R is linked to the dataset, and that link needs removing.
  - Overall steer: basically a yes, subject to the caveats above.
- NMIS data science school: offer to teach R-R staff, open to industrial partners, access to data is restricted.
- Siemens infrastructure is key - any analytical solutions must be able to fit into a Siemens infrastructure.
- Material for MISSY: Ti 6-4 is the target material; R-R holds a lot of internal knowledge; AMRC has relevant work in this area ([[Pete C]]); TIMET as supplier; crosses OBU boundaries; considered less sensitive than high-value nickel alloys.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Data usage for the Turing DSG is basically approved, subject to caveats: no mention of R-R in the challenge, and the link between R-R and the dataset must be removed.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- AMRC team - (Ensure no mention of [[R-R]] appears anywhere in the Turing DSG challenge materials).
- AMRC team - (Remove the link between [[R-R]] and the dataset before it's used in the DSG).
