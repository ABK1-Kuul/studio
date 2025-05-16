
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, FileText, Settings, BarChart3 } from 'lucide-react';
import { StyledXperts } from '@/components/layout/StyledXperts';

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  // Mock data for dashboard
  const stats = {
    totalXperts: 150, 
    pendingServiceRequests: 12, // Changed from pendingQuotes
    totalUsers: 500,
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total <StyledXperts /></CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalXperts}</div>
            <p className="text-xs text-muted-foreground">+20 since last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Service Requests</CardTitle>
            <FileText className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingServiceRequests}</div>
            <Button variant="link" asChild className="p-0 h-auto text-xs">
              <Link href="/admin/service-requests">View all</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">+50 since last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage key areas of the platform.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button variant="outline" asChild className="justify-start gap-2 p-6 text-left h-auto">
            <Link href="#"> 
              <Users className="h-5 w-5" />
              Manage <StyledXperts />
            </Link>
          </Button>
          <Button variant="outline" asChild className="justify-start gap-2 p-6 text-left h-auto">
            <Link href="/admin/service-requests">
              <FileText className="h-5 w-5" />
              Review Service Requests
            </Link>
          </Button>
          <Button variant="outline" asChild className="justify-start gap-2 p-6 text-left h-auto">
            <Link href="#"> 
              <Settings className="h-5 w-5" />
              Platform Settings
            </Link>
          </Button>
           <Button variant="outline" asChild className="justify-start gap-2 p-6 text-left h-auto">
            <Link href="#"> 
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Overview of recent platform events.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Recent activity feed will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
