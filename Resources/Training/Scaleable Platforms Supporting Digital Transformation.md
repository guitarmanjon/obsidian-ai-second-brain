---
source:
tags:
  - Resource
  - Cloud
last updated: 2026-07-25T00:00:00
---

## Summary

> [!info] Why is this resource worth keeping?
> Session by Drew Silcock (STFC Hartree Centre), 04 February 2025, walking through why scalable platforms matter for digital transformation. Uses a worked "waste management company" example to show a platform maturity progression (paper → spreadsheets → on-premise app → managed cloud services), a real-world scalability failure (NHS Test & Trace), and a tour of cloud service categories (infrastructure, database/storage, AI/ML, IoT, streaming, HPC) that underpin modern scalable platforms.

- Useful as a reference for explaining *why* cloud/managed platforms matter to non-technical stakeholders, using the pets vs. cattle and Test & Trace analogies.

## Key Takeaways

> [!tip] The essential insights from this resource
> Distill the most important points. What would you want to remember if you came back to this in 6 months? Use progressive summarization, bold the critical phrases.

- **Platform maturity progression (worked example: waste management company)**:
  - **Step 0 – current "platforms"**: multiple non-standardised, inefficient paper documents; data not integrated/unified; no capability for analysis/insight; not AI-ready; data loss very likely; **not scalable**.
  - **Step 1 – digitalising**: moved to spreadsheets; still non-standardised and inefficient; data still not integrated; only very limited analysis capability; not AI-ready; data loss still likely; **not much more scalable**. Still issues with incompatibility between spreadsheets and disparate data sources.
  - **Step 2 – on-premise app**: single standardised, efficient platform; data more integrated; some more analysis/insight capability; not yet AI-ready; data loss less likely but no replication/failover/backup; **more scalable**, but not ideal.
  - **Step 3 – managed cloud services**: single standardised and efficient platform; all data integrated and unified in the cloud; capability for maximum analysis/insight; **fully AI-ready**; data loss highly unlikely; **extremely scalable**.
- **What makes a platform scalable?** Key questions: if company size/customer base grows 10x overnight, can the platform handle it? How many concurrent users can it support? What happens when something goes wrong — data loss, database overload, computers/network going down?
- **Test & Trace example (scalability failure)**: Public Health England (PHE) received CSV uploads from swab analysis firms and used XLS to convert them to a standard format. The file format was limited to **65,536 rows**. In 2020, when tracing volumes suddenly exceeded this, PHE **lost 15,841 cases** and **approximately 50,000 contacts were not told to isolate**. Takeaway: **it is the least scalable part of the system that becomes the limitation** for the whole system.
- **Pets vs. cattle analogy**: "Pets" = a desktop in the office — expensive, updated, gets individual care and attention, but is a single point of failure. "Cattle" = defining resources for a machine/platform so it can be easily duplicated, with no individual care for a single instance — this is the cloud/infrastructure-as-code approach.
- **Cloud infrastructure**: the cloud vendor handles hardware, failover, and networking; can elastically scale **horizontally and vertically**; reproducible via **infrastructure as code**; resilient to data loss/downtime. (Slide showed AWS, Microsoft Azure, Google Cloud logos.)
- **Self-managed cloud vs. managed cloud services**: with managed cloud services, the vendor additionally handles infrastructure, maintenance, and monitoring, provides **SLA uptime guarantees**, and offers **elastic/automatic scaling** — vendors chain together IoT, databases & data storage, AI/ML, data/video streaming, and data querying/processing/analytics.
- **Cloud database and data storage platforms**: fully managed high-availability databases, vertical/horizontal database scaling, cheap massively scalable object storage, very high SLA guarantees, intelligent security features. Examples: Azure SQL Database/Amazon RDS; **Azure Cosmos DB / Amazon DynamoDB — document storage**; Azure Storage Accounts/Amazon S3 — object storage.
- **Cloud AI/ML platforms**: elastically spin up compute for data analysis, managed ML research environments, many off-the-shelf AI tools, query/process big data, automated machine learning, model deployment and tracking. Examples: BigQuery, Amazon SageMaker, Watson Machine Learning, Google Vertex AI, Azure Machine Learning.
- **Cloud IoT platforms**: device provisioning, data ingestion, device authentication, edge compute, over-the-air updates, security monitoring and hardening. Examples: Cisco, Azure IoT Hub, portainer.io, AWS IoT, ThingsBoard, Particle.
- **Cloud data streaming and processing platforms**: pay only for what you use (cost efficient); scale elastically from 0 up to millions of events/second; drive real-time analytics with extremely low latency; fully integrated with AI services; much lower total cost of ownership; support real-time and batch processing.
- **High Performance Compute (HPC)**: traditionally done on-premise. Cloud provides economies of scale — pay for what you need (**OpEx, not CapEx**) — though **GPUs are still expensive on cloud**. Can also pay per node-hour at HPC facilities. Example uses: ML model training, molecular simulations, fluid simulations.
- **Digital transformation (DT) defined**: "Digital transformation is the ability to adopt and apply technologies to continuously evolve and reinvent how a company operates and delivers value to customers."
- **How scalable platforms enable DT**: real-time insights from large volumes of data from different sources; simple AI/ML integration; enable digital flexibility; large CapEx buy-in not required; lower technical barrier to entry and total cost of ownership; easily scale up and down based on demand — makes transitioning cheaper and easier.
- **Fully cloud-native example ("Barone San." — waste/vehicle fleet company)**: track vehicle location (dynamic re-routing based on traffic/accidents/roadwork; analyse slow zones and re-plan routes); monitor driving behaviour (optimise safety; detect rash/distracted driving); monitor emissions (more environmentally friendly routes/driving); monitor vehicle condition (predictive maintenance).
- Several pages included slide screenshots (platform-maturity diagrams for Steps 0–3, cloud vendor/service logo grids, the DT definition graphic, and the Barone San. fleet-monitoring diagram) with little additional typed commentary beyond what's captured above.

## See Also

> [!tip] Related links
> Link to related Areas `[[Area Name]]`, Techniques `[[Technique Name]]`, or other Resources.

- ...
