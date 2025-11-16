import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SERVICES, ADDRESSES, Item } from './constants';
import dayjs, { Dayjs } from 'dayjs';


export default function useSearchBar(isMdScreen: boolean, initialQuery = '', initialLocation: Item | null = null) {
  const [query, setQuery] = useState<string>(initialQuery);
  const [location, setLocation] = useState<Item | null>(initialLocation);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [focusedInput, setFocusedInput] = useState<'query' | 'location' | 'date' | null>(null);
  const [suggestions, setSuggestions] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    const locationParam = searchParams.get('location');
    const dateParam = searchParams.get('date');

    if (queryParam) {
      setQuery(decodeURIComponent(queryParam));
    } else if (initialQuery) {
      setQuery(initialQuery);
    }

    if (locationParam) {
      const decodedLocation = decodeURIComponent(locationParam);
      const foundLocation = ADDRESSES.find((addr) => addr.name === decodedLocation);
      if (foundLocation) {
        setLocation(foundLocation);
      }
    } else if (initialLocation) {
      setLocation(initialLocation);
    }

    if (dateParam) {
      setSelectedDate(dayjs(dateParam));
    }
  }, [searchParams, initialQuery, initialLocation]);

  const isSearchDisabled = !query.trim() || (location && !ADDRESSES.some((item) => item.name === location.name));

  const openOverlay = () => {
    if (isMdScreen) setIsOverlayOpen(true);
  };
  
  const closeOverlay = () => setIsOverlayOpen(false);

  useEffect(() => {
    const value = focusedInput === 'query' ? query : location?.name || '';

    if (focusedInput === 'query') {
      if (!value) {
        setSuggestions(SERVICES);
        setHighlightedIndex(-1);
        return;
      }
      const timer = setTimeout(() => fetchSuggestions(value), 300);
      return () => clearTimeout(timer);
    }

    if (focusedInput === 'location') {
      if (value.length < 2) {
        setSuggestions([]);
        setHighlightedIndex(-1);
        return;
      }
      const timer = setTimeout(() => fetchSuggestions(value), 300);
      return () => clearTimeout(timer);
    }
  }, [query, location, focusedInput]);

  const fetchSuggestions = (input: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const source = focusedInput === 'query' ? SERVICES : ADDRESSES;
      const filtered = source.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
      setSuggestions(filtered);
      setHighlightedIndex(-1);
      setIsLoading(false);
    }, 200);
  };

  const handleSearch = () => {
    const q = query.trim();
    const loc = location?.name.trim();

    if (!q) return alert('Please enter a service or salon name');
    if (loc && !ADDRESSES.some((item) => item.name === loc)) return alert('Please select a valid address');

    const params = new URLSearchParams();
    params.set('query', encodeURIComponent(q));
    if (loc) params.set('location', encodeURIComponent(loc));
    if (selectedDate) params.set('date', selectedDate.format('YYYY-MM-DD'));

    router.push(`/search?${params.toString()}`);
    if (isMdScreen) closeOverlay();
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);

    if (typeof window !== 'undefined' && window.location.pathname === '/search') {
      const currentParams = new URLSearchParams(window.location.search);
      if (newDate) {
        currentParams.set('date', newDate.format('YYYY-MM-DD'));
      } else {
        currentParams.delete('date');
      }

      const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      if (focusedInput === 'query') {
        setQuery(suggestions[highlightedIndex].name);
      } else {
        setLocation(suggestions[highlightedIndex]);
      }
      setSuggestions([]);
      setHighlightedIndex(-1);
      setFocusedInput(null); 
    }
  };

  return {
    query,
    setQuery,
    location,
    setLocation,
    selectedDate,
    setSelectedDate: handleDateChange,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    isSearchDisabled,
    handleSearch,
    highlightedIndex,
    handleKeyDown,
    isOverlayOpen,
    openOverlay,
    closeOverlay,
  };
}