import type { Translation } from './types';

const en: Translation = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    title: 'Arthur Ducept',
    subtitle: 'Fullstack Software Engineer',
    ctaContact: 'Get in touch',
    ctaCV: 'Download CV',
    available: 'Available for freelance & full-time',
  },

  about: {
    sectionTitle: 'About me',
    bio: "I'm a fullstack software engineer with 5 years of experience building web applications that make a real difference. Product-oriented at heart, I care about clean code, scalable architecture, and interfaces that feel intuitive. I've worked across frontend, backend, cloud, and even embedded systems — always with a focus on shipping things that work and that teams are proud of. I'm open to freelance missions and full-time contracts, remote or on-site in Toulouse.",
    availability: 'Available for freelance & full-time',
    location: 'Toulouse, France',
    languagesTitle: 'Languages',
    languages: [
      { label: 'French', level: 'Native' },
      { label: 'English', level: 'Professional' },
    ],
  },

  skills: {
    sectionTitle: 'Skills',
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
        name: 'Mobile & Embedded',
        skills: ['Flutter', 'Swift', 'STM32', 'Embedded C', 'MQTT', 'NanoEdgeAI'],
      },
      {
        name: 'Methods & Tools',
        skills: ['Agile / Scrum', 'TDD', 'Clean Architecture', 'OpenAPI', 'Jest', 'Cypress', 'Jira', 'Figma'],
      },
    ],
  },

  experience: {
    sectionTitle: 'Experience',
    present: 'Present',
    employer: 'Employer',
    client: 'Client',
    types: {
      contract: 'Consulting',
      freelance: 'Freelance',
      fulltime: 'Full-time',
      workstudy: 'Work-study',
    },
  },

  projects: {
    sectionTitle: 'Projects',
    schoolProject: 'School project',
    freelance: 'Freelance',
  },

  contact: {
    sectionTitle: "Let's work together",
    description: "Have a project in mind or a position to fill? I'd love to hear about it. Reach out directly by email or connect on LinkedIn.",
    emailLabel: 'Send an email',
    linkedinLabel: 'Connect on LinkedIn',
  },

  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Built with Astro',
  },
};

export default en;
