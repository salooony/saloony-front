'use client';

import { Suspense, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@src/layout/main-layout';
import Loader from '@src/components/Loader';
import { MainLayoutType } from '@src/config';

const SearchResults = lazy(() => import('@src/sections/search/search-results'));
const SearchResultsWithoutLocation = lazy(() => import('@src/sections/search/search-results-without-location'));

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = searchParams.get('location') || '';

  const hasLocation = location.trim() !== '';

  return (
    <MainLayout variant={MainLayoutType.SEARCH}>
      <Suspense fallback={<Loader />}>
        {hasLocation ? <SearchResults query={query} location={location} /> : <SearchResultsWithoutLocation query={query} />}
      </Suspense>
    </MainLayout>
  );
};

export default SearchResultsPage;
