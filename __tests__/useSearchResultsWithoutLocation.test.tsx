import { describe, expect, it } from '@jest/globals';
import { act, renderHook, waitFor } from '@testing-library/react';

import useSearchResultsWithoutLocation from '@/sections/search/search-results-without-location/useSearchResultsWithoutLocation';
import { ADDRESSES, HAIRDRESSERS } from '@/components/inputs/search-bar/constants';

const renderSearchHook = (query: string, locationName?: string, pageSize: number = 12) =>
  renderHook(() => useSearchResultsWithoutLocation(query, locationName, pageSize));

describe('useSearchResultsWithoutLocation', () => {
  it('clears results when query becomes empty', async () => {
    const pageSize = 5;
    const { result, rerender } = renderHook(({ query }) => useSearchResultsWithoutLocation(query, undefined, pageSize), {
      initialProps: { query: 'Hairdressers' }
    });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(pageSize);
    });

    rerender({ query: '' });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(0);
    });
    expect(result.current.hasMore).toBe(false);
  });

  it('clears results when query does not match a service', async () => {
    const pageSize = 4;
    const { result, rerender } = renderHook(({ query }) => useSearchResultsWithoutLocation(query, undefined, pageSize), {
      initialProps: { query: 'Hairdressers' }
    });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(pageSize);
    });

    rerender({ query: '__no_match__' });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(0);
    });
    expect(result.current.hasMore).toBe(false);
  });

  it('matches service names case-insensitively and respects pageSize', async () => {
    const pageSize = 3;
    const { result } = renderSearchHook('HAIRDRESSERS', undefined, pageSize);

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(pageSize);
    });

    expect(result.current.displayedResults).toEqual(HAIRDRESSERS.slice(0, pageSize));
    expect(result.current.hasMore).toBe(true);
  });

  it('paginates with loadMore until hasMore is false', async () => {
    const pageSize = 7;
    const total = HAIRDRESSERS.length;
    const totalPages = Math.ceil(total / pageSize);

    const { result } = renderSearchHook('Hairdressers', undefined, pageSize);

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(Math.min(pageSize, total));
    });

    for (let page = 2; page <= totalPages; page += 1) {
      act(() => {
        result.current.loadMore();
      });

      const expectedLength = Math.min(page * pageSize, total);
      await waitFor(() => {
        expect(result.current.displayedResults).toHaveLength(expectedLength);
        expect(result.current.hasMore).toBe(expectedLength < total);
      });
    }
  });

  it('filters results by location name (case-insensitive) and handles unknown locations', async () => {
    const pageSize = 50;
    const paris = ADDRESSES.find((location) => location.name.toLowerCase() === 'paris');
    expect(paris).toBeDefined();
    const parisId = paris!.id;
    const expectedParisResults = HAIRDRESSERS.filter((salon) => salon.locationId === parisId);

    const { result, rerender } = renderHook(({ locationName }) => useSearchResultsWithoutLocation('Hairdressers', locationName, pageSize), {
      initialProps: { locationName: 'PARIS' }
    });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(expectedParisResults.length);
      expect(result.current.displayedResults).toEqual(expectedParisResults);
      expect(result.current.hasMore).toBe(false);
    });

    rerender({ locationName: 'Nowhere' });

    await waitFor(() => {
      expect(result.current.displayedResults).toHaveLength(0);
    });
    expect(result.current.hasMore).toBe(false);
  });
});
