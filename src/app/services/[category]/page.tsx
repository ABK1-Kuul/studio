
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { mockServices, researchAreasList, businessTrainingAreasList, itTrainingAreasList } from '@/data/mock';
import type { Service, Topic, TrainingTopic } from '@/lib/types';
import { notFound } from 'next/navigation';
import { StyledXperts } from '@/components/layout/StyledXperts';

interface CategoryDetails {
  title: string;
  icon: React.ElementType;
  intro: string;
  items: (Service | Topic | TrainingTopic)[];
  itemType: 'service' | 'research' | 'training';
}

const categoryMap: Record<string, () => CategoryDetails> = {
  consultation: () => ({
    title: 'Consultation Services',
    icon: Briefcase,
    intro: 'Explore our comprehensive range of expert consultation services designed to address your specific business needs and drive success.',
    items: mockServices,
    itemType: 'service',
  }),
  research: () => ({
    title: 'Research Areas',
    icon: BookOpen,
    intro: 'HDM Xperts delivers in-depth research and analysis across various domains to provide actionable insights for strategic decision-making.',
    items: researchAreasList,
    itemType: 'research',
  }),
  training: () => ({
    title: 'Training Programs',
    icon: GraduationCap,
    intro: 'Empower your workforce with our cutting-edge business and IT training programs, tailored to enhance skills and foster continuous growth.',
    items: [...businessTrainingAreasList, ...itTrainingAreasList],
    itemType: 'training',
  }),
};

const otherCategories = (current: string) => {
  const all = [
    { id: 'consultation', title: 'Consultation Services', cta: 'Explore Consultations', link: '/services/consultation', icon: Briefcase },
    { id: 'research', title: 'Research Areas', cta: 'Explore Research Areas', link: '/services/research', icon: BookOpen },
    { id: 'training', title: 'Training Programs', cta: 'Explore Training Programs', link: '/services/training', icon: GraduationCap },
  ];
  return all.filter(cat => cat.id !== current);
};


export default function ServiceCategoryPage({ params }: { params: { category: string } }) {
  const categoryKey = params.category.toLowerCase();
  const categoryDetailsFn = categoryMap[categoryKey];

  if (!categoryDetailsFn) {
    notFound();
  }
  const category = categoryDetailsFn();

  return (
    <div className="space-y-12 py-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight mb-3 flex items-center justify-center md:justify-start">
          <category.icon className="h-10 w-10 mr-3 text-primary" />
          {category.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
          {category.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <Card key={item.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
               <div className="p-3 bg-primary/20 rounded-md w-fit mb-3">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              {(item as Service).description && (
                <CardDescription className="text-foreground/80 line-clamp-4">
                  {(item as Service).description}
                </CardDescription>
              )}
              {(item as Service).price && category.itemType === 'service' && (
                <p className="mt-4 text-sm font-semibold text-primary">
                  {(item as Service).price}
                </p>
              )}
            </CardContent>
            <CardFooter className="p-4 bg-secondary/30 dark:bg-secondary/10 border-t border-border">
              <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                <Link 
                  href={
                    category.itemType === 'service' ? `/professionals?serviceId=${item.id}&serviceName=${encodeURIComponent(item.name)}` :
                    category.itemType === 'research' ? `/professionals?researchTopic=${encodeURIComponent(item.name)}` :
                    `/professionals?trainingTopic=${encodeURIComponent(item.name)}`
                  }
                >
                  Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {category.items.length === 0 && (
        <p className="text-center text-muted-foreground py-8 text-lg">
          No {category.itemType} items currently listed in this category.
        </p>
      )}

      <div className="mt-16 pt-10 border-t">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
          Explore Other Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherCategories(categoryKey).map(otherCat => (
            <Card key={otherCat.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/50 dark:bg-secondary/20 rounded-lg">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full w-fit mb-3">
                  <otherCat.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl">{otherCat.title}</CardTitle>
              </CardHeader>
              <CardFooter className="justify-center pb-6">
                <Button asChild size="lg">
                  <Link href={otherCat.link}>
                    {otherCat.cta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category: category,
  }));
}
