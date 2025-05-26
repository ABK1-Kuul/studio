
// src/lib/auth.ts (mock)
'use server';

import type { MockUser, UserRole, Professional } from '@/lib/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { mockProfessionals } from '@/data/mock'; // Import mockProfessionals

const MOCK_USERS: Record<string, MockUser> = {
  admin: { id: 'admin1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  prof1: { id: 'hdm_p1', name: 'Henok Doni', email: 'henok.doni@hdmxperts.com', role: 'professional' },
  prof2: { id: 'hdm_p2', name: 'Daniel Manaye', email: 'daniel.manaye@hdmxperts.com', role: 'professional' },
  prof3: { id: 'hdm_p3', name: 'Yohannes Yemane', email: 'yohannes.yemane@hdmxperts.com', role: 'professional' },
  prof4: { id: 'hdm_p4', name: 'Maedot Assefa', email: 'maedot.assefa@hdmxperts.com', role: 'professional' },
  prof5: { id: 'hdm_p5', name: 'Henok Heruy Gizaw', email: 'henok.heruy@hdmxperts.com', role: 'professional' },
  prof6: { id: 'hdm_p6', name: 'Leoul Zewelde', email: 'leoul.zewelde@hdmxperts.com', role: 'professional' },
  prof7: { id: 'hdm_p7', name: 'Ashenafi Mezgebe', email: 'ashenafi.mezgebe@hdmxperts.com', role: 'professional' },
  prof8: { id: 'hdm_p8', name: 'Biniam F. Demissie, PhD', email: 'biniam.demissie@hdmxperts.com', role: 'professional' },
  prof9: { id: 'hdm_p9', name: 'Mahir Jibril (PhD)', email: 'mahir.jibril@hdmxperts.com', role: 'professional' },
  prof10: { id: 'hdm_p10', name: 'Abdselam Kedir', email: 'abdselam.kedir@hdmxperts.com', role: 'professional' },
};

// This is a SERVER-SIDE function.
export async function getCurrentUser(): Promise<MockUser | null> {
  const cookieStore = cookies();
  const userEmail = cookieStore.get('mockUserEmail')?.value;

  if (!userEmail) {
    return null;
  }
  
  // Find user by email in our MOCK_USERS
  const user = Object.values(MOCK_USERS).find(u => u.email === userEmail);
  
  return user || null;
}

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  
  let userToLogin: MockUser | undefined;

  // Check if email matches any existing user's email
  userToLogin = Object.values(MOCK_USERS).find(u => u.email === email);

  if (userToLogin) {
    cookies().set('mockUserRole', userToLogin.role, { path: '/', maxAge: 60 * 60 * 24 }); 
    cookies().set('mockUserEmail', userToLogin.email, { path: '/', maxAge: 60 * 60 * 24 });
    if (userToLogin.role === 'admin') {
      redirect('/admin/dashboard');
    } else if (userToLogin.role === 'professional') {
      redirect('/professional/dashboard');
    }
  } else {
    redirect('/login?error=invalid_credentials');
  }
}

export async function signupAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  // const password = formData.get('password') as string; 
  const role = formData.get('role') as UserRole; 

  const industry = formData.get('industry') as string;
  const expertiseRaw = formData.get('expertise') as string;
  const bio = formData.get('bio') as string;
  const experienceYearsRaw = formData.get('experienceYears') as string;
  const location = formData.get('location') as string | undefined;
  const phone = formData.get('phone') as string | undefined;

  console.log('Signup attempt with:', Object.fromEntries(formData));

  if (!name || !email || role !== 'professional' || !industry || !expertiseRaw || !bio || !experienceYearsRaw) {
    console.error("Signup failed due to missing required fields on server.");
    redirect('/signup?error=missing_fields_server');
    return;
  }
  
  const existingUser = Object.values(MOCK_USERS).find(u => u.email === email);
  if (existingUser) {
    console.warn('User with email ' + email + ' already exists in MOCK_USERS.');
    redirect('/signup?error=email_exists'); 
    return;
  }

  // Find the next available ID for the new professional
  const existingProfIds = mockProfessionals.map(p => parseInt(p.id.replace('hdm_p', '')));
  const maxId = existingProfIds.length > 0 ? Math.max(...existingProfIds.filter(id => !isNaN(id))) : 0;
  const newProfIdNumber = maxId + 1;
  const newProfId = `hdm_p${newProfIdNumber}`;
  
  MOCK_USERS[newProfId] = { id: newProfId, name, email, role: 'professional' };

  const newProfessionalEntry: Professional = {
    id: newProfId,
    name,
    email,
    industry,
    expertise: expertiseRaw.split(',').map(e => e.trim()).filter(e => e),
    bio,
    experienceYears: parseInt(experienceYearsRaw, 10) || 0,
    location: location || undefined,
    phone: phone || undefined,
    portfolio: [], 
    servicesOffered: [], 
  };

  const existingProfIndexInProfiles = mockProfessionals.findIndex(p => p.email === email);
  if (existingProfIndexInProfiles > -1) {
    console.warn('Professional with email ' + email + ' already exists in mockProfessionals. Overwriting.');
    mockProfessionals[existingProfIndexInProfiles] = { ...newProfessionalEntry, id: mockProfessionals[existingProfIndexInProfiles].id };
  } else {
    mockProfessionals.push(newProfessionalEntry);
  }
  
  cookies().set('mockUserRole', 'professional', { path: '/', maxAge: 60 * 60 * 24 });
  cookies().set('mockUserEmail', email, { path: '/', maxAge: 60 * 60 * 24 });
  
  redirect('/professional/dashboard');
}

export async function logoutAction() {
  cookies().delete('mockUserRole');
  cookies().delete('mockUserEmail');
  redirect('/');
}

