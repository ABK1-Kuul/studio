"use client"; // Top-level client component to manage state for filtering

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const pros = await fetchProfessionals();
      setAllProfessionals(pros);
      setFilteredProfessionals(pros);
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleFilterChange = (filters: { searchTerm: string; industry: string; expertise: string }) => {
    setIsLoading(true);
    let result = allProfessionals;

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.bio.toLowerCase().includes(term) ||
        p.expertise.some(e => e.toLowerCase().includes(term))
      );
    }

    if (filters.industry) {
      result = result.filter(p => p.industry === filters.industry);
    }

    if (filters.expertise) {
      result = result.filter(p => p.expertise.includes(filters.expertise));
    }
    
    // Simulate filtering delay
    setTimeout(() => {
      setFilteredProfessionals(result);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Meet Our Professionals</h1>
        <p className="text-lg text-muted-foreground">
          Discover talented experts ready to bring your projects to life.
        </p>
      </div>

      <ProfessionalFilters allProfessionals={allProfessionals} onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <Skeleton className="h-10 w-1/2 self-end" />
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
          <p className="text-muted-foreground">Try adjusting your search filters or check back later.</p>
        </div>
      )}
    </div>
  );
}
