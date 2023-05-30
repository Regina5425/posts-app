import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isFetching: false,
	userPosts: [],
	isFetchingPosts: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.isFetching = true;
    },
    fetchedUser: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
		getUserPosts: (state) => {
			state.isFetchingPosts = true;
		},
		fetchedUserPosts: (state, action) => {
			state.isFetchingPosts = false;
			state.userPosts = action.payload;
		},
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getUser, fetchedUser, getUserPosts, fetchedUserPosts, resetState } = userSlice.actions;
export default userSlice.reducer;
