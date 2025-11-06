import { Campaign } from './types';

const STORAGE_KEY = 'campaigns';

export function getCampaigns(): Campaign[] {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveCampaign(campaign: Campaign): void {
  const campaigns = getCampaigns();
  campaigns.push(campaign);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
}

export function updateCampaign(id: string, updates: Partial<Campaign>): void {
  const campaigns = getCampaigns();
  const index = campaigns.findIndex(c => c.id === id);

  if (index !== -1) {
    campaigns[index] = { ...campaigns[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
  }
}

export function deleteCampaign(id: string): void {
  const campaigns = getCampaigns();
  const filtered = campaigns.filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
