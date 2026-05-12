export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Translation {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
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
