import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Search, UserPlus, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Connect with Top Professionals
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-6">
            HDM ProConnect is your premier platform to find and collaborate with skilled experts across various industries.
            Build your dream team or showcase your expertise to the world.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/professionals">
                Find a Professional <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/50 transition-shadow">
              <Link href="/signup?role=professional">
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
            Why Choose HDM ProConnect?
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
                  Easily search and filter through a diverse range of professionals. Find the perfect match for your project based on industry, expertise, and location.
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
                  Professionals can create detailed profiles, highlight their experience, and build impressive portfolios to attract potential clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-md w-fit mb-3">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Streamlined Quoting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Request quotes directly from professionals or for specific services. A simple process to get your project started.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <UserPlus className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
              <p className="text-foreground/70">Create your account as a client or a professional.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <Search className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Discover/Showcase</h3>
              <p className="text-foreground/70">Clients find experts. Professionals build profiles.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <FileText className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Request Quote</h3>
              <p className="text-foreground/70">Clients request quotes for projects or services.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Collaborate</h3>
              <p className="text-foreground/70">Connect and start working on your projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for Image Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Collaboration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="https://picsum.photos/seed/collab/550/310"
            data-ai-hint="team collaboration"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Empowering Connections
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Build Your Next Big Thing, Together.
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're a startup looking for talent or a seasoned professional seeking new opportunities, HDM ProConnect provides the tools and network you need to succeed.
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
