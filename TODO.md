# TODO

## Mesure d'audience avec GoatCounter (sans cookie)

Objectif : savoir quand de vraies personnes (pas des bots) visitent le site, sans cookie ni bandeau de consentement.

### Comment ça marche

- Un seul script de ~3 Ko est ajouté aux pages. À chaque visite, il envoie une requête vers `https://<code>.goatcounter.com/count` avec la page, le referrer, la taille d'écran et le user-agent.
- Aucun cookie, aucun stockage local, aucun identifiant persistant. Les visiteurs sont distingués par un hash de l'IP et du user-agent qui change régulièrement ; l'IP n'est pas conservée.
- Les bots connus sont filtrés (liste de user-agents) et exclus des statistiques.
- Le tableau de bord est à `https://<code>.goatcounter.com` (pages vues, referrers, pays, navigateurs, tailles d'écran).
- Tarif et conditions à reverifier sur goatcounter.com : gratuit pour un usage non commercial (a priori compatible avec un site personnel pour recruteurs, à confirmer). Il est aussi possible de l'auto-héberger.

### À faire

- [ ] Créer un compte sur https://www.goatcounter.com et choisir un code de site (`<code>.goatcounter.com`).
- [ ] Vérifier les conditions d'usage (non commercial) avant d'activer.
- [ ] Ajouter dans `src/layouts/BaseLayout.astro`, avant `</head>` :
  ```html
  <script data-goatcounter="https://<code>.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
  ```
- [ ] Mettre à jour la section « Données personnelles et cookies » de `src/i18n/fr.ts` et `src/i18n/en.ts` : ne plus écrire « aucun traceur », mentionner la mesure d'audience anonyme GoatCounter (sans cookie), son but (statistiques de fréquentation) et l'absence de transfert à des tiers à des fins publicitaires.
- [ ] Vérifier dans les réglages GoatCounter que les IP ne sont pas conservées et que la collecte des données de session reste anonyme (conditions d'exemption de consentement de la CNIL : usage limité à l'éditeur, données anonymes).
- [ ] Après déploiement, ouvrir le site et vérifier qu'une visite apparaît dans le tableau de bord.

## Mentions légales

Le site est positionné comme site personnel non professionnel (contact pour recruteurs) : les mentions légales se limitent à l'éditeur, au contact, à l'hébergeur et aux données personnelles. Aucune mention d'activité freelance n'est affichée.

- [ ] Si le site recommence à proposer des missions freelance (hero, bio, description, page contact), repasser en site professionnel : remettre dans les mentions légales la mention « EI », l'adresse pro, le SIRET, la mention de TVA (art. 293 B du CGI, franchise en base), le directeur de la publication et un moyen de contact téléphonique ou équivalent. Ces éléments sont dans le premier commit de la PR.
- [ ] Relire les mentions avec les textes officiels (Légifrance, article 1-1 de la LCEN) et mettre à jour la date « Dernière mise à jour » à chaque modification.
