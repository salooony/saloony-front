'use client';

import { Suspense, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@src/layout/main-layout';
import Loader from '@src/components/Loader';
import { FocusedInputType, MainLayoutType } from '@src/config';

const SearchResults = lazy(() => import('@src/sections/search/search-results'));
const SearchResultsWithoutLocation = lazy(() => import('@src/sections/search/search-results-without-location'));

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get(FocusedInputType.QUERY) || '';
  const location = searchParams.get(FocusedInputType.LOCATION) || '';
  const date = searchParams.get(FocusedInputType.DATE) || '';

  const hasLocation = location.trim() !== '';

  return (
    <MainLayout variant={hasLocation ? MainLayoutType.SEARCH : MainLayoutType.SearchWithoutLocation} query={query} location={location}>
      <Suspense fallback={<Loader />}>
        {hasLocation ? (
          <SearchResults query={query} location={location} initialDate={date}  />
        ) : (
          <SearchResultsWithoutLocation query={query} />
        )}
      </Suspense>
    </MainLayout>
  );
};

export default SearchResultsPage;
