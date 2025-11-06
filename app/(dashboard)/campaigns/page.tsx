'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { CampaignTable } from '@/components/campaigns/campaign-table';
import { CreateCampaignModal } from '@/components/campaigns/create-campaign-modal';

export default function CampaignsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600 mt-1">Manage all your marketing campaigns</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-[#25826A] to-[#35a47f] hover:opacity-90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Campaign
        </Button>
      </div>

      <CampaignTable />

      <CreateCampaignModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
