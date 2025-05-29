
"use client";

import type { ServiceRequest } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Phone } from "lucide-react";

interface ServiceRequestListProps {
  initialServiceRequests: ServiceRequest[];
}

export function ServiceRequestList({ initialServiceRequests }: ServiceRequestListProps) {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(initialServiceRequests);
  const [filterStatus, setFilterStatus] = useState<ServiceRequest['status'] | 'all'>('all');

  const handleStatusChange = (serviceRequestId: string, newStatus: ServiceRequest['status']) => {
    setServiceRequests(prevRequests => 
      prevRequests.map(q => q.id === serviceRequestId ? { ...q, status: newStatus } : q)
    );
    console.log(`Service Request ${serviceRequestId} status changed to ${newStatus}`);
  };

  const filteredServiceRequests = serviceRequests.filter(req => 
    filterStatus === 'all' || req.status === filterStatus
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as ServiceRequest['status'] | 'all')}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredServiceRequests.length === 0 && (
        <p className="text-center text-muted-foreground">No service requests match the current filter.</p>
      )}

      {filteredServiceRequests.map((req) => (
        <Card key={req.id} className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Service Request for: {req.professionalName}</CardTitle>
                <CardDescription>
                  From: {req.userName} ({req.userEmail})
                  {req.companyName && `, ${req.companyName}`}
                </CardDescription>
              </div>
              <Badge variant={
                req.status === 'pending' ? 'secondary' :
                req.status === 'reviewed' ? 'default' :
                'outline' 
              }>
                {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {req.userPhone && (
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Phone className="h-4 w-4 mr-2" /> {req.userPhone}
              </div>
            )}
            <p className="font-semibold mb-1">Project Description:</p>
            <p className="text-sm text-muted-foreground mb-3 whitespace-pre-wrap">{req.projectDescription}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {req.companySize && <div><strong>Company Size:</strong> {req.companySize}</div>}
              {req.timeline && <div><strong>Timeline:</strong> {req.timeline}</div>}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Submitted: {format(parseISO(req.submittedAt), "MMM d, yyyy 'at' h:mm a")}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Select 
              defaultValue={req.status}
              onValueChange={(newStatus) => handleStatusChange(req.id, newStatus as ServiceRequest['status'])}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Change status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">View Details</Button> 
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
