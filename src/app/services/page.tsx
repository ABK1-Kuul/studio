
import { mockServices } from '@/data/mock';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/types';

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Explore the range of expert services offered by HDM Xperts professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockServices.map((service: Service) => (
          <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
              {service.price && (
                <p className="mt-3 text-sm font-semibold text-primary">
                  {service.price}
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/professionals?serviceId=${service.id}&serviceName=${encodeURIComponent(service.name)}`}>
                  Find Professionals <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

