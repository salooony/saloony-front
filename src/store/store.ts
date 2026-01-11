import { configureStore } from "@reduxjs/toolkit";

// Import features


// ==============================|| REDUX STORE CONFIGURATION ||============================== //

export const store = configureStore({
  // If there are no feature slices yet, provide a noop reducer to
  // avoid `combineReducers` errors when passed an empty object.
  // Replace this with your actual slice reducers as you add them.
  reducer: (state = {}) => state,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;