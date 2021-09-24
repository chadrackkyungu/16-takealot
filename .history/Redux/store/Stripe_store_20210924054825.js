import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Slice/slices";

Stripe_store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
export default Stripe_store;
