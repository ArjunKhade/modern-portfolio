export interface ResumePersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface ResumeExperience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface ResumeProject {
  id: string;
  name: string;
  technologies: string;
  link?: string;
  description: string;
  highlights: string[];
}

export interface ResumeEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  gpaOrHonors?: string;
}

export interface ResumeSkills {
  languages: string[];
  frameworks: string[];
  toolsAndCloud: string[];
  databases: string[];
  other: string[];
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface ResumeData {
  personalInfo: ResumePersonalInfo;
  summary: string;
  skills: ResumeSkills;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
}

export type ResumeThemeColor = 'navy' | 'emerald' | 'charcoal' | 'burgundy' | 'indigo' | 'angularRed';
export type ResumeFontFamily = 'inter' | 'roboto' | 'georgia' | 'merriweather';
export type ResumeSpacing = 'compact' | 'normal' | 'relaxed';
