"use client";

import type { QuoteRequest } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface QuoteListProps {
  initialQuotes: QuoteRequest[];
}

export function QuoteList({ initialQuotes }: QuoteListProps) {
  const [quotes, setQuotes] = useState<QuoteRequest[]>(initialQuotes);
  const [filterStatus, setFilterStatus] = useState<QuoteRequest['status'] | 'all'>('all');

  const handleStatusChange = (quoteId: string, newStatus: QuoteRequest['status']) => {
    // In a real app, this would be an API call / server action
    setQuotes(prevQuotes => 
      prevQuotes.map(q => q.id === quoteId ? { ...q, status: newStatus } : q)
    );
    console.log(`Quote ${quoteId} status changed to ${newStatus}`);
  };

  const filteredQuotes = quotes.filter(quote => 
    filterStatus === 'all' || quote.status === filterStatus
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as QuoteRequest['status'] | 'all')}>
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

      {filteredQuotes.length === 0 && (
        <p className="text-center text-muted-foreground">No quote requests match the current filter.</p>
      )}

      {filteredQuotes.map((quote) => (
        <Card key={quote.id} className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Quote for: {quote.professionalName}</CardTitle>
                <CardDescription>
                  From: {quote.userName} ({quote.userEmail})
                  {quote.companyName && `, ${quote.companyName}`}
                </CardDescription>
              </div>
              <Badge variant={
                quote.status === 'pending' ? 'secondary' :
                quote.status === 'reviewed' ? 'default' :
                'outline' // 'contacted'
              }>
                {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">Project Description:</p>
            <p className="text-sm text-muted-foreground mb-3 whitespace-pre-wrap">{quote.projectDescription}</p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quote.budget && <div><strong>Budget:</strong> {quote.budget}</div>}
              {quote.timeline && <div><strong>Timeline:</strong> {quote.timeline}</div>}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Submitted: {format(parseISO(quote.submittedAt), "MMM d, yyyy 'at' h:mm a")}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            {/* In a real app, these actions would trigger server updates */}
            <Select 
              defaultValue={quote.status}
              onValueChange={(newStatus) => handleStatusChange(quote.id, newStatus as QuoteRequest['status'])}
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
            <Button variant="outline">View Details</Button> {/* Placeholder for a modal or separate page */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
