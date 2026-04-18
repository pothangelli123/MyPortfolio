export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  type: "education" | "work";
  title: string;
  company?: string;
  school?: string;
  period: string;
  description: string;
  details?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
