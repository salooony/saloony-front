import { configureStore } from "@reduxjs/toolkit";

// Import features


// ==============================|| REDUX STORE CONFIGURATION ||============================== //

export const store = configureStore({
  reducer: {
    // Feature slices
    // RTK Query API slices
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;