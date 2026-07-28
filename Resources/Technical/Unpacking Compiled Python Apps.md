---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-25T00:00:00
---

## Summary

> [!info] Why is this resource worth keeping?
> Reference notes (4 August 2021) on reverse-engineering a compiled Python application back to readable source.

- ...

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

- Use `pyinstxtractor` to unpack the compiled application — need to know the original Python version, otherwise errors occur. https://github.com/extremecoders-re/pyinstxtractor
- Decompile the resulting `.pyc` files with `uncompyle6`: https://github.com/rocky/python-uncompyle6
- Output is `.py` files that can then be viewed and edited.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- ...
