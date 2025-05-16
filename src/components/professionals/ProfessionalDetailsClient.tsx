
"use client";

import type { Professional } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfessionalDetailsClientProps {
  professional: Professional;
}

export function ProfessionalDetailsClient({ professional }: ProfessionalDetailsClientProps) {
  return (
    <div className="space-y-6 lg:col-span-1 lg:sticky lg:top-24"> 
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Interested?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button asChild size="lg" className="w-full">
            <Link href={`/service-request?professionalId=${professional.id}&professionalName=${encodeURIComponent(professional.name)}`}>
              <FileText className="mr-2 h-5 w-5" /> Request Service
            </Link>
          </Button>
        </CardContent>
      </Card>

      {professional.servicesOffered && professional.servicesOffered.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Specific Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {professional.servicesOffered.map(service => (
              <div key={service.id} className="p-3 border rounded-md bg-secondary/30">
                <h4 className="font-semibold">{service.name}</h4>
                {service.price && <p className="text-sm text-primary font-medium">{service.price}</p>}
                <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                <Button asChild size="sm" variant="link" className="p-0 h-auto mt-2">
                  <Link href={`/service-request?serviceId=${service.id}&serviceName=${encodeURIComponent(service.name)}&professionalId=${professional.id}&professionalName=${encodeURIComponent(professional.name)}`}>
                    Request this service
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
