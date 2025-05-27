
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { mockServiceRequests } from '@/data/mock'; // Changed from mockQuoteRequests
import { ServiceRequestList } from '@/components/admin/ServiceRequestList'; // Changed from QuoteList
import type { ServiceRequest } from '@/lib/types'; // Changed from QuoteRequest

async function getServiceRequests(): Promise<ServiceRequest[]> { // Renamed function and type
  // In a real app, fetch this from a database
  // Sorting by newest first
  return [...mockServiceRequests].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export default async function AdminLegacyQuotesPage() { // Renamed component to avoid conflict if user keeps both
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  const serviceRequests = await getServiceRequests(); // Renamed variable

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Legacy Service Requests (at /admin/quotes)</h1>
        <p className="text-muted-foreground">Manage and review all submitted project service requests.</p>
      </div>
      
      <ServiceRequestList initialServiceRequests={serviceRequests} /> {/* Updated component and prop */}
    </div>
  );
}
