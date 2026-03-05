import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

// Import features

// ==============================|| REDUX STORE CONFIGURATION ||============================== //

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(baseApi.middleware)
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
