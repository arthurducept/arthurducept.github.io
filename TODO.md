# TODO

## Mesure d'audience avec GoatCounter (sans cookie)

Objectif : savoir quand de vraies personnes (pas des bots) visitent le site, sans cookie ni bandeau de consentement.

### Comment ça marche

- Un seul script de ~3 Ko est ajouté aux pages. À chaque visite, il envoie une requête vers `https://<code>.goatcounter.com/count` avec la page, le referrer, la taille d'écran et le user-agent.
- Aucun cookie, aucun stockage local, aucun identifiant persistant. Les visiteurs sont distingués par un hash de l'IP et du user-agent qui change régulièrement ; l'IP n'est pas conservée.
- Les bots connus sont filtrés (liste de user-agents) et exclus des statistiques.
- Le tableau de bord est à `https://<code>.goatcounter.com` (pages vues, referrers, pays, navigateurs, tailles d'écran).
- Tarif et conditions à reverifier sur goatcounter.com : gratuit pour un usage non commercial. Le site faisant la promotion d'une activité freelance, vérifier si l'offre gratuite est autorisée ou s'il faut un abonnement ou un don. Il est aussi possible de l'auto-héberger.

### À faire

- [ ] Créer un compte sur https://www.goatcounter.com et choisir un code de site (`<code>.goatcounter.com`).
- [ ] Vérifier les conditions d'usage (usage commercial) avant d'activer.
- [ ] Ajouter dans `src/layouts/BaseLayout.astro`, avant `</head>` :
  ```html
  <script data-goatcounter="https://<code>.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
  ```
- [ ] Mettre à jour la section « Données personnelles et cookies » de `src/i18n/fr.ts` et `src/i18n/en.ts` : ne plus écrire « aucun traceur », mentionner la mesure d'audience anonyme GoatCounter (sans cookie), son but (statistiques de fréquentation) et l'absence de transfert à des tiers à des fins publicitaires.
- [ ] Vérifier dans les réglages GoatCounter que les IP ne sont pas conservées et que la collecte des données de session reste anonyme (conditions d'exemption de consentement de la CNIL : usage limité à l'éditeur, données anonymes).
- [ ] Après déploiement, ouvrir le site et vérifier qu'une visite apparaît dans le tableau de bord.

## Mentions légales

- [ ] Téléphone : décider si un numéro (virtuel ou autre) doit être ajouté aux mentions légales. Le texte français le liste pour l'éditeur, mais la jurisprudence européenne admet un autre moyen de contact direct et rapide. Voir la discussion de la PR.
- [ ] Relire les mentions avec les textes officiels (Légifrance, article 1-1 de la LCEN) et mettre à jour la date « Dernière mise à jour » à chaque modification.
