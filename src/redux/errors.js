import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorPosts: "",
  errorComments: "",
  errorUser: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    getPostsError: (state, action) => {
      state.errorPosts = action.payload;
    },
    getCommentsError: (state, action) => {
      state.errorComments = action.payload;
    },
    getUserError: (state, action) => {
      state.errorUser = action.payload;
    },
  },
});

export const { getPostsError, getCommentsError, getUserError } =
  errorSlice.actions;
export default errorSlice.reducer;
