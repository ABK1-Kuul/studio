
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
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
}

export interface QuoteRequest {
  id:string;
  professionalId: string;
  professionalName: string;
  userName: string;
  userEmail: string;
  companyName?: string;
  projectDescription: string;
  companySize?: string; // Added
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
