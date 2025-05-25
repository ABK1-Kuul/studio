
export interface Professional {
  id: string;
  name: string;
  avatarUrl?: string;
  industry: string; 
  expertise: string[];
  bio: string;
  experienceYears: number;
  portfolio: PortfolioItem[];
  location?: string;
  email: string; 
  phone?: string; 
  servicesOffered?: Service[];
  researchSpecialties?: string[];
  trainingSpecialties?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
}

export interface ServiceRequest {
  id:string;
  professionalId: string;
  professionalName: string;
  userName: string;
  userEmail: string;
  companyName?: string;
  projectDescription: string;
  companySize?: string; 
  timeline?: string;
  status: 'pending' | 'reviewed' | 'contacted';
  submittedAt: string; // ISO date string
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string; 
}

export type UserRole = 'admin' | 'professional';

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Added for clarity on Research and Training pages
export interface Topic {
  id: string;
  name: string;
  description?: string; // Added description for research topics
}

export interface TrainingTopic extends Topic {
  description: string; // Training topics already had description
}

