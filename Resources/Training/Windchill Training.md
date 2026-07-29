---
source:
tags:
  - Resource
  - Training
last updated: 2026-07-25T00:00:00
---

## Summary

- ...

## Key Takeaways

- **Module 1 - Intro to WC Business Administration:** PDMLink + ProjectLink combined; site admin sets up the business; a Site can have multiple Organizations, which can have Products/Libraries/Projects/Programs; MS Project data can be imported; Primary Business Objects store information; revision control apparently doesn't exist at the Projects level (noted as surprising); needed to add the [[Windchill]] site to security/Java settings and allow pop-ups.
- **Life Cycle:** basic vs. advanced (more management); version series sets the revision scheme (A/B/C or numeric 1.xx); state transitions are configurable (e.g. Concept → Lock → Assembly); Life Cycles must be checked out/in; advanced adds Roles, Access Control and Workflow; best applied at Organisation level.
- **Policy Admin:** Context = level a Policy applies at; Domain = level a Policy is defined at (e.g. PDM at Organization level); Organization-level policies cascade down.
- **Access Control Rules (Module 2 continued):** define access rights per Object type; best practice is to apply rules to Roles, not individuals.
- **Module 2 - Managing Participants:** Groups simplify admin; deleting a Group leaves users on [[Windchill]] but strips their access/policies.
- **Module 3 - Managing Contexts:** objects must reside in a context (Projects, Products, Programs, Library); Product templates can set folders/team roles/document templates.
- **Module 4 - Managing Objects/Object Types/Attributes:** attributes assign to objects; global attributes apply across all object types, local attributes to just one.
- **Module 5 - Managing Object Type Behaviour:** Object Initialisation Behaviour defines what happens on object creation (folders, versioning, life cycle, etc.), configurable via XML; must ensure referenced settings (e.g. folders) actually exist.

## See Also

- ...
