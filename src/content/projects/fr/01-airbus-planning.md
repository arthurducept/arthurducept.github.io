---
urlSlug: "airbus-planning"
title: "Outil de Planification Airbus"
client: "Airbus (via Alten)"
period: "Jan 2024 – Jul 2025"
description: "Reconstruction complète d'une application de planification critique utilisée quotidiennement par les équipes de production. Remplacement d'un système legacy lent par une stack React/NestJS moderne sur AWS — temps de chargement réduits de 99,5%."
tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "AWS"]
metrics:
  - "99,5% plus rapide"
  - "Utilisé quotidiennement en production"
order: 1
lang: "fr"
context: "L'outil de planification existant était une application interne legacy qui avait évolué de manière organique sur plusieurs années. Les équipes de production en dépendaient au quotidien pour coordonner les créneaux d'assemblage, mais le chargement du tableau de bord principal pouvait prendre plus d'une minute — assez long pour que certains utilisateurs aient développé des workarounds en dehors de l'outil. Chaque rafraîchissement manuel retardait les décisions de planification, et le code était devenu difficile à maintenir sans risque."
solution: "Reconstruction complète de l'application en tant que web app moderne sur AWS. Le nouveau système conserve la même logique métier mais avec une séparation propre entre frontend React, API NestJS et backend PostgreSQL. Cache, optimisation des requêtes et modélisation propre des données ont ramené la page la plus utilisée de plus d'une minute à moins d'une seconde. L'UX a été retravaillée avec les utilisateurs de production pour coller à leur façon réelle de planifier."
role: "Ingénieur fullstack end-to-end : décisions d'architecture, mise en place de l'infrastructure AWS, conception de l'API NestJS, implémentation du frontend React, et travail direct avec les utilisateurs de production. Également en charge du plan de migration depuis le système legacy."
architecture: "Frontend React (TypeScript, bibliothèque de composants modulaire) communiquant avec une API REST NestJS. PostgreSQL sur AWS RDS avec un indexage soigné des chemins de lecture pour les requêtes lourdes. Déploiement via AWS (ECS + RDS + CloudFront), pipelines CI/CD staging et production. Authentification branchée sur le SSO Airbus existant."
results:
  - "Gain de 99,5% sur le temps de chargement de la vue principale"
  - "Adopté par toute l'équipe de planification en quelques semaines"
  - "Codebase maintenable, architecture documentée, prêt pour la passation"
---
