
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { researchAreasList } from '@/data/mock';
import type { Topic } from '@/lib/types';
import { StyledXperts } from '@/components/layout/StyledXperts';

export default function ResearchPage() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight mb-3 flex items-center justify-center md:justify-start">
          <BookOpen className="h-10 w-10 mr-3 text-primary" />
          Research Areas
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
          HDM Business Consulting delivers in-depth research and analysis to drive client success through informed strategic decision-making and operational excellence.
        </p>
      </div>

      <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-6">Our Expertise Includes:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreasList.map((area: Topic) => (
            <Card key={area.id} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 bg-secondary/30 dark:bg-secondary/20 rounded-lg overflow-hidden">
              <CardHeader className="p-4 flex-grow">
                <div className="p-2 bg-primary/20 rounded-md w-fit mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-md font-medium text-foreground">{area.name}</CardTitle>
              </CardHeader>
              <CardFooter className="p-4 bg-background/50 border-t">
                 <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                    <Link href={`/professionals?researchTopic=${encodeURIComponent(area.name)}`}>
                      Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-foreground/80 leading-relaxed">
          HDM provide rigorous, data-driven, and actionable insights with a client-centric approach, enabling organizations to optimize operations, enhance efficiency, mitigate risks, and achieve sustainable growth.
        </p>
      </div>
    </div>
  );
}
