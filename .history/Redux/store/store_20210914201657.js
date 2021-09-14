import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slice/slices";
import FavoriteSlice from "../Slice/FavoriteSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    basketFavorite: FavoriteSlice,
  },
});
