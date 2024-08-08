import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
  },
});
