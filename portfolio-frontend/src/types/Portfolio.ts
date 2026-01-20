export interface PortfolioData {
  _id?: string;
  name: string;
  birthDate?: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  address?: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
  languages: LanguageSkills;
  softSkills: string[];
}

export interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  description: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface LanguageSkills {
  arabic: string;
  english: {
    listening: string;
    reading: string;
    spokenProduction: string;
    spokenInteraction: string;
    writing: string;
  };
}