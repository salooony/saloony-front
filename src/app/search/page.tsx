'use client';

import { Suspense, lazy } from 'react';
import MainLayout from '@src/layout/main-layout';
import Loader from '@src/components/Loader';

const SearchResults = lazy(() => import('@src/sections/search/search-results'));
const SearchResultsWithoutLocation = lazy(() => import('@src/sections/search/search-results-without-location'));

const SearchResultsPage = ({ searchParams }: { searchParams: { query?: string; location?: string } }) => {
  const { query, location } = searchParams;
  const hasLocation = !!location && location.trim() !== '';

  return (
    <MainLayout variant="search">
      <Suspense fallback={<Loader />}>
        {hasLocation ? <SearchResults query={query} location={location} /> : <SearchResultsWithoutLocation query={query} />}
      </Suspense>
    </MainLayout>
  );
};

export default SearchResultsPage;
