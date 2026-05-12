---
urlSlug: "airbus-planning"
title: "Airbus Production Planning Tool"
client: "Airbus (via Alten)"
period: "Jan 2024 – Jul 2025"
description: "Full rebuild of a critical planning application used daily by production teams. Replaced a slow legacy system with a modern React/NestJS stack on AWS — cut loading times by 99.5%."
tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "AWS"]
metrics:
  - "99.5% faster loading"
  - "Used daily by production teams"
order: 1
lang: "en"
context: "The existing planning tool was a legacy in-house application that had grown organically over years. Production teams relied on it daily to coordinate aircraft assembly slots, but loading the main dashboard could take more than a minute — long enough that some users had developed workarounds outside the tool. Each manual refresh delayed planning decisions, and the codebase had become hard for anyone to maintain safely."
solution: "Rebuilt the application from the ground up as a modern web app on AWS. The new system keeps the same business logic but with a clean separation between a React frontend, a NestJS API, and a PostgreSQL backend. Caching, query optimization, and proper data modeling brought the most-used page load from over a minute to under a second. UX was reworked alongside production users to match how they actually plan."
role: "Fullstack engineer end-to-end: architecture decisions, AWS infrastructure setup, NestJS API design, React frontend implementation, and direct work with production users to validate the new flows. Also handled the migration plan from the legacy system."
architecture: "React frontend (TypeScript, modular component library) talking to a NestJS REST API. PostgreSQL on AWS RDS with carefully indexed read paths for the heavy planning queries. Deployment via AWS (ECS + RDS + CloudFront), CI/CD pipelines for staging and production. Authentication wired into the existing Airbus SSO."
results:
  - "99.5% loading time reduction on the main planning view"
  - "Adopted by the full production planning team within weeks"
  - "Maintainable codebase with documented architecture, ready for hand-off"
---
