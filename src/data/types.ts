// Types for personal information and social links
export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  profileImage: string;
  skills: string[];
  socialLinks: SocialLinks;
}

// Types for experience section
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  website: string;
  achievements: string[];
  type: 'full-time' | 'part-time' | 'contract';
  current: boolean;
}

// Types for education section
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  website: string;
  achievements?: string[];
}

// Types for projects section
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured: boolean;
  category: string;
} 