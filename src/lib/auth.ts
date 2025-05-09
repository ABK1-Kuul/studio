// src/lib/auth.ts (mock)
import type { MockUser, UserRole } from '@/lib/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const MOCK_USERS: Record<string, MockUser> = {
  admin: { id: 'admin1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  professional: { id: 'prof1', name: 'Jane Professional', email: 'jane.doe@example.com', role: 'professional' },
};

// This is a SERVER-SIDE function.
export async function getCurrentUser(): Promise<MockUser | null> {
  const cookieStore = cookies();
  const userRole = cookieStore.get('mockUserRole')?.value as UserRole | undefined;

  if (userRole && MOCK_USERS[userRole]) {
    return MOCK_USERS[userRole];
  }
  return null;
}

export async function loginAction(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  // In a real app: validate credentials against a database
  
  let roleToSet: UserRole | undefined;

  if (email === 'admin@example.com') {
    roleToSet = 'admin';
  } else if (email === 'prof@example.com' || email === 'jane.doe@example.com') { // Allowing a general prof login or specific
    roleToSet = 'professional';
  }

  if (roleToSet) {
    cookies().set('mockUserRole', roleToSet, { path: '/', maxAge: 60 * 60 * 24 }); // Cookie for 1 day
    if (roleToSet === 'admin') {
      redirect('/admin/dashboard');
    } else if (roleToSet === 'professional') {
      redirect('/professional/dashboard');
    }
  } else {
    // Handle failed login, perhaps redirect back to login with an error
    // For now, just redirect to login
    redirect('/login?error=invalid_credentials');
  }
}

export async function signupAction(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const role = formData.get('role') as UserRole; // Assuming role is part of signup
  console.log('Signup attempt with:', Object.fromEntries(formData));

  // Simulate professional signup
  if (email && role === 'professional') {
     cookies().set('mockUserRole', 'professional', { path: '/', maxAge: 60 * 60 * 24 });
     redirect('/professional/dashboard');
  } else {
    // For other roles or generic signup
    cookies().set('mockUserRole', 'guest', { path: '/', maxAge: 60 * 60 * 24 }); // Or redirect to a generic dashboard/home
    redirect('/');
  }
}

export async function logoutAction() {
  'use server';
  cookies().delete('mockUserRole');
  redirect('/');
}
