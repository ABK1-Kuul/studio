"use client"; 

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProfessionalCard } from '@/components/professionals/ProfessionalCard';
import { ProfessionalFilters } from '@/components/professionals/ProfessionalFilters';
import { mockProfessionals } from '@/data/mock';
import type { Professional } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

// Simulate API call for fetching professionals
async function fetchProfessionals(): Promise<Professional[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProfessionals);
    }, 500); // Simulate network delay
  });
}

export default function ProfessionalsPage() {
  const [allProfessionals, setAllProfessionals] = useState<Professional[]>([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSearchFilters, setCurrentSearchFilters] = useState({ searchTerm: '', industry: '', expertise: '' });

  const searchParams = useSearchParams();
  const serviceIdQuery = searchParams.get('serviceId');
  const serviceNameQuery = searchParams.get('serviceName');

  // Effect to load all professionals initially
  useEffect(() => {
    async function loadData() {
      setIsLoading(true); 
      const pros = await fetchProfessionals();
      setAllProfessionals(pros);
      setIsLoading(false); // Ensure isLoading is set to false after initial fetch
    }
    loadData();
  }, []); // Empty dependency array ensures this runs once on mount

  // Effect to apply all filters when data or filter criteria change
  useEffect(() => {
    // This effect handles filtering. It should show a loading state if filtering is slow.
    // The initial page load's loading state is handled by the first useEffect.
    
    setIsLoading(true); // Indicate filtering is in progress
    
    let result = [...allProfessionals];

    // 1. Apply service filter from URL
    if (serviceIdQuery) {
      result = result.filter(p =>
        p.servicesOffered?.some(s => s.id === serviceIdQuery)
      );
    }

    // 2. Apply filters from ProfessionalFilters component state
    if (currentSearchFilters.searchTerm) {
      const term = currentSearchFilters.searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.bio.toLowerCase().includes(term) ||
        p.expertise.some(e => e.toLowerCase().includes(term))
      );
    }
    if (currentSearchFilters.industry) {
      result = result.filter(p => p.industry === currentSearchFilters.industry);
    }
    if (currentSearchFilters.expertise) {
      result = result.filter(p => p.expertise.includes(currentSearchFilters.expertise));
    }

    // Simulate filtering delay for UX
    const filterTimeout = setTimeout(() => {
      setFilteredProfessionals(result);
      setIsLoading(false); // Filtering done
    }, 300);

    return () => clearTimeout(filterTimeout); // Cleanup timeout

  }, [allProfessionals, serviceIdQuery, currentSearchFilters]);

  const handleFilterChange = (filters: { searchTerm: string; industry: string; expertise: string }) => {
    setCurrentSearchFilters(filters);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Meet Our Professionals</h1>
        {serviceNameQuery && !isLoading && (
          <h2 className="text-2xl font-semibold text-accent mb-1">
            Displaying professionals for: {serviceNameQuery}
          </h2>
        )}
        <p className="text-lg text-muted-foreground">
          Discover talented experts ready to bring your projects to life.
        </p>
      </div>

      <ProfessionalFilters allProfessionals={allProfessionals} onFilterChange={handleFilterChange} />

      {isLoading ? (
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
      ) : filteredProfessionals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No Professionals Found</h2>
          <p className="text-muted-foreground">
            {serviceIdQuery ? "No professionals match this service and your current filters." : "Try adjusting your search filters or check back later."}
          </p>
        </div>
      )}
    </div>
  );
}

