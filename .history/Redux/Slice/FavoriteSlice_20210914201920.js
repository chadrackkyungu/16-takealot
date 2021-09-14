import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favorite_BasketSlice = createSlice({
  name: "basketFavorite",
  initialState,

  reducers: {
    addTobasket: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...state.items, ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item.quantity === 1) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        let newItemsList = [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ];
        state.items = newItemsList;
      } else {
        item.quantity--;
      }
    },

    removeFromBasket: (state, action) => {
      let index = state.items.findIndex(
        (BasketItems) => BasketItems.id === action.payload.id
      );
      let newItemsList = [
        ...state.items.slice(0, index),
        ...state.items.slice(index + 1),
      ];
      state.items = newItemsList;
    },
  },
});

export const {
  addTobasket,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} = favorite_BasketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default favorite_BasketSlice.reducer;
