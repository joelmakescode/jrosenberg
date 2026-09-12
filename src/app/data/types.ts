export type Lang = 'de' | 'en';

export type Localized = Record<Lang, string>;

export interface Period {
  start: string;
  end?: string;
}

export type ProjectStatus = 'done' | 'in-progress' | 'planned';

export interface Project {
  slug: string;
  title: string | Localized;
  status: ProjectStatus;
  summary: Localized;
  description: Localized;
  period: Period;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export interface ResumeEntry {
  period: Period;
  title: Localized;
  organisation: string;
  description?: Localized;
  tasks?: Localized[];
}

export interface InterestGroup {
  label: Localized;
  items: (string | Localized)[];
}

export interface QualityGroup {
  label: string | Localized;
  items: (string | Localized)[];
}

export interface Profile {
  name: string;
  role: Localized;
  location: Localized;
  status: Localized;
  about: Localized;
  skills: SkillGroup[];
  resume: ResumeEntry[];
  interests: InterestGroup[];
  qualities: QualityGroup[];
  links: {
    email: string;
    github: string;
    linkedin?: string;
  };
}

export interface LegalInfo {
  name: string;
  email: string;
}
