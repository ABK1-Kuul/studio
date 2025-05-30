
"use client";

import { useState, useEffect } from 'react';
import { Users, Search, GraduationCap, Zap } from 'lucide-react'; // Added Zap as a default/transition
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceVisual {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
}

const visuals: ServiceVisual[] = [
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Connecting you with seasoned Xperts for strategic advice.',
    bgColorClass: 'bg-primary/10',
    textColorClass: 'text-primary',
  },
  {
    icon: Search,
    title: 'In-Depth Research',
    description: 'Leveraging data-driven insights for informed decisions.',
    bgColorClass: 'bg-accent/10',
    textColorClass: 'text-accent',
  },
  {
    icon: GraduationCap,
    title: 'Targeted Training',
    description: 'Empowering teams with specialized knowledge and skills.',
    bgColorClass: 'bg-emerald-500/10', // A distinct color for training
    textColorClass: 'text-emerald-600 dark:text-emerald-500',
  },
];

export function AnimatedServicesVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % visuals.length);
        setFade(true); // Start fade in
      }, 500); // Duration of fade-out transition
    }, 4000); // Change visual every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentVisual = visuals[currentIndex];

  return (
    <Card className={cn(
      "mx-auto aspect-video w-full overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ease-in-out",
      currentVisual.bgColorClass,
      fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
    )}>
      <CardContent className="flex flex-col items-center justify-center">
        <currentVisual.icon className={cn("h-16 w-16 mb-4", currentVisual.textColorClass)} />
        <h3 className={cn("text-2xl font-semibold mb-2", currentVisual.textColorClass)}>
          {currentVisual.title}
        </h3>
        <p className="text-foreground/80 max-w-xs">
          {currentVisual.description}
        </p>
      </CardContent>
    </Card>
  );
}
