// src/lib/auth.ts (mock)
'use server';

import type { MockUser, UserRole } from '@/lib/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const MOCK_USERS: Record<string, MockUser> = {
  admin: { id: 'admin1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  professional: { id: 'prof1', name: 'Jane Professional', email: 'jane.doe@example.com', role: 'professional' },
  // Example of another professional that can log in
  prof2: { id: 'prof2', name: 'John Developer', email: 'prof@example.com', role: 'professional' },
};

// This is a SERVER-SIDE function.
export async function getCurrentUser(): Promise<MockUser | null> {
  const cookieStore = cookies();
  const userRole = cookieStore.get('mockUserRole')?.value as UserRole | undefined;
  const userEmail = cookieStore.get('mockUserEmail')?.value;


  if (userRole && userEmail && MOCK_USERS[userRole === 'admin' ? 'admin' : userEmail.startsWith('prof') ? userEmail.split('@')[0] : '']) {
     // A bit more specific to retrieve the mock user based on role and potentially email prefix for professionals
    if (userRole === 'admin' && userEmail === MOCK_USERS.admin.email) {
      return MOCK_USERS.admin;
    }
    if (userRole === 'professional') {
        // Find professional by email (this is simplistic for mock)
        const foundProf = Object.values(MOCK_USERS).find(u => u.role === 'professional' && u.email === userEmail);
        if (foundProf) return foundProf;
    }
  }
  
  // Fallback for basic role-based mock user
  if (userRole && MOCK_USERS[userRole]) {
    return MOCK_USERS[userRole];
  }

  return null;
}

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  
  let userToLogin: MockUser | undefined;

  if (email === MOCK_USERS.admin.email) {
    userToLogin = MOCK_USERS.admin;
  } else {
    // Check if email matches any professional's email
    userToLogin = Object.values(MOCK_USERS).find(u => u.role === 'professional' && u.email === email);
  }

  if (userToLogin) {
    cookies().set('mockUserRole', userToLogin.role, { path: '/', maxAge: 60 * 60 * 24 }); // Cookie for 1 day
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
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const role = formData.get('role') as UserRole; 

  console.log('Signup attempt with:', Object.fromEntries(formData));

  // All signups are for professionals now
  if (email && name && role === 'professional') {
    // In a real app, create the user in the database. Here, we just set cookies.
    // For mock purposes, we can add this new professional to MOCK_USERS dynamically for the session or rely on a generic prof login
    // This dynamic addition is tricky without a persistent store. For now, new signups will get a generic professional experience.
    // Or, we can assume the 'prof@example.com' is a catch-all for new signups for demo.
    const newProfId = `prof${Object.keys(MOCK_USERS).length}`;
    MOCK_USERS[newProfId] = { id: newProfId, name, email, role: 'professional' };

    cookies().set('mockUserRole', 'professional', { path: '/', maxAge: 60 * 60 * 24 });
    cookies().set('mockUserEmail', email, { path: '/', maxAge: 60 * 60 * 24 });
    redirect('/professional/dashboard');
  } else {
    // Should not happen if form is restricted to professionals
    redirect('/signup?error=invalid_role');
  }
}

export async function logoutAction() {
  cookies().delete('mockUserRole');
  cookies().delete('mockUserEmail');
  redirect('/');
}
