---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-25T00:00:00
---

## Summary

> [!info] Why is this resource worth keeping?
> Handwritten notes (2 September 2014) sketching out the architecture for a Python-based FOCAS data-collection tool for AMRC machine tools — an early design for real-time data capture and CSV logging.

- ...

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

- Considered running **four separate programs**, so the only thing that needs changing per file is the IP address.
- **Checking machine status:** try to get a handle on the machine every 5 seconds; real-time data collection runs in a loop within a loop.
- **Real-time data:** collect every 100ms; if machine mode is 1 (memory) and a program has started, collect to a CSV file (separate file per machine) capturing timestamp, machine mode (AUT), run, motion, alarm, power, feed, speed.
- MDI mode: could check if the "motion" parameter == 1 to infer the machine is doing something.
- **Writing to file:** separate CSV files, possibly one per project — considered inspecting the NC file and using flags so the loop exits/restarts cleanly if the NC program reloads.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- ...
