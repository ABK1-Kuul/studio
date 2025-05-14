
import { mockServices } from '@/data/mock';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react'; 
import type { Service } from '@/lib/types';
import { StyledXperts } from '@/components/layout/StyledXperts';

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Explore the range of expert services offered by HDM Xperts <StyledXperts />.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockServices.map((service: Service) => (
          <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
              <div className="p-3 bg-primary/20 rounded-md w-fit mb-3">
                <Briefcase className="h-8 w-8 text-primary" /> 
              </div>
              <CardTitle className="text-xl text-foreground">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardDescription className="text-foreground/80">{service.description}</CardDescription>
              {service.price && (
                <p className="mt-4 text-sm font-semibold text-primary">
                  Price: {service.price}
                </p>
              )}
            </CardContent>
            <CardFooter className="p-6 bg-secondary/30 dark:bg-secondary/10 border-t border-border">
              <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                <Link href={`/professionals?serviceId=${service.id}&serviceName=${encodeURIComponent(service.name)}`}>
                  Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
