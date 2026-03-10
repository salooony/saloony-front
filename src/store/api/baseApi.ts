import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3010/',
    prepareHeaders: async (headers) => {
      const session = await getSession();

      if (session?.token?.accessToken) {
        headers.set('Authorization', `Bearer ${session.token.accessToken}`);
      }

      return headers;
    }
  }),
  endpoints: () => ({}),
  tagTypes: []
});
