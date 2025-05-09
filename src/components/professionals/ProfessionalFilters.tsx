"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import type { Professional } from '@/lib/types';

interface ProfessionalFiltersProps {
  allProfessionals: Professional[]; // For deriving filter options
  onFilterChange: (filters: { searchTerm: string; industry: string; expertise: string }) => void;
}

export function ProfessionalFilters({ allProfessionals, onFilterChange }: ProfessionalFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [industry, setIndustry] = useState('');
  const [expertise, setExpertise] = useState('');

  const industries = Array.from(new Set(allProfessionals.map(p => p.industry))).sort();
  const allExpertise = Array.from(new Set(allProfessionals.flatMap(p => p.expertise))).sort();

  const handleSearch = () => {
    onFilterChange({ searchTerm, industry, expertise });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setIndustry('');
    setExpertise('');
    onFilterChange({ searchTerm: '', industry: '', expertise: '' });
  };

  return (
    <div className="p-6 mb-8 bg-card border rounded-lg shadow-sm space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div className="lg:col-span-2">
          <label htmlFor="search-term" className="block text-sm font-medium text-foreground mb-1">Search by Name or Keyword</label>
          <Input
            id="search-term"
            type="text"
            placeholder="e.g., John Doe, React Developer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10"
          />
        </div>
        <div>
          <label htmlFor="industry-select" className="block text-sm font-medium text-foreground mb-1">Industry</label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger id="industry-select" className="h-10">
              <SelectValue placeholder="All Industries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Industries</SelectItem>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>{ind}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="expertise-select" className="block text-sm font-medium text-foreground mb-1">Expertise</label>
          <Select value={expertise} onValueChange={setExpertise}>
            <SelectTrigger id="expertise-select" className="h-10">
              <SelectValue placeholder="All Expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Expertise</SelectItem>
              {allExpertise.map((exp) => (
                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button onClick={handleSearch} className="w-full sm:w-auto">
          <Search className="mr-2 h-4 w-4" /> Apply Filters
        </Button>
        <Button variant="outline" onClick={clearFilters} className="w-full sm:w-auto">
          <X className="mr-2 h-4 w-4" /> Clear Filters
        </Button>
      </div>
    </div>
  );
}
