export interface Item {
  id: number;
  name: string;
}

export interface OpeningHours {
  [day: string]: {
    open?: string;
    close?: string;
    isClosed?: boolean;
  };
}

export interface Salon {
  id: number;
  name: string;
  image: string;
  locationId: number;
  openingHours: OpeningHours;
  rating?: number; // 0–5 star average; used for "top rated" sort
  startingPrice?: number; // price in local currency; used for price sort
}

export interface ServiceItem extends Item {
  salons?: Salon[];
}

export const HAIRDRESSERS: Salon[] = [
  {
    id: 1,
    name: 'Salon Elegance',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '23:00' },
      tuesday: { open: '09:00', close: '23:00' },
      wednesday: { open: '09:00', close: '23:00' },
      thursday: { open: '09:00', close: '23:00' },
      friday: { open: '09:00', close: '23:00' },
      saturday: { open: '10:00', close: '23:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 2,
    name: 'Chic & Style',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '10:00', close: '15:00' }
    }
  },
  {
    id: 3,
    name: 'Glamour Hair Studio',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:30', close: '18:30' },
      tuesday: { open: '09:30', close: '18:30' },
      wednesday: { open: '09:30', close: '18:30' },
      thursday: { open: '09:30', close: '18:30' },
      friday: { open: '09:30', close: '18:30' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 4,
    name: 'Trendy Cuts',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '20:00' },
      tuesday: { open: '10:00', close: '20:00' },
      wednesday: { open: '10:00', close: '20:00' },
      thursday: { open: '10:00', close: '20:00' },
      friday: { open: '10:00', close: '20:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '11:00', close: '16:00' }
    }
  },
  {
    id: 5,
    name: 'Modern Hair',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '08:30', close: '17:30' },
      tuesday: { open: '08:30', close: '17:30' },
      wednesday: { open: '08:30', close: '17:30' },
      thursday: { open: '08:30', close: '17:30' },
      friday: { open: '08:30', close: '17:30' },
      saturday: { open: '09:00', close: '16:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 6,
    name: 'The Barber Box',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:30', close: '19:30' },
      tuesday: { open: '10:30', close: '19:30' },
      wednesday: { open: '10:30', close: '19:30' },
      thursday: { open: '10:30', close: '19:30' },
      friday: { open: '10:30', close: '19:30' },
      saturday: { open: '10:00', close: '18:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 7,
    name: 'Luxury Locks',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '15:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 8,
    name: 'Urban Coiffure',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '11:00', close: '20:00' },
      tuesday: { open: '11:00', close: '20:00' },
      wednesday: { open: '11:00', close: '20:00' },
      thursday: { open: '11:00', close: '20:00' },
      friday: { open: '11:00', close: '21:00' },
      saturday: { open: '10:00', close: '19:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 9,
    name: 'Crown & Glory',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:30', close: '19:30' },
      tuesday: { open: '09:30', close: '19:30' },
      wednesday: { open: '09:30', close: '19:30' },
      thursday: { open: '09:30', close: '19:30' },
      friday: { open: '09:30', close: '19:30' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '12:00', close: '16:00' }
    }
  },
  {
    id: 10,
    name: 'The Cut Above',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '09:00', close: '17:00' },
      tuesday: { open: '09:00', close: '17:00' },
      wednesday: { open: '09:00', close: '17:00' },
      thursday: { open: '09:00', close: '17:00' },
      friday: { open: '09:00', close: '17:00' },
      saturday: { open: '08:30', close: '16:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 11,
    name: 'Fusion Stylists',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:00', close: '20:00' },
      tuesday: { open: '10:00', close: '20:00' },
      wednesday: { open: '10:00', close: '20:00' },
      thursday: { open: '10:00', close: '20:00' },
      friday: { open: '10:00', close: '20:00' },
      saturday: { open: '10:00', close: '18:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 12,
    name: 'Mirror Image',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '09:00', close: '19:00' },
      tuesday: { open: '09:00', close: '19:00' },
      wednesday: { open: '09:00', close: '19:00' },
      thursday: { open: '09:00', close: '19:00' },
      friday: { open: '09:00', close: '19:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 13,
    name: 'The Hair Lab',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:00', close: '18:00' },
      tuesday: { open: '10:00', close: '18:00' },
      wednesday: { open: '10:00', close: '18:00' },
      thursday: { open: '10:00', close: '18:00' },
      friday: { open: '10:00', close: '18:00' },
      saturday: { open: '10:00', close: '16:00' },
      sunday: { open: '10:00', close: '14:00' }
    }
  },
  {
    id: 14,
    name: 'Studio H2O',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:30', close: '20:30' },
      tuesday: { open: '10:30', close: '20:30' },
      wednesday: { open: '10:30', close: '20:30' },
      thursday: { open: '10:30', close: '20:30' },
      friday: { open: '10:30', close: '20:30' },
      saturday: { open: '10:00', close: '19:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 15,
    name: 'Elite Styles',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '19:00' },
      tuesday: { open: '09:00', close: '19:00' },
      wednesday: { open: '09:00', close: '19:00' },
      thursday: { open: '09:00', close: '19:00' },
      friday: { open: '09:00', close: '19:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 16,
    name: 'The Vintage Comb',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '08:00', close: '17:00' },
      tuesday: { open: '08:00', close: '17:00' },
      wednesday: { open: '08:00', close: '17:00' },
      thursday: { open: '08:00', close: '17:00' },
      friday: { open: '08:00', close: '17:00' },
      saturday: { open: '08:00', close: '14:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 17,
    name: 'Creative Cuts',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:00', close: '21:00' },
      tuesday: { open: '10:00', close: '21:00' },
      wednesday: { open: '10:00', close: '21:00' },
      thursday: { open: '10:00', close: '21:00' },
      friday: { open: '10:00', close: '21:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '11:00', close: '15:00' }
    }
  },
  {
    id: 18,
    name: 'Reflections Salon',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '09:30', close: '18:30' },
      tuesday: { open: '09:30', close: '18:30' },
      wednesday: { open: '09:30', close: '18:30' },
      thursday: { open: '09:30', close: '18:30' },
      friday: { open: '09:30', close: '18:30' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 19,
    name: 'Simply Gorgeous',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '10:00', close: '18:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 20,
    name: 'Master Stylists',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '09:00', close: '20:00' },
      tuesday: { open: '09:00', close: '20:00' },
      wednesday: { open: '09:00', close: '20:00' },
      thursday: { open: '09:00', close: '20:00' },
      friday: { open: '09:00', close: '20:00' },
      saturday: { open: '09:00', close: '19:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 21,
    name: 'The Downtown Salon',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '11:00', close: '19:00' },
      tuesday: { open: '11:00', close: '19:00' },
      wednesday: { open: '11:00', close: '19:00' },
      thursday: { open: '11:00', close: '19:00' },
      friday: { open: '11:00', close: '19:00' },
      saturday: { open: '10:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 22,
    name: 'Hair Wizards',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '08:30', close: '18:30' },
      tuesday: { open: '08:30', close: '18:30' },
      wednesday: { open: '08:30', close: '18:30' },
      thursday: { open: '08:30', close: '18:30' },
      friday: { open: '08:30', close: '18:30' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 23,
    name: 'Silk Strands',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:00', close: '20:00' },
      tuesday: { open: '10:00', close: '20:00' },
      wednesday: { open: '10:00', close: '20:00' },
      thursday: { open: '10:00', close: '20:00' },
      friday: { open: '10:00', close: '20:00' },
      saturday: { open: '11:00', close: '19:00' },
      sunday: { open: '10:00', close: '16:00' }
    }
  },
  {
    id: 24,
    name: 'Cut & Colour',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '15:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 25,
    name: 'The Style Hub',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '10:30', close: '19:30' },
      tuesday: { open: '10:30', close: '19:30' },
      wednesday: { open: '10:30', close: '19:30' },
      thursday: { open: '10:30', close: '19:30' },
      friday: { open: '10:30', close: '19:30' },
      saturday: { open: '10:30', close: '17:30' },
      sunday: { isClosed: true }
    }
  }
];

