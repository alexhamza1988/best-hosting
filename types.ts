export type Category = 'VPS Hosting' | 'Web Hosting' | 'VDS Servers' | 'RDP Services' | 'VPN Providers';

export interface Badge {
  text: string;
  type: 'primary' | 'secondary' | 'rating' | 'sponsored';
}

export interface Service {
  id: number;
  name: string;
  logoUrl: string;
  category: Category;
  description: string;
  affiliateUrl: string;
  badges: Badge[];
  isEditorsPick?: boolean;
  hasFreeTier?: boolean;
  rating?: number;
  isNew?: boolean;
  isSponsored?: boolean;
}

export interface Guide {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  category: Category | 'General';
}