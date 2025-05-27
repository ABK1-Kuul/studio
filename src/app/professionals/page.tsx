
import { Suspense } from 'react';
import ProfessionalsClientContentWrapper from './ProfessionalsClientContent';
import { Skeleton } from '@/components/ui/skeleton';

// This page is now a Server Component that wraps the client content with Suspense.
export default function ProfessionalsPage() {
  return (
    <Suspense fallback={
      <div className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <Skeleton className="h-32 w-full rounded-lg" /> {/* Placeholder for filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3 p-4 border rounded-lg shadow-sm bg-card">
              <Skeleton className="h-24 w-24 rounded-full mx-auto" />
              <div className="space-y-2 mt-3">
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-5/6 mx-auto mt-2" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
              <Skeleton className="h-10 w-1/2 mt-4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    }>
      <ProfessionalsClientContentWrapper />
    </Suspense>
  );
}
