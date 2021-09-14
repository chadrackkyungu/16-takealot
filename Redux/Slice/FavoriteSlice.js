import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite_Items: [],
};

export const favorite_BasketSlice = createSlice({
  name: "basketFavorite",
  initialState,

  reducers: {
    addToBookmark: (state, action) => {
      const itemExists = state.favorite_Items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.favorite_Items.push({
          ...state.favorite_Items,
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromBookmark: (state, action) => {
      let index = state.favorite_Items.findIndex(
        (BasketItems) => BasketItems.id === action.payload.id
      );
      let newItemsList = [
        ...state.favorite_Items.slice(0, index),
        ...state.favorite_Items.slice(index + 1),
      ];
      state.favorite_Items = newItemsList;
    },
  },
});

export const { addToBookmark, removeFromBookmark } =
  favorite_BasketSlice.actions;

export const selectAllFav_Items = (state) =>
  state.basketFavorite.favorite_Items;

export default favorite_BasketSlice.reducer;
