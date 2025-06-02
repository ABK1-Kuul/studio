
import type { Professional } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'; // Removed Star

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        <Avatar className="h-20 w-20 border-2 border-primary">
          <AvatarImage 
            src={professional.avatarUrl || `https://picsum.photos/seed/${professional.id}/200/200`} 
            alt={professional.name} 
            data-ai-hint={professional.avatarUrl && professional.avatarUrl.includes('picsum.photos') ? "professional avatar" : undefined}
          />
          <AvatarFallback>{professional.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl mb-1">{professional.name}</CardTitle>
          <CardDescription className="flex items-center text-sm text-muted-foreground mb-1">
            <Briefcase className="h-4 w-4 mr-1.5" /> {professional.industry}
          </CardDescription>
          {professional.location && (
            <CardDescription className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1.5" /> {professional.location}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-sm text-foreground/80 line-clamp-3 mb-3">{professional.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {professional.expertise.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
          ))}
          {professional.expertise.length > 3 && (
            <Badge variant="secondary" className="font-normal">+{professional.expertise.length - 3} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex justify-end items-center w-full"> {/* Changed justify-between to justify-end */}
          {/* Rating display removed */}
          <Button asChild size="sm">
            <Link href={`/professionals/${professional.id}`}>
              View Profile <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
