
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { mockServiceRequests } from '@/data/mock'; 
import { ServiceRequestList } from '@/components/admin/ServiceRequestList';
import type { ServiceRequest } from '@/lib/types';

async function getServiceRequests(): Promise<ServiceRequest[]> {
  return [...mockServiceRequests].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export default async function AdminServiceRequestsPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  const serviceRequests = await getServiceRequests();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Service Requests</h1>
        <p className="text-muted-foreground">Manage and review all submitted project service requests.</p>
      </div>
      
      <ServiceRequestList initialServiceRequests={serviceRequests} />
    </div>
  );
}
