import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slice/slices";
import favoriteReducer from "../Slice/FavoriteSlice";
// import userReucer from "../Slice/userSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer, //=> "basket" it's the same as the one inside slice.js on line 8
    basketFavorite: favoriteReducer, //=> "basketFavorite" it's the same as the one inside slice.js on line 8
    // user: userReucer,
  },
});
