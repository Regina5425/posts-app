import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isFetching: false,
  page: 1,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.isFetching = true;
      state.page = action.payload;
    },
    fetchedPosts: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getPosts, fetchedPosts, resetState } = postsSlice.actions;
export default postsSlice.reducer;
