import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
	isFetching: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.isFetching = true;
    },
		fetchedPosts: (state, action) => {
			state.isFetching = false;
			state.posts = action.payload;
		},
		resetState: (state) => {
			return initialState;
		}
  },
});

export const { getPosts, fetchedPosts, resetState } = postsSlice.actions;
export default postsSlice.reducer;
