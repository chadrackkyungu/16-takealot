import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  //   reducers: {
  //     loginUser: (state, action) => {
  //       state.user = action.payload;
  //     },
  //     logout: (state) => {
  //       state.user = null;
  //     },
  //   },
});

export const { loginUser, logout } = userSlice.actions; //select my 2 actions
export const selectUser = (state) => state.user.user; // userAuth on line 8, & user on line 4
export default userSlice.reducer; //userSlice is the entire redux, line 7
