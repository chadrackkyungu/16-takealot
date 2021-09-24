import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slice/slices";

store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
export default store;
