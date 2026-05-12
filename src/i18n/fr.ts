import type { Translation } from './types';

const fr: Translation = {
  common: {
    readMore: 'En savoir plus',
    viewProject: 'Voir le projet',
    backToProjects: 'Retour aux projets',
    backHome: "Retour à l'accueil",
  },

  pages: {
    about: {
      title: 'À propos',
      intro: "Je suis Arthur Ducept, ingénieur logiciel basé à Toulouse, avec 5 ans d'expérience fullstack. J'ai commencé à coder pendant mes études à l'EPITECH et je n'ai jamais arrêté. Ce qui me motive, c'est l'intersection entre l'ingénierie propre et l'impact réel — livrer des choses que les équipes utilisent vraiment et qui tiennent sous la charge. J'ai déployé des produits sur des sites industriels chez Airbus, modernisé des systèmes legacy que personne ne voulait toucher, et construit des MVP à partir de zéro en freelance. Je suis aussi à l'aise pour écrire un backend TypeScript, posséder un frontend React, ou plonger dans une pipeline CI/CD.",
      philosophyTitle: 'Ma façon de travailler',
      philosophy: "Je m'intéresse au problème avant la stack. Orienté produit, ça veut dire que je demande pourquoi avant comment, et je préfère sous-architecturer une v1 qui sort plutôt que sur-architecturer quelque chose qui ne verra jamais la production. Je crois au code que la prochaine personne — y compris moi dans six mois — pourra lire et modifier. Les tests, le nommage clair et les petits commits ne sont pas optionnels. Je crois aussi qu'un bon ingénieur doit pouvoir expliquer ses décisions techniques à des interlocuteurs non techniques, parce que c'est là que vivent la plupart des malentendus.",
      educationTitle: 'Formation',
      educationItems: [
        { school: 'EPITECH', degree: 'Master Architecte Logiciel & Ingénieur en Informatique', period: '2020 – 2023' },
        { school: 'EPITECH Nantes', degree: 'Bachelor — Applications IoT & Chef de projet web/mobile', period: '2021, 2023' },
        { school: 'SUPINFO International University', degree: 'Informatique', period: '2018 – 2020' },
        { school: 'Lycée Notre Dame Challans', degree: 'Baccalauréat Scientifique', period: '2017 – 2018' },
      ],
      interestsTitle: 'En dehors du code',
      interests: [
        'Jeux de rôle sur table — game master et concepteur (c\'est aussi ce qui a déclenché mon projet école Alpha-Roll)',
        'Randonnée en montagne dans les Pyrénées',
        'Claviers mécaniques et outils dev (le rabbit hole habituel)',
        'Lectures sur la pensée systèmes et le design produit',
      ],
    },

    skills: {
      title: 'Compétences',
      strongTitle: 'Ce que je manipule au quotidien',
      strongDescription: "La stack sur laquelle je suis le plus productif et le plus impliqué — construite sur 5 ans de production.",
      openToTitle: "Ouvert à & curieux",
      openToDescription: "Technologies sur lesquelles j'ai une exposition solide et où je serais ravi de prendre une mission, ou que j'apprends activement en parallèle.",
      openTo: [
        { name: 'Backend', skills: ['Go', 'Rust', 'Python (FastAPI)', 'Bun'] },
        { name: 'Frontend', skills: ['Svelte / SvelteKit', 'Solid.js', 'Qwik'] },
        { name: 'Infra & cloud', skills: ['Kubernetes', 'Terraform', 'GCP'] },
        { name: 'Data & IA', skills: ['Applications LLM', 'Bases vectorielles', 'Pipelines RAG'] },
      ],
      methodsTitle: 'Méthodes & principes',
      methodsDescription: "Agile/Scrum, TDD quand ça en vaut la peine, clean architecture, design patterns, API OpenAPI-first, revues de code comme outil d'apprentissage, CI/CD non négociable.",
    },

    experience: {
      title: 'Expérience',
      subtitle: '5 années entre les programmes Airbus, des missions freelance et une alternance chez Avoloi.',
      scrollHint: 'Faites défiler horizontalement →',
    },

    projects: {
      title: 'Projets',
      subtitle: 'Une sélection des projets dont je suis le plus fier.',
      detailLabels: {
        context: 'Contexte',
        solution: 'Solution',
        role: 'Mon rôle',
        architecture: 'Architecture & stack',
        results: 'Résultats',
        techStack: 'Stack technique',
        client: 'Client',
        period: 'Période',
      },
    },
  },

  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
  },

  hero: {
    title: 'Arthur Ducept',
    subtitle: 'Ingénieur Logiciel Fullstack',
    ctaContact: 'Me contacter',
    ctaCV: 'Télécharger le CV',
    available: 'Disponible en freelance & CDI',
  },

  about: {
    sectionTitle: 'À propos',
    bio: "Ingénieur logiciel fullstack avec 5 ans d'expérience dans la conception d'applications web à forte valeur ajoutée. Orienté produit, j'attache une grande importance à la qualité du code, à l'architecture logicielle et à la conception d'interfaces intuitives. J'ai travaillé sur des sujets frontend, backend, cloud et systèmes embarqués — toujours avec l'objectif de livrer des solutions robustes dont les équipes peuvent être fières. Ouvert aux missions freelance et aux postes en CDI, en télétravail ou sur Toulouse.",
    availability: 'Disponible en freelance & CDI',
    location: 'Toulouse, France',
    languagesTitle: 'Langues',
    languages: [
      { label: 'Français', level: 'Natif' },
      { label: 'Anglais', level: 'Professionnel' },
    ],
  },

  skills: {
    sectionTitle: 'Compétences',
    categories: [
      {
        name: 'Frontend',
        skills: ['TypeScript', 'React', 'Vue 3', 'Nuxt', 'Angular', 'Tailwind CSS', 'Material UI', 'Vuetify'],
      },
      {
        name: 'Backend',
        skills: ['NestJS', 'Node.js', 'Express.js', 'Java Spring Boot', '.NET / C#', 'PostgreSQL', 'MongoDB', 'REST', 'GraphQL', 'WebSockets'],
      },
      {
        name: 'Cloud & DevOps',
        skills: ['AWS', 'Azure DevOps', 'Clever Cloud', 'CI/CD', 'Docker', 'Git', 'GitHub', 'GitLab'],
      },
      {
        name: 'Mobile & Embarqué',
        skills: ['Flutter', 'Swift', 'STM32', 'Embedded C', 'MQTT', 'NanoEdgeAI'],
      },
      {
        name: 'Méthodes & Outils',
        skills: ['Agile / Scrum', 'TDD', 'Clean Architecture', 'OpenAPI', 'Jest', 'Cypress', 'Jira', 'Figma'],
      },
    ],
  },

  experience: {
    sectionTitle: 'Expérience',
    present: "Aujourd'hui",
    employer: 'Employeur',
    client: 'Client',
    types: {
      contract: 'Consulting',
      freelance: 'Freelance',
      fulltime: 'CDI',
      workstudy: 'Alternance',
    },
  },

  projects: {
    sectionTitle: 'Projets',
    schoolProject: 'Projet école',
    freelance: 'Freelance',
  },

  contact: {
    sectionTitle: 'Travaillons ensemble',
    description: 'Vous avez un projet ou un poste à pourvoir ? Je serais ravi d\'en discuter. Contactez-moi directement par email ou sur LinkedIn.',
    emailLabel: 'Envoyer un email',
    linkedinLabel: 'Me rejoindre sur LinkedIn',
  },

  footer: {
    rights: 'Tous droits réservés.',
    madeWith: 'Construit avec Astro',
  },
};

export default fr;
