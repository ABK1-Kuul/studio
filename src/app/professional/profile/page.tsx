import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ProfileForm } from '@/components/professional/ProfileForm';
import { mockProfessionals } from '@/data/mock'; // Using mock data for now
import type { Professional } from '@/lib/types';

async function getProfessionalData(userId: string, userEmail: string): Promise<Professional | null> {
  // In a real app, fetch from DB based on userId or email
  // For demo, try to find by email or create a default structure if not found
  let professional = mockProfessionals.find(p => p.email === userEmail || p.id === userId);
  if (!professional) {
    // If user is professional but has no profile data yet, provide a default structure
    // This helps pre-fill some parts of the form or indicates it's a new profile.
    // For this example, we will assume the professional object exists if the user has the role.
    // A more robust solution would create a profile on first access or signup.
    // Here, we'll find one matching the logged-in professional's ID if it exists in mock data.
    // Otherwise, we might need to create a blank shell.
    // For this example, if we cant find one by email, we create a placeholder.
    professional = {
        id: userId,
        name: '',
        email: userEmail,
        industry: '',
        expertise: [],
        bio: '',
        experienceYears: 0,
        portfolio: [],
        servicesOffered: [],
    };
  }
  return professional;
}


export default async function ProfessionalProfilePage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'professional') {
    redirect('/login');
  }

  const professionalData = await getProfessionalData(user.id, user.email);

  if (!professionalData) {
    // This case should ideally not be hit if a professional user always has profile data.
    // But as a fallback:
    return <p>Error: Could not load professional data.</p>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Your Profile</h1>
      <p className="text-muted-foreground">
        Keep your profile up-to-date to attract clients and showcase your expertise.
      </p>
      <ProfileForm professional={professionalData} />
    </div>
  );
}
