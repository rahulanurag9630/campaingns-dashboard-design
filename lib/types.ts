export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'whatsapp';
  description: string;
  status: 'draft' | 'active' | 'completed';
  sent: number;
  replies: number;
  createdAt: string;
}
