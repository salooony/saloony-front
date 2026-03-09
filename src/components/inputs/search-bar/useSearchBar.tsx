import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SERVICES, ADDRESSES, Item } from './constants';
import dayjs, { Dayjs } from 'dayjs';
import { UseSearchBarProps } from '@src/types/useSearchBar';
import { FocusedInputType } from '@src/config';

export default function useSearchBar({ isMdScreen, initialQuery = '', initialLocation = null }: UseSearchBarProps) {
  const [query, setQuery] = useState<string>(initialQuery);
  const [location, setLocation] = useState<Item | null>(initialLocation);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputType | null>(null);
  const [suggestions, setSuggestions] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [activeField, setActiveField] = useState<FocusedInputType>(FocusedInputType.QUERY);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get(FocusedInputType.QUERY);
    const locationParam = searchParams.get(FocusedInputType.LOCATION);
    const dateParam = searchParams.get(FocusedInputType.DATE);

    if (queryParam) {
      setQuery(queryParam);
    } else if (initialQuery) {
      setQuery(initialQuery);
    }

    if (locationParam) {
      const foundLocation = ADDRESSES.find((addr) => addr.name === locationParam);
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

  const fetchSuggestions = useCallback(
    (input: string) => {
      setIsLoading(true);
      setTimeout(() => {
        const source = focusedInput === FocusedInputType.QUERY ? SERVICES : ADDRESSES;
        const filtered = source.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
        setSuggestions(filtered);
        setHighlightedIndex(-1);
        setIsLoading(false);
      }, 200);
    },
    [focusedInput]
  );

  useEffect(() => {
    const value = focusedInput === FocusedInputType.QUERY ? query : location?.name || '';

    if (focusedInput === FocusedInputType.QUERY) {
      if (!value) {
        setSuggestions(SERVICES);
        setHighlightedIndex(-1);
        return;
      }
      const timer = setTimeout(() => fetchSuggestions(value), 300);
      return () => clearTimeout(timer);
    }

    if (focusedInput === FocusedInputType.LOCATION) {
      if (value.length < 2) {
        setSuggestions([]);
        setHighlightedIndex(-1);
        return;
      }
      const timer = setTimeout(() => fetchSuggestions(value), 300);
      return () => clearTimeout(timer);
    }
  }, [query, location, focusedInput, fetchSuggestions]);

  const handleSearch = () => {
    const q = query.trim();
    const loc = location?.name.trim();

    if (!q) return alert('Please enter a service or salon name');
    if (loc && !ADDRESSES.some((item) => item.name === loc)) return alert('Please select a valid address');

    const params = new URLSearchParams();
    params.set(FocusedInputType.QUERY, q);
    if (loc) params.set(FocusedInputType.LOCATION, loc);
    if (selectedDate) params.set(FocusedInputType.DATE, selectedDate.format('YYYY-MM-DD'));

    router.push(`/search?${params.toString()}`);
    if (isMdScreen) closeOverlay();
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);

    if (typeof window !== 'undefined' && window.location.pathname === '/search') {
      const currentParams = new URLSearchParams(window.location.search);
      if (newDate) {
        currentParams.set(FocusedInputType.DATE, newDate.format('YYYY-MM-DD'));
      } else {
        currentParams.delete(FocusedInputType.DATE);
      }

      const paramsString = currentParams.toString();
      const newUrl = paramsString ? `${window.location.pathname}?${paramsString}` : window.location.pathname;
      router.replace(newUrl);
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
      if (focusedInput === FocusedInputType.QUERY) setQuery(suggestions[highlightedIndex].name);
      else setLocation(suggestions[highlightedIndex]);
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
    setDatePickerOpen,
    datePickerOpen,
    activeField,
    setActiveField
  };
}
