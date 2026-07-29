---
date: 2021-11-16
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]]
- [[Nat]]

## Purpose

- [[JS]]'s prepared list of SINUMERIK Edge product feedback points to raise with [[Siemens]] via a Teams call.

## Key Discussion Points

- Data capture: Job Manager is easy to use and well received by those shown it. Device gives no warning when it will fail to capture data due to too many HF variables in the config file - it simply doesn't capture. Data capture has been seen to start/stop unexpectedly when using triggers, possibly caused by network interrupts.
- Data management: downloading files via the software interface is a big improvement over the old POST/Postman method, but downloading multiple files is slow - e.g. a recent trial needed 13 NC files, 18 parts, 3 clicks per data file, over 700 clicks total. Suggested checkbox-based multi-file download. Occasional "failed to download" errors with no explanation, sometimes persistent, sometimes self-resolving. Downloaded JSON files can be very large and hard to view in Notepad/VS, with poor formatting - asked for recommended JSON viewers or better formatting.
- General: 404 errors occur randomly, seen by both AMRC and the [[Boeing]] team - possibly linked to a software update and a config file error ([[Nat]] knows more). Requested a "data quick view" feature to quickly plot HF data via the Edge device itself. Timestamps are inconsistent - job runs and data files often differ by 1 hour. Asked whether AMRC could run their own Docker containers in future, to allow streaming translated to [[MQTT]].

## Decisions

- None recorded - this was a list of feedback items raised with [[Siemens]] rather than agreed decisions.

## Action Items

- [[Nat]] - (Follow up on cause of 404 errors linked to software update/config file issue)
