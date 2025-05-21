
import { GraduationCap, CheckCircle } from 'lucide-react';

export default function TrainingPage() {
  const businessTrainingAreas = [
    {
      title: "Leadership Development",
      description: "Cultivate effective leaders at all levels with programs focused on strategic thinking, communication, decision-making, and team management."
    },
    {
      title: "Project Management",
      description: "Equip your teams with the tools and techniques to plan, execute, and deliver projects successfully, on time and within budget."
    },
    {
      title: "Business Communication",
      description: "Enhance communication skills across your organization, including written, verbal, and presentation skills, to foster collaboration and improve client relations."
    },
    {
      title: "Sales and Marketing",
      description: "Drive revenue growth with training programs focused on sales strategies, customer relationship management, digital marketing, and market analysis."
    },
    {
      title: "Operational Excellence",
      description: "Improve efficiency and productivity with training in process improvement methodologies, change management, and quality control."
    }
  ];

  const itTrainingAreas = [
    {
      title: "IT Infrastructure Management",
      description: "Ensure your IT teams have the expertise to manage and optimize your IT infrastructure, including network administration, cloud computing, and cybersecurity."
    },
    {
      title: "Cybersecurity Training",
      description: "Equip staff to identify and address potential security threats."
    },
    {
      title: "IT Service Management",
      description: "Enhance IT service delivery with training in ITIL frameworks and best practices."
    },
    {
      title: "Data Analytics",
      description: "Empower your employees to leverage data for strategic decision-making with training in data analysis tools, techniques, and visualization."
    },
    {
      title: "Software Development",
      description: "Keep your development teams up-to-date with the latest programming languages, frameworks, and methodologies."
    }
  ];

  const trainingApproachPoints = [
    "Customized Solutions: We work closely with you to understand your specific training needs and develop tailored programs that align with your business objectives.",
    "Expert Instructors: Our training is delivered by experienced industry professionals with a proven track record of success.",
    "Interactive Learning: We utilize a variety of engaging training methods, including workshops, simulations, case studies, and hands-on exercises.",
    "Continuous Support: We provide ongoing support and resources to ensure that your teams can effectively apply their new knowledge and skills."
  ];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6">Business Training Areas</h2>
          <ul className="space-y-4">
            {businessTrainingAreas.map((area, index) => (
              <li key={index} className="space-y-1">
                <h3 className="text-lg font-medium text-foreground/90 flex items-start">
                   <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{area.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6">IT Training Areas</h2>
          <ul className="space-y-4">
            {itTrainingAreas.map((area, index) => (
              <li key={index} className="space-y-1">
                <h3 className="text-lg font-medium text-foreground/90 flex items-start">
                   <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{area.description}</p>
              </li>
            ))}
          </ul>
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
