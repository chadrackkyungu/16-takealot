import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slice/slices";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
