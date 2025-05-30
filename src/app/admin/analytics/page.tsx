
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export default async function PlatformAnalyticsPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Platform Analytics</h1>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Key Metrics Overview</CardTitle>
          <CardDescription>A summary of important platform statistics and trends.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Key analytics dashboards and reports will be displayed here. This section is currently under development.
          </p>
          {/* Placeholder for future charts and data visualizations */}
        </CardContent>
      </Card>

       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>User Activity</CardTitle>
          <CardDescription>Insights into user engagement and behavior.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            User activity reports will be available here.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Service Request Trends</CardTitle>
          <CardDescription>Analytics related to service requests and Xpert matching.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Service request analytics will be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
