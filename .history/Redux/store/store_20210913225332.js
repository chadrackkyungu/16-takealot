import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Redux/Slices";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
