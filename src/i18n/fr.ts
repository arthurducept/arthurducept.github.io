import type { Translation } from './types';

const fr: Translation = {
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
