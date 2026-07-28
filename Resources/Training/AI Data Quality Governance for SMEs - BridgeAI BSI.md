---
source:
tags:
  - Resource
  - Training
last updated: 2026-07-25T00:00:00
---

## Summary

> [!info] Why is this resource worth keeping?
> Notes from a BridgeAI / BSI (British Standards Institution) training session, "AI Data Quality Governance for SMEs," delivered by Radouane Oudrhiri (07 November 2024). Covers the ISO/IEC 5259 series for data quality in analytics and machine learning, and is useful as a reference framework for governing data as a business asset in AI projects.

- Session presented by Radouane Oudrhiri under the UKRI Innovate UK BridgeAI programme, in partnership with BSI.

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

- **Data are assets** and must be governed as such: they are increasingly easy to collect/digitize, are increasingly important for products and services, are hard to value/price, have a short half-life if not used/shared, present increasing security/privacy risk, and are a significant expense for most enterprises. Data assets are described as "the worst governed, least understood and (generally) the most poorly utilised key asset." (Slide: "7 laws of data asset management", adapted from Moody D., Walsh P. (1999), *Measuring The Value Of Information: An Asset Valuation Approach*, 7th European Conference on Information Systems (ECIS'99).)
- The **ISO/IEC 5259 series** provides a concept framework for data quality (DQ) covering: DQ model, DQ measures, DQ assessment, DQ improvement, and DQ management — plus DQ reporting, DQ governance, and data provenance.
- The **data life cycle model** (derived from ISO/IEC 8183) identifies stages that provide **context** for data quality management processes: idea conception → business requirements → data planning → data acquisition → data preparation → building a model → system deployment → system operation → data decommissioning → system decommissioning, within a boundary of continuous validation and verification.
- The 5259 series has **six parts**, each addressing a different aspect:
  - **5259-1**: Overview, terminology, and examples (terms/definitions, DQ concepts, DQ lifecycle).
  - **5259-2**: Data Quality Measures (DQ model, DQ characteristics, DQ measures).
  - **5259-3**: DQ management requirements and guidelines (quality culture, quality management, competence & resources).
  - **5259-4**: DQ Process Framework (quality planning, evaluation, improvement, validation; model type considerations).
  - **5259-5**: DQ Governance Framework (quality culture, quality management, competence & resources).
  - **5259-6**: DQ Visualization (concepts, frameworks, techniques) — noted as a **working draft, subject to change**.
- **Definition of data quality in AI** (ISO/IEC 5259-1): the "characteristic of data that the data meet the organization's data **requirements** for a specified **context**" — building on the general ISO 8000-2 definition ("degree to which a set of inherent characteristics of data fulfils requirements"). In practice: "Data quality in AI is evaluated based on the organization's contextual requirements, which may differ according to the specific use case or application, particularly in AI implementations."
- Data quality from an AI perspective emphasises: **continuous monitoring and improvement**, **context-specific quality metrics**, **lifecycle integration**, **proactive quality management**, and **feedback loops**.
- **ISO/IEC 5259-2** scope: a data quality model, data quality measures, and guidance on reporting data quality for analytics/ML. A DQ **model** brings together data quality subjects, data quality characteristics, and data quality requirements for the context of use.
- Data quality **characteristics** for analytics/ML (adapted from ISO/IEC 25012) are grouped into: **inherent** (accuracy, completeness, consistency, credibility, currentness), **inherent and system-dependent** (accessibility, compliance, confidentiality, efficiency, precision, traceability, understandability), **system-dependent** (availability, portability, recoverability), and **additional** characteristics (auditability, balance, diversity, effectiveness, identifiability, relevance, representativeness, similarity, timeliness).
- **ISO/IEC 5259-4** establishes common organizational approaches and guidance for the data quality **Process**, covering typical AI approaches (supervised ML, unsupervised ML, semi-supervised ML, reinforcement learning, analytics). It helps users set up, examine, or renew their DQ processes and provides a unified reference for DQ processes including stages, roles, and approaches. It maps processes to the data life cycle for different AI approaches — e.g., for supervised ML, data preparation includes dataset composition, data annotation, data labelling, data quality assessment/improvement, data de-identification, and data encoding. **Example**: a data labelling process (labelling preparation → labelling execution → labelling output) is illustrated to show how quality of labelling is addressed industrially.
- **ISO/IEC 5259-5** provides a data quality **governance framework** for analytics/ML, enabling governing bodies to direct and oversee implementation/operation of DQ measures, management, and related processes with adequate controls throughout the data life cycle. It sits above 5259-1 through 5259-4 (data life cycle model, operational layer, management layer) and connects to broader governance standards (ISO/IEC 38500 IT governance, 38502 framework and model, 38505-1 governance of data, 38507 governance of AI). It does **not** define specific management or process requirements itself (those are in 5259-3 and 5259-4).
- **ISO/IEC 5259-6** (working draft): visualization of data quality is important to understanding data quality; it can be applied across any DQ management process in the data quality management life cycle (DQMLC) — DQ model, DQ measures, DQ assessment, DQ improvement, DQ reporting.
- **5259 Series summary**: data is a very valuable asset for SMEs in all sectors; the series builds upon general-purpose data quality/governance standards (e.g., ISO/IEC 25012, ISO 8000-120, ISO 38501), is applicable to all organizations regardless of type/size/nature (SMEs included), is comprehensive across the entire data lifecycle, and is highly adaptable to an SME's context by its very definition of data quality in AI. Its flexibility lies in the generality of the framework and structure — described as a **"drawer effect."**
- **BSI support - free for SMEs**: current digital standards training available on ISO/IEC 27001:2002 (ISMS) and ISO/IEC 31000:2018 (risk management); future training planned for **Q1 2025** on ISO/IEC 42001 (AI management system), Overview of Trustworthiness in AI (ISO/IEC TR 24028), and Robustness for Neural Networks (ISO/IEC 24029-1:2021 Introduction); plus BSI consultancy services & accreditation for information systems defined in ISO/IEC 27001 and 42001.
- Several pages consisted mainly of pasted slide diagrams (e.g., the detailed "7 laws of data asset management" chart, the ISO/IEC 5259 concept framework table, the data life cycle framework diagram, the 5259-2 process/data model diagrams, the 5259-4 labelling process diagram, and the 5259-5 governance framework diagram) — these are noted here as screenshots rather than transcribed in full visual detail; the surrounding typed notes above capture the substantive points.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- ...
