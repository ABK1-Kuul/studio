import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Edit3, Eye, BarChart2, MessageSquare } from 'lucide-react';
import { mockProfessionals } from '@/data/mock'; // Assuming professional user is one of these

export default async function ProfessionalDashboardPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'professional') {
    redirect('/login');
  }

  // Find the professional's data from mock data (if exists)
  const professionalData = mockProfessionals.find(p => p.email === user.email);

  // Mock stats
  const stats = {
    profileViews: professionalData ? (professionalData.id.charCodeAt(0) * 37) % 300 + 50 : 128, // Some mock views
    quoteRequests: professionalData ? (professionalData.id.charCodeAt(0) * 3) % 10 + 2 : 5, // Mock quote requests for this professional
    completedProjects: professionalData ? professionalData.portfolio.length : 3,
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Welcome, {user.name}!</h1>
      <p className="text-muted-foreground">This is your professional dashboard. Manage your profile, view insights, and connect with clients.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.profileViews}</div>
            <p className="text-xs text-muted-foreground">+10% from last week</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Quote Requests</CardTitle>
            <MessageSquare className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.quoteRequests}</div>
            {/* <p className="text-xs text-muted-foreground">2 new today</p> */}
            <Button variant="link" asChild className="p-0 h-auto text-xs">
              <span>
                <Link href="#">View Requests</Link> {/* Placeholder link */}
              </span>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
            <BarChart2 className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedProjects}</div>
            <p className="text-xs text-muted-foreground">Showcased in portfolio</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Manage Your Presence</CardTitle>
          <CardDescription>Keep your information up-to-date to attract more clients.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Button variant="default" size="lg" asChild className="justify-start gap-3 p-6 text-left h-auto shadow-md hover:shadow-lg transition-shadow">
            <Link href="/professional/profile">
              <Edit3 className="h-6 w-6" />
              <div>
                <p className="font-semibold">Edit Your Profile</p>
                <p className="text-sm text-primary-foreground/80">Update skills, bio, and portfolio.</p>
              </div>
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="justify-start gap-3 p-6 text-left h-auto shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/professionals/${user.id}`}> {/* Assuming user.id matches professional.id */}
              <Eye className="h-6 w-6" />
              <div>
                <p className="font-semibold">View Public Profile</p>
                <p className="text-sm text-muted-foreground">See how clients view your profile.</p>
              </div>
            </Link>
          </Button>
        </CardContent>
      </Card>
      
      {/* Placeholder for messages or project updates */}
       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
          <CardDescription>Latest communications with potential clients.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your recent messages will appear here.</p>
           {/* Example message:
          <div className="border-b py-3">
            <div className="flex justify-between items-center">
              <p className="font-medium">Client Inquiry: Project X</p>
              <Badge variant="outline">New</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">John Doe is interested in your services for...</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-1">Reply</Button>
          </div>
          */}
        </CardContent>
      </Card>
    </div>
  );
}