---
date: 2019-10-16
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]]
- [[Harry B]]
- [[Rui Morreira]] - Boeing Europe

## Purpose

- Call with [[Rui Morreira]] from Boeing Europe to discuss IO-Link as a solution for digitising machine monitoring and to scope a possible joint trial at AMRC.

## Key Discussion Points

Note: this page's text was heavily interleaved from a two-column layout (live notes vs. a cleaner "Summary" recap). The write-up below follows the Summary column, with extra detail pulled in from the raw notes column where the summary didn't cover it.

**Summary (from the page's own recap):**
- IO-Link has been identified as a key solution for digitising existing monitoring challenges.
- Eight use cases have been identified at the BCA facility in Seattle. [[Rui Morreira]] to share slides with an overview, when/if approved.
- Two priority use cases:
  - Hydraulic pump — monitoring is currently manual and involves climbing a ladder to listen to the pump; vibration and acoustic emission monitoring are of interest.
  - Hold-down vacuum — monitoring interest is in flow rate, power, vacuum pressure, pump health, and system capacity.
- Boeing would like AMRC to test a simple IO-Link system by piggy-backing on an existing project (Full Monty ABG or OWA).
  - A simplified system could be an IO-Link master with 2-3 representative sensors.
  - Linking in with Full Monty could allow comparison of IO-Link sensor performance against embedded sensors.
  - Comtrol IO-Link master would be the preference, as it has native OPC-UA capability.
  - Getting data into a simple Apriso dashboard is desirable — there is already familiarity with Apriso in BCA, which would facilitate adoption; Machine Integrator can be used to get OPC-UA data streams (and others) into Apriso.
  - Work instructions on how to use the IO-Link solution are also a desirable outcome, and could also be done through Apriso.
- [[Rui Morreira]] will make introductions between AMRC and key Boeing contacts ([[Paul Davies]], [[Gary Hilton]]) to allow progress — note that RM will shortly be leaving Boeing.

**Additional detail from the raw notes (not in the summary):**
- Prior discussion point flagged for follow-up: OWA/One-up discussion — how did this go with [[Ryan Hanks]]?
- [[Rui Morreira]]'s intro: Boeing Sheffield is supposed to be the flagship Industry 4.0 facility; VPs visiting in May were introduced to IO-Link and were very impressed, and now want to implement it — but Boeing Sheffield is not yet fully digital.
- OPC-UA on machine tools: WFL M30 uses an S7-300 PLC where OPC-UA isn't part of the controller, but WFL have an embedded PC that provides OPC as well.
- Apriso — [[Rui Morreira]]'s understanding is that it can connect via OPC as a machine tool integrator; the OPC-UA integrator can act as an integration bus and is compatible with OPC-DA, RS232, Bluetooth, USB, etc. Dassault software is prevalent in Boeing Seattle, which eases adoption.
- IO-Link masters do not have processing capability — more of a data gateway.
- IO-Link for Legacy LTP also discussed.
- [[Rui Morreira]] is leaving Boeing shortly to head back to Portugal; will pass on contacts. [[Paul Davies]] is the key contact and is very interested in IO-Link, wanting to see it happen in Seattle. [[Gary Hilton]] from Boeing UK also flagged.

## Decisions

- Boeing and AMRC agreed in principle to trial a simplified IO-Link system, piggy-backing on an existing project (Full Monty ABG or OWA), preferring a Comtrol IO-Link master for its native OPC-UA capability.

## Action Items

- [[JS]] - (Liaise with [[Harry B]] on scope for the IO-Link trial)
- [[JS]] - (Cost the IO-Link trial)
- [[JS]] - (Add the IO-Link trial into the ABG statement of work)
- [[Rui Morreira]] - (Share BCA use-case slides with AMRC, when/if approved)
- [[Rui Morreira]] - (Make introductions between AMRC and [[Paul Davies]] / [[Gary Hilton]] at Boeing before leaving)
