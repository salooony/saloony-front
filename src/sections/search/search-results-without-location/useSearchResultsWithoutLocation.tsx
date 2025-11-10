import { useState, useEffect } from 'react';
import { SERVICES, ADDRESSES, Salon } from '@src/components/inputs/search-bar/constants';

export default function useSearchResults(query: string, locationName?: string, pageSize: number = 12) {
  const [results, setResults] = useState<Salon[]>([]);
  const [displayedResults, setDisplayedResults] = useState<Salon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setDisplayedResults([]);
      setCurrentPage(1);
      return;
    }

    const service = SERVICES.find((s) => s.name.toLowerCase() === query.toLowerCase());
    if (!service || !service.salons) {
      setResults([]);
      setDisplayedResults([]);
      setCurrentPage(1);
      return;
    }

    let filteredSalons = service.salons;

    if (locationName) {
      const location = ADDRESSES.find((l) => l.name.toLowerCase() === locationName.toLowerCase());
      if (location) {
        filteredSalons = filteredSalons.filter((salon) => salon.locationId === location.id);
      } else {
        filteredSalons = [];
      }
    }

    setResults(filteredSalons);
    setDisplayedResults(filteredSalons.slice(0, pageSize));
    setCurrentPage(1);
  }, [query, locationName, pageSize]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const nextResults = results.slice(0, nextPage * pageSize);
    setDisplayedResults(nextResults);
    setCurrentPage(nextPage);
  };

  const hasMore = displayedResults.length < results.length;

  return { displayedResults, loadMore, hasMore };
}
