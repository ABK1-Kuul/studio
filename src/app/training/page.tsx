
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { businessTrainingAreasList, itTrainingAreasList } from '@/data/mock';
import type { TrainingTopic } from '@/lib/types';
import { StyledXperts } from '@/components/layout/StyledXperts';


const trainingApproachPoints = [
    "Customized Solutions: We work closely with you to understand your specific training needs and develop tailored programs that align with your business objectives.",
    "Expert Instructors: Our training is delivered by experienced industry professionals with a proven track record of success.",
    "Interactive Learning: We utilize a variety of engaging training methods, including workshops, simulations, case studies, and hands-on exercises.",
    "Continuous Support: We provide ongoing support and resources to ensure that your teams can effectively apply their new knowledge and skills."
];

export default function TrainingPage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center md:justify-start">
          <GraduationCap className="h-10 w-10 mr-3 text-primary" />
          Training
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
          HDM Business Consulting enhances organizational capabilities through comprehensive Business and IT Training programs. We empower your workforce with the latest knowledge and skills, driving improved performance and fostering a culture of continuous growth. Our training solutions are tailored to meet the evolving demands of today's business landscape, ensuring your teams are equipped to excel.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">Business Training Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessTrainingAreasList.map((area: TrainingTopic) => (
              <Card key={area.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="p-3 bg-primary/20 rounded-md w-fit mb-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{area.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardDescription className="text-foreground/80">{area.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 bg-secondary/30 dark:bg-secondary/10 border-t">
                   <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                    <Link href={`/professionals?trainingTopic=${encodeURIComponent(area.name)}`}>
                       Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">IT Training Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itTrainingAreasList.map((area: TrainingTopic) => (
              <Card key={area.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="p-3 bg-primary/20 rounded-md w-fit mb-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{area.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardDescription className="text-foreground/80">{area.description}</CardDescription>
                </CardContent>
                 <CardFooter className="p-4 bg-secondary/30 dark:bg-secondary/10 border-t">
                   <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                    <Link href={`/professionals?trainingTopic=${encodeURIComponent(area.name)}`}>
                       Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-6">Our Training Approach</h2>
        <ul className="space-y-3 text-foreground/90">
          {trainingApproachPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-foreground/80 leading-relaxed text-center">
          Partner with HDM Business Consulting to invest in your greatest asset — your people — and achieve sustainable organizational success.
        </p>
      </section>
    </div>
  );
}
