export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
  details?: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  metrics?: string[];
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
  category?: 'frontend' | 'backend' | 'ai_cloud' | 'database';
  icon?: string;
  experience?: string;
}

export interface Project {
  title: string;
  technology: string;
  description: string[];
  category?: 'ai' | 'microservices' | 'fullstack' | 'frontend';
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  icon?: string;
  techBadges?: string[];
}
