import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SERVICES, ADDRESSES, Item } from './constants';

export default function useSearchBar(isMdScreen: boolean, initialQuery = '', initialLocation: Item | null = null) {
  const [query, setQuery] = useState<string>(initialQuery);
  const [location, setLocation] = useState<Item | null>(initialLocation);
  const [focusedInput, setFocusedInput] = useState<'query' | 'location' | null>(null);
  const [suggestions, setSuggestions] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  const router = useRouter();

  const isSearchDisabled = !query.trim() || (location && !ADDRESSES.some((item) => item.name === location.name));

  const openOverlay = () => {
    if (isMdScreen) setIsOverlayOpen(true);
  };
  const closeOverlay = () => setIsOverlayOpen(false);

  const fetchSuggestions = useCallback(
    (input: string) => {
      setIsLoading(true);
      setTimeout(() => {
        const source = focusedInput === 'query' ? SERVICES : ADDRESSES;
        const filtered = source.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
        setSuggestions(filtered);
        setHighlightedIndex(-1);
        setIsLoading(false);
      }, 200);
    },
    [focusedInput]
  );

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
  }, [query, location, focusedInput, fetchSuggestions]);

  const handleSearch = () => {
    const q = query.trim();
    const loc = location?.name.trim();

    if (!q) return alert('Please enter a service or salon name');
    if (loc && !ADDRESSES.some((item) => item.name === loc)) return alert('Please select a valid address');

    router.push(`/search?query=${encodeURIComponent(q)}${loc ? `&location=${encodeURIComponent(loc)}` : ''}`);
    if (isMdScreen) closeOverlay();
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
      if (focusedInput === 'query') setQuery(suggestions[highlightedIndex].name);
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
    closeOverlay
  };
}
