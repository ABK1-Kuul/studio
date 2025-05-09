import type { PortfolioItem } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {item.imageUrl && (
        <div className="aspect-video relative w-full">
          <Image 
            src={item.imageUrl} 
            alt={item.title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="portfolio project"
          />
        </div>
      )}
      <CardHeader className="pt-4">
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{item.description}</CardDescription>
      </CardContent>
      {item.projectUrl && (
        <CardFooter>
          <Button variant="outline" asChild size="sm" className="w-full">
            <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
