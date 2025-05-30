
import { mockProfessionals } from '@/data/mock';
import type { Professional } from '@/lib/types';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';
import { PortfolioItemCard } from '@/components/professionals/PortfolioItemCard';
import { ProfessionalDetailsClient } from '@/components/professionals/ProfessionalDetailsClient';
import { notFound } from 'next/navigation';

async function getProfessionalById(id: string): Promise<Professional | undefined> {
  // Simulate API call
  console.log('[Server Component] getProfessionalById called with ID:', id);
  console.log('[Server Component] Available Professional IDs in mockProfessionals:', mockProfessionals.map(p => p.id));
  const professional = mockProfessionals.find(p => p.id === id);
  if (!professional) {
    console.error(`[Server Component] Professional with ID "${id}" not found in mockProfessionals.`);
  }
  return professional;
}

export default async function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  console.log('[Server Component] ProfessionalProfilePage rendering for params.id:', params.id);
  const professional = await getProfessionalById(params.id);

  if (!professional) {
    console.log(`[Server Component] Triggering notFound() for ID: ${params.id}`);
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content - Professional Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Card */}
          <Card className="overflow-hidden shadow-xl">
            <div className="relative h-48 w-full bg-gradient-to-r from-primary/30 to-accent/30">
              <Image
                src={professional.avatarUrl || `/hdm-xperts-logo.png`}
                alt={`${professional.name}'s banner`}
                layout="fill"
                objectFit="cover"
                className="opacity-50"
                data-ai-hint="modern workspace"
              />
            </div>
            <CardContent className="p-6 relative -mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
                <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                  <AvatarImage src={professional.avatarUrl || `/hdm-xperts-logo.png`} alt={professional.name} data-ai-hint="professional portrait" />
                  <AvatarFallback className="text-4xl">{professional.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-bold">{professional.name}</h1>
                  <p className="text-lg text-muted-foreground flex items-center justify-center sm:justify-start mt-1">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" /> {professional.industry}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>About {professional.name.split(' ')[0]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 whitespace-pre-line">{professional.bio}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {professional.location && (
                  <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-muted-foreground" /> <strong>Location:</strong>&nbsp; {professional.location}</div>
                )}
                <div className="flex items-center"><CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" /> <strong>Experience:</strong>&nbsp; {professional.experienceYears} years</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 mt-3">Skills & Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {professional.expertise.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Services Offered Section */}
          {professional.servicesOffered && professional.servicesOffered.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader><CardTitle>Services Offered</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {professional.servicesOffered.map(service => (
                  <div key={service.id} className="p-4 border rounded-lg bg-card hover:bg-secondary/50 transition-colors">
                    <h4 className="font-semibold text-lg">{service.name}</h4>
                    {service.price && <p className="text-md text-primary font-medium">{service.price}</p>}
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Portfolio Section */}
          {professional.portfolio && professional.portfolio.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>A showcase of {professional.name.split(' ')[0]}'s recent work.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professional.portfolio.map((item) => (
                  <PortfolioItemCard key={item.id} item={item} />
                ))}
              </CardContent>
            </Card>
          )}
          
          {/* Reviews Section (Placeholder) */}
          <Card className="shadow-lg">
            <CardHeader><CardTitle>Client Reviews</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Client reviews are not publicly displayed. Quotes are managed by admin.</p>
            </CardContent>
          </Card>

        </div>

        {/* Sidebar - Contact / Get Quote */}
        <ProfessionalDetailsClient professional={professional} />
      </div>
    </div>
  );
}
