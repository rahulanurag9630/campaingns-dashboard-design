'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Mail, MessageSquare, Calendar } from 'lucide-react';
import { CampaignChart } from '@/components/dashboard/campaign-chart';
import { StatsCard } from '@/components/dashboard/stats-card';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Active Campaigns',
      value: '12',
      icon: Activity,
      description: '3 running today',
    },
    {
      title: 'Emails Sent',
      value: '2,543',
      icon: Mail,
      description: '+12% from last week',
    },
    {
      title: 'Replies',
      value: '342',
      icon: MessageSquare,
      description: '13.4% response rate',
    },
    {
      title: 'Meetings Booked',
      value: '28',
      icon: Calendar,
      description: '8 this week',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your campaign overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <CampaignChart />
        </CardContent>
      </Card>
    </div>
  );
}
