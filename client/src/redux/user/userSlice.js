import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.currentUser = null;
      state.error = false;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null,
      state.error = false
    }
  },
});

export const {signInStart, signInSuccess, signInFailure, signOut} = userSlice.actions;

export default userSlice.reducer;
