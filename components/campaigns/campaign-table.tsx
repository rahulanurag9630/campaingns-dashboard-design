'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Campaign } from '@/lib/types';
import { apiService } from '@/lib/api/apiService';
import { API_ENDPOINTS } from '@/lib/api/apiEndPoints';
interface CampaignListResponse {
  campaigns: Campaign[];
}
interface CreateCampaignModalProps {
  open: boolean;
}
export function CampaignTable({ open }: CreateCampaignModalProps) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await apiService<CampaignListResponse>('GET', API_ENDPOINTS.CAMPAIGNS.GET_ALL);
        setCampaigns(data.campaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [open]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="text-center p-6 text-gray-500">Loading campaigns...</div>;
  }

  if (campaigns.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-12 text-center">
        <p className="text-gray-500">
          No campaigns yet. Create your first campaign to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sent</TableHead>
            <TableHead>Replies</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell className="capitalize">{campaign.type}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(campaign.status)}>
                  {campaign.status}
                </Badge>
              </TableCell>
              <TableCell>{campaign.sent}</TableCell>
              <TableCell>{campaign.replies}</TableCell>
              <TableCell>
                {new Date(campaign.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
