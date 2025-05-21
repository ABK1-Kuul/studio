
"use client"; 

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProfessionalCard } from '@/components/professionals/ProfessionalCard';
import { ProfessionalFilters } from '@/components/professionals/ProfessionalFilters';
import { mockProfessionals } from '@/data/mock';
import type { Professional } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { StyledXperts } from '@/components/layout/StyledXperts';

// Simulate API call for fetching Xperts
async function fetchXperts(): Promise<Professional[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProfessionals);
    }, 500); // Simulate network delay
  });
}

export default function ProfessionalsPage() {
  const [allXperts, setAllXperts] = useState<Professional[]>([]);
  const [filteredXperts, setFilteredXperts] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSearchFilters, setCurrentSearchFilters] = useState({ searchTerm: '', industry: '', expertise: '' });
  const [activeFilterTopic, setActiveFilterTopic] = useState<string | null>(null);


  const searchParams = useSearchParams();
  const serviceIdQuery = searchParams.get('serviceId');
  const serviceNameQuery = searchParams.get('serviceName');
  const researchTopicQuery = searchParams.get('researchTopic');
  const trainingTopicQuery = searchParams.get('trainingTopic');


  // Effect to load all Xperts initially
  useEffect(() => {
    async function loadData() {
      setIsLoading(true); 
      const pros = await fetchXperts();
      setAllXperts(pros);
      setIsLoading(false); 
    }
    loadData();
  }, []); 

  // Effect to apply all filters when data or filter criteria change
  useEffect(() => {
    setIsLoading(true); 
    setActiveFilterTopic(null); // Reset active topic display
    
    let result = [...allXperts];

    if (serviceIdQuery) {
      result = result.filter(p =>
        p.servicesOffered?.some(s => s.id === serviceIdQuery)
      );
      if (serviceNameQuery) setActiveFilterTopic(decodeURIComponent(serviceNameQuery));
    } else if (researchTopicQuery) {
       const decodedResearchTopic = decodeURIComponent(researchTopicQuery);
       result = result.filter(p =>
        p.researchSpecialties?.includes(decodedResearchTopic)
      );
      setActiveFilterTopic(decodedResearchTopic);
    } else if (trainingTopicQuery) {
      const decodedTrainingTopic = decodeURIComponent(trainingTopicQuery);
      result = result.filter(p =>
        p.trainingSpecialties?.includes(decodedTrainingTopic)
      );
      setActiveFilterTopic(decodedTrainingTopic);
    }


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

    const filterTimeout = setTimeout(() => {
      setFilteredXperts(result);
      setIsLoading(false); 
    }, 300);

    return () => clearTimeout(filterTimeout);

  }, [allXperts, serviceIdQuery, serviceNameQuery, researchTopicQuery, trainingTopicQuery, currentSearchFilters]);

  const handleFilterChange = (filters: { searchTerm: string; industry: string; expertise: string }) => {
    setCurrentSearchFilters(filters);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Meet Our <StyledXperts /></h1>
        {activeFilterTopic && !isLoading && (
          <h2 className="text-2xl font-semibold text-accent mb-1">
            Displaying <StyledXperts /> for: {activeFilterTopic}
          </h2>
        )}
        <p className="text-lg text-muted-foreground">
          Discover talented <StyledXperts /> ready to bring your projects to life.
        </p>
      </div>

      <ProfessionalFilters allProfessionals={allXperts} onFilterChange={handleFilterChange} />

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
      ) : filteredXperts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredXperts.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No <StyledXperts /> Found</h2>
          <p className="text-muted-foreground">
            {activeFilterTopic ? `No Xperts match the topic "${activeFilterTopic}" and your current filters.` : "Try adjusting your search filters or check back later."}
          </p>
        </div>
      )}
    </div>
  );
}