export const BARBERS: Salon[] = [
  {
    id: 1,
    name: 'Classic Barber',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '08:00', close: '16:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 2,
    name: 'Urban Fade',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '10:00', close: '16:00' }
    }
  },
  {
    id: 3,
    name: "Gentlemen's Cut",
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '17:30' },
      tuesday: { open: '09:00', close: '17:30' },
      wednesday: { open: '09:00', close: '17:30' },
      thursday: { open: '09:00', close: '17:30' },
      friday: { open: '09:00', close: '17:30' },
      saturday: { open: '08:30', close: '16:30' },
      sunday: { isClosed: true }
    }
  }
];

export const MAKEUP_ARTISTS: Salon[] = [
  {
    id: 1,
    name: 'Glam Touch',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '10:00', close: '17:00' },
      sunday: { open: '11:00', close: '15:00' }
    }
  },
  {
    id: 2,
    name: 'Beauty by Lina',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { isClosed: true }
    }
  }
];

export const MANICURE_SALONS: Salon[] = [
  {
    id: 1,
    name: 'Nail Bliss',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '10:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 2,
    name: 'Polish & Shine',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '12:00', close: '16:00' }
    }
  }
];

export const BEAUTY_SALONS: Salon[] = [
  {
    id: 1,
    name: 'Royal Beauty',
    image: '/assets/images/search/tunis.png',
    locationId: 1,
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { isClosed: true }
    }
  },
  {
    id: 2,
    name: 'Elegance Spa',
    image: '/assets/images/search/tunis.png',
    locationId: 2,
    openingHours: {
      monday: { open: '10:00', close: '19:00' },
      tuesday: { open: '10:00', close: '19:00' },
      wednesday: { open: '10:00', close: '19:00' },
      thursday: { open: '10:00', close: '19:00' },
      friday: { open: '10:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '10:00', close: '16:00' }
    }
  }
];

export const SERVICES: ServiceItem[] = [
  { id: 1, name: 'Hairdressers', salons: HAIRDRESSERS },
  { id: 2, name: 'Barber', salons: BARBERS },
  { id: 3, name: 'Makeup Artist', salons: MAKEUP_ARTISTS },
  { id: 4, name: 'Manicure', salons: MANICURE_SALONS },
  { id: 5, name: 'Beauty salons', salons: BEAUTY_SALONS }
];

export const ADDRESSES: Item[] = [
  { id: 1, name: 'Paris' },
  { id: 2, name: 'Lyon' },
  { id: 3, name: 'Marseille' },
  { id: 4, name: 'Toulouse' },
  { id: 5, name: 'Nice' }
];
