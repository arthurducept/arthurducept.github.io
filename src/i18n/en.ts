import type { Translation } from './types';

const en: Translation = {
  common: {
    readMore: 'Read more',
    viewProject: 'View project',
    backToProjects: 'Back to projects',
    backHome: 'Back home',
  },

  pages: {
    about: {
      title: 'About me',
      intro: "I'm Arthur Ducept, a Toulouse-based software engineer with 5 years of fullstack experience. I started writing code during my engineering studies at EPITECH and never stopped. What drives me is the intersection of clean engineering and real-world impact — building things that teams actually use and that hold up under load. I've shipped products on industrial sites at Airbus, modernized legacy systems no one wanted to touch, and built MVPs from scratch on freelance missions. I'm equally comfortable writing TypeScript backends, owning a React frontend, or digging into a CI/CD pipeline.",
      philosophyTitle: 'How I work',
      philosophy: "I care about the problem before the stack. Product-oriented means I ask why before I ask how, and I'd rather under-engineer a v1 that ships than over-architect something that never sees production. I believe in writing code that the next person — including future me — will be able to read and change. Tests, clear naming, and small commits are not optional. I also believe a good engineer should be able to explain technical decisions to non-technical stakeholders, because that's where most of the misunderstandings live.",
      educationTitle: 'Education',
      educationItems: [
        { school: 'EPITECH', degree: "Master's in Software Architecture & Engineering", period: '2020 – 2023' },
        { school: 'EPITECH Nantes', degree: 'Bachelor — IoT applications & Web/Mobile project management', period: '2021, 2023' },
        { school: 'SUPINFO International University', degree: 'Computer Science', period: '2018 – 2020' },
        { school: 'Lycée Notre Dame Challans', degree: 'Baccalauréat Scientifique', period: '2017 – 2018' },
      ],
      interestsTitle: 'Outside of code',
      interests: [
        'Tabletop RPGs — designer & long-running game master (this is also what triggered my Alpha-Roll school project)',
        'Mountain hiking around the Pyrénées',
        'Mechanical keyboards & developer tooling rabbit holes',
        'Reading on systems thinking and product design',
      ],
    },

    skills: {
      title: 'Skills',
      strongTitle: 'What I work with daily',
      strongDescription: 'The stack I am most productive and opinionated about — built up across 5 years of production work.',
      openToTitle: 'Open to & curious about',
      openToDescription: 'Tech I have solid exposure to and would be happy to take a mission on, or that I am actively learning on the side.',
      openTo: [
        { name: 'Backend', skills: ['Go', 'Rust', 'Python (FastAPI)', 'Bun'] },
        { name: 'Frontend', skills: ['Svelte / SvelteKit', 'Solid.js', 'Qwik'] },
        { name: 'Infra & cloud', skills: ['Kubernetes', 'Terraform', 'GCP'] },
        { name: 'Data & AI', skills: ['LLM application development', 'Vector databases', 'RAG pipelines'] },
      ],
      methodsTitle: 'Methods & principles',
      methodsDescription: "Agile/Scrum, TDD where it earns its keep, clean architecture, design patterns, OpenAPI-first APIs, code reviews as a teaching tool, CI/CD as a non-negotiable.",
    },

    experience: {
      title: 'Experience',
      subtitle: '5 years across Airbus programs, freelance missions, and a work-study at Avoloi.',
      scrollHint: 'Drag horizontally to explore →',
      now: 'Now',
      legendTitle: 'Engagement type',
      overlapNote: 'Each row is a parallel professional track. Where bars sit on the same vertical column, the engagements ran at the same time.',
      laneLabels: {
        contract: 'Alten — Consulting',
        freelance: 'Freelance',
        workstudy: 'Studies & work-study',
        fulltime: 'Full-time',
      },
    },

    projects: {
      title: 'Projects',
      subtitle: 'A selection of the work I am most proud of.',
      detailLabels: {
        context: 'Context',
        solution: 'Solution',
        role: 'My role',
        architecture: 'Architecture & stack',
        results: 'Results',
        techStack: 'Tech stack',
        client: 'Client',
        period: 'Period',
      },
    },
  },

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
