
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { StyledXperts } from '@/components/layout/StyledXperts';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  ctaText: string;
  link: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'consultation',
    title: 'Consultation Services',
    icon: Briefcase,
    description: 'Get expert advice and tailored solutions from our experienced Xperts to address your business challenges and achieve your strategic goals.',
    ctaText: 'Explore Consultations',
    link: '/services/consultation',
  },
  {
    id: 'research',
    title: 'Research Areas',
    icon: BookOpen,
    description: 'Commission in-depth research and analysis across various domains to gain valuable insights and make informed decisions.',
    ctaText: 'Explore Research Areas',
    link: '/services/research',
  },
  {
    id: 'training',
    title: 'Training Programs',
    icon: GraduationCap,
    description: 'Upskill your team or yourself with our comprehensive professional training programs designed to enhance capabilities and foster growth.',
    ctaText: 'Explore Training Programs',
    link: '/services/training',
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight mb-3 flex items-center justify-center md:justify-start">
          <Briefcase className="h-10 w-10 mr-3 text-primary" />
          Our Offerings
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
          Discover the range of expert services, research capabilities, and training programs offered by HDM <StyledXperts /> to help you achieve excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category) => (
          <Card key={category.id} className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
              <div className="p-3 bg-primary/20 rounded-md w-fit mb-4">
                <category.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardDescription className="text-foreground/80 text-base">
                {category.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/30 dark:bg-secondary/10 border-t border-border">
              <Button asChild className="w-full shadow-lg hover:shadow-primary/50 transition-shadow" size="lg">
                <Link href={category.link}>
                  {category.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
