import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { mockQuoteRequests } from '@/data/mock'; // Using mock data
import { QuoteList } from '@/components/admin/QuoteList';
import type { QuoteRequest } from '@/lib/types';

async function getQuotes(): Promise<QuoteRequest[]> {
  // In a real app, fetch this from a database
  // Sorting by newest first
  return [...mockQuoteRequests].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export default async function AdminQuotesPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  const quotes = await getQuotes();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Quote Requests</h1>
        <p className="text-muted-foreground">Manage and review all submitted project quotes.</p>
      </div>
      
      <QuoteList initialQuotes={quotes} />
    </div>
  );
}
