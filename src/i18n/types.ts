export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Translation {
  common: {
    readMore: string;
    viewProject: string;
    backToProjects: string;
    backHome: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  pages: {
    about: {
      title: string;
      intro: string;
      philosophyTitle: string;
      philosophy: string;
      educationTitle: string;
      educationItems: { school: string; degree: string; period: string }[];
      interestsTitle: string;
      interests: string[];
    };
    skills: {
      title: string;
      strongTitle: string;
      strongDescription: string;
      openToTitle: string;
      openToDescription: string;
      openTo: { name: string; skills: string[] }[];
      methodsTitle: string;
      methodsDescription: string;
    };
    experience: {
      title: string;
      subtitle: string;
      scrollHint: string;
    };
    projects: {
      title: string;
      subtitle: string;
      detailLabels: {
        context: string;
        solution: string;
        role: string;
        architecture: string;
        results: string;
        techStack: string;
        client: string;
        period: string;
      };
    };
  };
  hero: {
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaCV: string;
    available: string;
  };
  about: {
    sectionTitle: string;
    bio: string;
    availability: string;
    location: string;
    languagesTitle: string;
    languages: { label: string; level: string }[];
  };
  skills: {
    sectionTitle: string;
    categories: SkillCategory[];
  };
  experience: {
    sectionTitle: string;
    present: string;
    employer: string;
    client: string;
    types: {
      contract: string;
      freelance: string;
      fulltime: string;
      workstudy: string;
    };
  };
  projects: {
    sectionTitle: string;
    schoolProject: string;
    freelance: string;
  };
  contact: {
    sectionTitle: string;
    description: string;
    emailLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}
