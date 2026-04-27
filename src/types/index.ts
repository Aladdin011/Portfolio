/**
 * Global Type Definitions
 * Centralized types for the entire application
 */

// Project Types
export interface TechStack {
  name: string;
  category?: 'frontend' | 'backend' | 'devops' | 'tool';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  repo: string;
  demo: string;
  color: string;
  hoverColor: string;
  span: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  demoUrl: string;
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface TestimonialSubmission {
  name: string;
  role: string;
  quote: string;
}

// Skills Types
export interface SkillGroup {
  category: string;
  items: string[];
}

// Timeline Types
export interface TimelineEvent {
  year: string;
  title: string;
  org: string;
  description: string;
  type: 'work' | 'education' | 'milestone';
}

// Blog/Article Types
export interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  color: string;
  link: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Form State Types
export interface FormState<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

// Component Props Types
export interface SectionProps {
  id: string;
  className?: string;
}

export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
}
