// ==============================|| FILTER TYPES ||============================== //

export enum AvailabilityOption {
  ANY = 'any',
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  PICK = 'pick'
}

export enum SortOption {
  NONE = 'none',
  TOP_RATED = 'top_rated',
  PRICE_DESC = 'price_desc',
  PRICE_ASC = 'price_asc'
}

export interface FilterState {
  availability: AvailabilityOption;
  sortBy: SortOption;
  pickedDate: string | null; // ISO date string, only used when availability === 'pick'
}
