import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchResults: [],
	isFetching: false
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchPosts: (state) => {
			state.isFetching = true;
		},
		fetchedSearchPosts: (state, action) => {
			state.isFetching = false;
			state.searchResults = action.payload;
		},
		resetState: (state) => {
			return initialState;
		}
	}
})

export const {searchPosts, fetchedSearchPosts, resetState} = searchSlice.actions;
export default searchSlice.reducer;