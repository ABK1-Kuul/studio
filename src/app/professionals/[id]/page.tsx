import { mockProfessionals } from '@/data/mock';
import type { Professional } from '@/lib/types';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Mail, Phone, Star, CalendarDays, DollarSign } from 'lucide-react';
import { PortfolioItemCard } from '@/components/professionals/PortfolioItemCard';
import { ProfessionalDetailsClient } from '@/components/professionals/ProfessionalDetailsClient';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';

async function getProfessionalById(id: string): Promise<Professional | undefined> {
  // Simulate API call
  return mockProfessionals.find(p => p.id === id);
}

export default async function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const professional = await getProfessionalById(params.id);

  if (!professional) {
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
              {/* Optional banner image here, for now a gradient */}
              <Image
                src={`https://picsum.photos/seed/${professional.id}_banner/1200/300`}
                alt={`${professional.name}'s banner`}
                layout="fill"
                objectFit="cover"
                className="opacity-50"
                data-ai-hint="professional banner"
              />
            </div>
            <CardContent className="p-6 relative -mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
                <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                  <AvatarImage src={professional.avatarUrl || `https://picsum.photos/seed/${professional.id}/200/200`} alt={professional.name} data-ai-hint="professional avatar" />
                  <AvatarFallback className="text-4xl">{professional.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-bold">{professional.name}</h1>
                  <p className="text-lg text-muted-foreground flex items-center justify-center sm:justify-start mt-1">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" /> {professional.industry}
                  </p>
                  {/* Mock Rating */}
                  <div className="flex items-center justify-center sm:justify-start mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(4.7 stars from 82 reviews)</span>
                  </div>
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
                {professional.hourlyRate && (
                  <div className="flex items-center"><DollarSign className="h-4 w-4 mr-2 text-muted-foreground" /> <strong>Rate:</strong>&nbsp; ${professional.hourlyRate}/hr</div>
                )}
                <div className="flex items-center"><Mail className="h-4 w-4 mr-2 text-muted-foreground" /> <strong>Email:</strong>&nbsp; {professional.email}</div>
                {professional.phone && (
                   <div className="flex items-center"><Phone className="h-4 w-4 mr-2 text-muted-foreground" /> <strong>Phone:</strong>&nbsp; {professional.phone}</div>
                )}
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
          
          {/* Services Offered Section - if exists on professional object */}
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
              <p className="text-muted-foreground">Client reviews will be displayed here. (Coming Soon)</p>
              {/* Example Review Structure
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="font-semibold">Excellent Work!</p>
                <p className="text-sm text-muted-foreground mb-1">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&quot; - Jane C.</p>
              </div>
              */}
            </CardContent>
          </Card>

        </div>

        {/* Sidebar - Contact / Get Quote */}
        <ProfessionalDetailsClient professional={professional} />
      </div>
    </div>
  );
}

// Generate static paths for mock professionals if needed for build performance
// export async function generateStaticParams() {
//   return mockProfessionals.map((professional) => ({
//     id: professional.id,
//   }));
// }
