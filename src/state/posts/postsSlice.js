import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunk";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { pending: null, error: null, data: [] },
  extraReducers: {
    [fetch.pending]: (state) => {
      return { ...state, pending: true };
    },
    [fetchPosts.fulfilled]: (state, action) => {
      return { ...state, error: null, data: action.payload, pending: false };
    },
    [fetchPosts.rejected]: (state, action) => {
      return { ...state, error: action.payload, pending: false };
    },
  },
});
