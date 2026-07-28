---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-25T00:00:00
---

## Summary

- ...

## Key Takeaways

- **Header dict:** `SignalListHFData` (list of high-frequency streams, each `{'Name','Type','Axis','Address'}`); `SignalListLFData` (list of low-frequency stream addresses, e.g. `/Channel/Spindle/speedOvr`, each item `{'id','device','path','samplingPeriod'}`); `TimeStamp` gives the machining process start time.
- **Payload dict keys:** `HFCallEvent` (subroutine call path); `HFBlockEvent` (dict incl. ActiveTool, Channel, GCode, HFProbeCounter, IpoGC, ipoReadError, laBuf, SeekOffset, SelectedTool — several fields marked "not clear"/"not useful"); `LFData` (list, size varies with sampling rate); `HFData` (list of lists matching `SignalListHFData` order).
- **Extraction plan:** HF data is the most straightforward since each sample is a fixed size. Considered joining GCode into the HF table (accepting repeats), but only pulling GCode belonging to the main NC file — matched by parsing the NC file reference out of the JSON filename (up to the 3rd underscore) and checking `HFCallEvent`'s Path against it before pulling GCode from `HFBlockEvent`.

## See Also

- [[SINUMERIK Edge Devices]]
- [[SINUMERIK Edge Issues]]
