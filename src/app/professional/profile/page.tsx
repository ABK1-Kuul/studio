import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ProfileForm } from '@/components/professional/ProfileForm';
import { mockProfessionals } from '@/data/mock'; // Using mock data for now
import type { Professional } from '@/lib/types';

async function getProfessionalData(userId: string, userEmail: string): Promise<Professional | null> {
  let professional = mockProfessionals.find(p => p.email === userEmail || p.id === userId);
  if (!professional) {
    // If user is professional but has no profile data yet, provide a default structure.
    professional = {
        id: userId,
        name: '', // Will be filled by user
        email: userEmail,
        industry: '',
        expertise: [],
        bio: '',
        experienceYears: 0,
        portfolio: [],
        servicesOffered: [],
        // hourlyRate is no longer part of this default structure
    };
  }
  // Ensure hourlyRate is not present if fetched from old mock data potentially
  if (professional && 'hourlyRate' in professional) {
    delete professional.hourlyRate;
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
    return <p>Error: Could not load professional data.</p>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Manage Your Profile</h1>
      <p className="text-muted-foreground">
        Keep your profile up-to-date to attract project opportunities and showcase your expertise.
      </p>
      <ProfileForm professional={professionalData} />
    </div>
  );
}
