
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
  userPhone: string; // Changed from optional
  companyName?: string;
  projectDescription: string;
  companySize?: string; 
  timeline?: string;
  status: 'pending' | 'reviewed' | 'contacted';
  submittedAt: string; // ISO date string
  serviceName?: string; 
}

export type ServiceCategory = 'Consultation' | 'Research' | 'Training';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  price?: string; 
}

export type UserRole = 'admin' | 'professional';

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string; 
}

export interface Topic {
  id: string;
  name: string;
  description?: string; 
}

export interface TrainingTopic extends Topic {
  description: string; 
}
