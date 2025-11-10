export interface Item {
  id: number;
  name: string;
}

export interface Salon {
  id: number;
  name: string;
  image: string;
  locationId: number;
}

export interface ServiceItem extends Item {
  salons?: Salon[];
}

export const HAIRDRESSERS: Salon[] = [
  { id: 1, name: 'Salon Elegance', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 2, name: 'Chic & Style', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 3, name: 'Glamour Hair Studio', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 4, name: 'Trendy Cuts', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 5, name: 'Modern Hair', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 6, name: 'Luxury Salon', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 7, name: 'Style & Shine', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 8, name: 'Hair & Beauty', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 9, name: 'Elegant Cuts', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 10, name: 'Chic Hair Lounge', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 11, name: 'Glam Hair Co.', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 12, name: 'Urban Style Salon', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 13, name: 'Salon Elegance 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 14, name: 'Chic & Style 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 15, name: 'Glamour Hair Studio 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 16, name: 'Trendy Cuts 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 17, name: 'Modern Hair 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 18, name: 'Luxury Salon 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 19, name: 'Style & Shine 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 20, name: 'Hair & Beauty 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 21, name: 'Elegant Cuts 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 22, name: 'Chic Hair Lounge 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 23, name: 'Glam Hair Co. 2', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 24, name: 'Urban Style Salon 2', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 25, name: 'Exclusive Hair Studio', image: '/assets/images/search/tunis.png', locationId: 1 },
];

export const BARBERS: Salon[] = [
  { id: 1, name: 'Classic Barber', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 2, name: 'Urban Fade', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 3, name: 'Gentlemen’s Cut', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 4, name: 'Sharp Line Studio', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 5, name: 'The Modern Barber', image: '/assets/images/search/tunis.png', locationId: 1 },
];

export const MAKEUP_ARTISTS: Salon[] = [
  { id: 1, name: 'Glam Touch', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 2, name: 'Beauty by Lina', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 3, name: 'Glow Studio', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 4, name: 'Makeup Lounge', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 5, name: 'Perfect Look', image: '/assets/images/search/tunis.png', locationId: 1 },
];

export const MANICURE_SALONS: Salon[] = [
  { id: 1, name: 'Nail Bliss', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 2, name: 'Polish & Shine', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 3, name: 'Luxury Nails', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 4, name: 'The Nail Room', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 5, name: 'Pretty Hands', image: '/assets/images/search/tunis.png', locationId: 1 },
];

export const BEAUTY_SALONS: Salon[] = [
  { id: 1, name: 'Royal Beauty', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 2, name: 'Elegance Spa', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 3, name: 'Glow & Care', image: '/assets/images/search/tunis.png', locationId: 1 },
  { id: 4, name: 'Pure Beauty Lounge', image: '/assets/images/search/tunis.png', locationId: 2 },
  { id: 5, name: 'Harmony Salon', image: '/assets/images/search/tunis.png', locationId: 1 },
];

export const SERVICES: ServiceItem[] = [
  { id: 1, name: 'Hairdressers', salons: HAIRDRESSERS },
  { id: 2, name: 'Barber', salons: BARBERS },
  { id: 3, name: 'Makeup Artist', salons: MAKEUP_ARTISTS },
  { id: 4, name: 'Manicure', salons: MANICURE_SALONS },
  { id: 5, name: 'Beauty salons', salons: BEAUTY_SALONS },
];

export const ADDRESSES: Item[] = [
  { id: 1, name: 'Paris' },
  { id: 2, name: 'paly' },
];
