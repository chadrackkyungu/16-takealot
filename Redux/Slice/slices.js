import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    // action add to basket items
    addTobasket: (state, action) => {
      //after the user click add to cart, go inside the state find the items inside the state if that item === to the action click by the user return it
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      //if there is something inside the state
      if (itemExists) {
        itemExists.quantity++; //increment this number
      } else {
        //return the action that was clicked by the user & the quantity
        state.items.push({ ...state.items, ...action.payload, quantity: 1 });
      }
    },

    //action increament item
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
    },

    //action decreased item
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

    //Action remove item
    removeFromBasket: (state, action) => {
      let index = state.items.findIndex(
        (BasketItems) => BasketItems.id === action.payload.id
      );
      let newItemsList = [
        ...state.items.slice(0, index),
        ...state.items.slice(index + 1),
      ];
      state.items = newItemsList; //? return the new state
    },
  },
});

export const {
  addTobasket,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

console.log(selectTotal);

export default basketSlice.reducer;
