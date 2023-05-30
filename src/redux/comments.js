import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: 0,
  comments: [],
  isFetching: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.postId = action.payload;
      state.isFetching = true;
    },
    fetchedComments: (state, action) => {
      state.isFetching = false;
      state.comments = action.payload;
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getComments, fetchedComments, resetState } =
  commentsSlice.actions;
export default commentsSlice.reducer;
