import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slices/Slices";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
