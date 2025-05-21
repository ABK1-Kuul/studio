
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Search, UserPlus, FileText, LayoutGrid, BookOpen, GraduationCap, Users, TrendingUp, Brain } from "lucide-react";
import { mockServices } from '@/data/mock'; 
import type { Service } from "@/lib/types"; 
import { StyledXperts } from "@/components/layout/StyledXperts";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Connect with Top <StyledXperts />
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-6">
            HDM <StyledXperts /> is your premier platform to find skilled experts for your projects or showcase your expertise to the world.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/professionals">
                Find an Xpert <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="/signup"> 
                Join as a Professional <UserPlus className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            Why Choose HDM <StyledXperts />?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit mb-3">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Extensive Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easily search and filter through a diverse range of <StyledXperts />. Find the perfect match for your project based on industry and expertise.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit mb-3">
                   <UserPlus className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Showcase Your Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <StyledXperts /> can create detailed profiles, highlight their experience, and build impressive portfolios to attract project opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit mb-3">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Streamlined Service Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Request services directly from <StyledXperts />. A simple, admin-mediated process to get your project started.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-3 bg-accent/10 rounded-full w-fit mb-4">
              <LayoutGrid className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Core Services
            </h2>
            <p className="mt-4 max-w-[700px] text-foreground/70 md:text-lg">
              Discover specialized consulting services tailored to elevate your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.slice(0,3).map((service: Service) => ( 
              <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <CardTitle className="text-xl leading-snug text-foreground">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardDescription className="line-clamp-4 text-foreground/80">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 bg-secondary/30 dark:bg-secondary/10 border-t border-border">
                  <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow" variant="default">
                    <Link href={`/professionals?serviceId=${service.id}&serviceName=${encodeURIComponent(service.name)}`}>
                      Find <StyledXperts /> <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {mockServices.length > 3 && (
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="default" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Unlock Potential: Research & Training Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unlock Potential: Research & Training
            </h2>
            <p className="mt-4 max-w-[700px] text-foreground/70 md:text-lg">
              Gain strategic insights and empower your teams with our specialized research and training programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Strategic Research & Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription>
                  Leverage our in-depth research capabilities, from new business feasibility studies to cybersecurity posture assessments, to make informed decisions and drive growth.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/research">
                    Explore Research Areas <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full w-fit mb-3">
                  <GraduationCap className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl">Customized Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription>
                  Enhance your team's capabilities with our comprehensive Business and IT training. We tailor programs to meet your specific needs and foster continuous improvement.
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/training">
                    Discover Training Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mb-4 inline-block">
                <Brain className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Partner With HDM <StyledXperts />?
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Clients choose HDM Business Consulting for our unique combination of deep industry expertise and rigorous research methodologies. Our diverse team of business and IT <StyledXperts /> leverages extensive industry experience to deliver actionable results. We partner with our clients to understand their specific challenges and opportunities, providing tailored solutions that drive sustainable growth and competitive advantage.
            </p>
            <div className="mt-8 p-6 border-l-4 border-primary bg-primary/10 rounded-r-lg shadow-lg">
              <p className="text-xl font-semibold italic text-primary">
                &ldquo;Diverse minds, single solution.&rdquo;
              </p>
              <p className="mt-2 text-sm text-primary/80">
                &mdash; Our Commitment to Integrated Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="w-full py-12 md:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <UserPlus className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Xperts: Join & Showcase</h3>
              <p className="text-foreground/70">Are you an expert? Sign up, create a comprehensive profile, detail your services, and highlight your unique skills to reach potential clients.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <Search className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Clients: Discover Talent</h3>
              <p className="text-foreground/70">Looking for expertise? Browse our directory of skilled <StyledXperts />, filter by industry or specialty, and find the perfect match for your project needs.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <FileText className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Connect: Request Services</h3>
              <p className="text-foreground/70">Found an <StyledXperts /> or a service you need? Easily submit a service request. Our admin team will facilitate the connection to get your project moving.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Collaborate & Achieve</h3>
              <p className="text-foreground/70">Collaborate with top-tier <StyledXperts />, leverage their knowledge, and successfully complete your projects. For <StyledXperts />, this is where you deliver value and build your reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Team collaborating in a modern conference meeting setting"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
            height="310"
            src="https://placehold.co/550x310.png"
            data-ai-hint="conference meeting"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Empowering Connections
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Build Your Next Big Thing, Together.
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking for talent for your next project or a seasoned Xpert seeking new opportunities, HDM <StyledXperts /> provides the tools and network you need to succeed.
              </p>
            </div>
            <Button asChild size="lg" className="w-fit shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/signup">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

