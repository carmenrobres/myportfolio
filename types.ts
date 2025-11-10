export enum ProjectCategory {
  INSTALLATIONS = "Installations & Exhibitions",
  AI_RESEARCH = "AI & Design Research",
  PRODUCT_DESIGN = "Product & Visual Design",
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  image: string;
  images?: string[];
  overview: string;
  industry: string[];
  service: string[];
  learnings: string;
  needs?: string;
  concept?: string;
  process?: string[];
  outcome?: string;
  reflection?: string;
  featured?: boolean;
  externalLink?: string;
}

// Fix: Add Event interface to resolve import error.
export interface Event {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  link?: string;
  image: string;
}
