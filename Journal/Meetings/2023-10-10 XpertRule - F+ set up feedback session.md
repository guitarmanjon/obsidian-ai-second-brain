---
date: 2023-10-10
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Iain Crosley]]
- [[Darren Falconer]]
- [[JS]]
- [[Jon H]]

## Purpose

- Feedback session with XpertRule (XR) on their experience setting up Factory+ as part of onboarding a new colleague.

## Key Discussion Points

- New colleague [[Eric Daub|Eric]] at XR looking at Factory+ (or "Smart Factory" as [[Iain Crosley]] calls it) as part of onboarding.
- [[Darren Falconer]] summarised [[Eric Daub|Eric]]'s experience setting up Factory+ for XR:
  - [[Eric Daub|Eric]] spun up F+ management on an AWS virtual machine.
  - Some feedback that documentation is missing bits for setting up DNS.
  - Issues with a temp sensor - DMP wouldn't accept the number entered by XR, appeared to be treating it as a string.
    - Some issues with Eng Low on the schema for the temp sensor (demoed live).
  - Question: can another schema be added to a Device? Answer: no - would need to create an array of sensors instead.
  - Question raised over whether individual company sites/plants would have their own F+ instance, or whether there could be a central instance across sites.
- [[Darren Falconer]] drew parallels between XF and Factory+.
- Discussion around setting up IPCs - AMRC relies heavily on its IT team for new IPCs and VMs, which is why AMRC hasn't seen the same DNS issues.

## Decisions

- No individual F+ instance per site decided - array of sensors is the workaround rather than adding another schema to a single Device.

## Action Items

- None recorded.
