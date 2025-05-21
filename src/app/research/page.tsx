
import { BookOpen, CheckCircle } from 'lucide-react';

export default function ResearchPage() {
  const researchAreas = [
    'New business feasibility studies',
    'IT infrastructure assessments (including maturity and capacity)',
    'Cybersecurity Posture assessment',
    'Cybersecurity strategy and implementation',
    'Corporate/business/function-level strategic development',
    'IT roadmap design',
    'Employee/customer satisfaction surveys',
    'Organizational culture/behavior/structure analysis',
    'Risk maturity level assessments',
  ];

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
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Expertise Includes:</h2>
        <ul className="space-y-3 text-foreground/90">
          {researchAreas.map((area, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-foreground/80 leading-relaxed">
          HDM provide rigorous, data-driven, and actionable insights with a client-centric approach, enabling organizations to optimize operations, enhance efficiency, mitigate risks, and achieve sustainable growth.
        </p>
      </div>
    </div>
  );
}
