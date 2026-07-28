---
source: LinkedIn Learning - Microsoft Azure Fundamentals AZ-900 Cert Prep (Microsoft Press, Jim Cheshire course)
tags:
  - Resource
  - Azure
last updated: 2026-07-25T00:00:00
---

## Summary

- ...

## Key Takeaways

**Lesson 1 - Describe Cloud Computing**
- **Cloud computing** = multiple interconnected computers across a network, at a very basic level.
- **Shared Responsibility Model**: you and the cloud provider share responsibility for the applications you run. The balance of responsibility is based on choices made in how you set up and deploy.
- **Cloud deployment models:**
  - **Public cloud** - shared infrastructure provided by a cloud provider.
    - Pros: agility, quick deployment to cloud, easy management, cost control and tracking.
    - Cons: some loss of control and visibility of infrastructure, security/regulatory requirements may not be met, some loss of flexibility, shared infrastructure.
  - **Private cloud** - infrastructure dedicated to a single company.
    - Pros: agility, private network (no sharing), can be used without internet access, can help control costs (no fees as per public cloud).
    - Cons: high costs initially to purchase infrastructure, may not be able to effectively control access to data if managed by a third party.
  - **Hybrid cloud** - a mix of public and private.
    - Pros: keep some systems on-prem (e.g. sensitive data), better support for legacy systems, maintain control over data and infrastructure.
    - Cons: technically complex to connect systems and maintain, data compatibility across systems, additional IT expertise and resources required.
- **Consumption-based model**: pay only for resources allocated to you. Note: if a resource is allocated to you but you aren't actively using it, you are still consuming it, so you will be charged. Controlling costs means not allocating more resources than you need, and fully utilizing allocated resources.

**Lesson 2 - Describe the Benefits of Using Cloud Services**
- **Availability** - an application and the systems it uses are accessible by users.
  - Can be unavailable due to: network outage, app failure, system outage (e.g. failed VM), power outage, related system problem (e.g. database).
  - **High availability** = 99% or higher.
- **Scalability:**
  - **Vertical scaling** - moving to a less/more powerful machine or service (or vice versa).
  - **Horizontal scaling** (scaling out) - e.g. going from one VM to four VMs (identical VMs); can also scale back.
  - Scalability is easy in the cloud.
  - **Elasticity** is the ability of the cloud to easily scale in all directions.
- **Reliability and predictability:**
  - **Fault tolerance** - a failure that has happened = a fault; fault tolerance means maintaining availability when a fault occurs.
  - **Disaster recovery** - disasters are large-scale events, more impactful than a single fault; plan for disasters by having a **BCDR** (Business Continuity and Disaster Recovery) plan. Cloud providers have tools and recommendations to assist with developing a strong BCDR.
- **Security and governance:**
  - **Security** - restricts access to your resources to only those that you allow.
  - **Governance** - refers to the level of access someone has, what they can do with that access, and how they can do it.
  - Cloud providers have documentation to assist with these, and there are also tools to assist.
- **Manageability in the cloud** - tools are provided for: monitoring your resources, scaling resources (maybe automatically), budgeting your spend, and easily deploying and managing resources.
- Overall: cloud computing is using networked resources that can take advantage of all these benefits.

**Lesson 3 - Describe Cloud Service Types**
- **IaaS (Infrastructure as a Service)** - infrastructure is provided by the cloud provider; typically priced on consumption. With IaaS you have the greatest responsibility, but also the greatest control. Example: Azure VM is IaaS.
- **PaaS (Platform as a Service)** - infrastructure, OS, and middleware provided by cloud. Often feature-rich with easy config - turnkey solutions. Usually the best choice for reducing management burden. Less responsibility but, consequently, less control. Example: Azure App Service.
- **SaaS (Software as a Service)** - infrastructure, OS, and software provided by cloud. Usually pay-as-you-go or free. Often accessed via web browser or app. Least responsibility - little to no control. Probably the most common cloud service in use.
- Notes trail off into a "Thought experiment - Analysing cloud types" exercise that is cut short at the end of this page range (content picks up in the next section of the notebook).

## See Also

- [[Microsoft Azure Fundamentals AZ-900 Cert Prep - Overview]]
- [[Microsoft Azure Fundamentals AZ-900 - Module 2 - Azure Architecture and Services]]
