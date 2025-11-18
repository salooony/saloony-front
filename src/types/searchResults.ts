import { FocusedInputType } from '@src/config';

export interface SearchResultsProps {
  query: FocusedInputType.QUERY;
  location?: FocusedInputType.LOCATION;
  date?: FocusedInputType.DATE;
}
