---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-25T00:00:00
---

## Summary

> [!info] Why is this resource worth keeping?
> Troubleshooting notes (2 November 2021) on recurring issues encountered with SINUMERIK Edge data capture.

- ...

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

- "Red screen of death" (404) — occurs on config errors, but also seemingly at random.
- Exceeding the variable limit results in no data being captured.
- Wanted: a quick-view plot of data streams for a first look before a deeper dive.
- Considered running their own Docker containers.
- AMW4Analysis lets you check a box to download multiple files at once.
- Data capture sometimes fails to start/stop with no indication why; downloads sometimes fail with no reason given.
- JSON files are unwieldy.
- Timestamps appear in three different timezones with no clear explanation — e.g. last-job-run time vs. data file timestamp can differ by an hour.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- [[SINUMERIK Edge Devices]]
- [[SINUMERIK Edge JSON Format]]
