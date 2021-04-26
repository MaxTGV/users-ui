import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunk";

export const usersSlice = createSlice({
  name: "users",
  initialState: { pending: null, error: null, data: [] },
  reducers: {
    update: (state, action) => {
      return { ...state, data: action.payload, pending: false };
    },
    add: (state, action) => {
      return {
        ...state,
        data: [action.payload, ...state.data],
        pending: false,
      };
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      return { ...state, pending: true };
    },
    [fetchUsers.fulfilled]: (state, action) => {
      return { ...state, error: null, data: action.payload, pending: false };
    },
    [fetchUsers.rejected]: (state, action) => {
      return { ...state, error: action.payload, pending: false };
    },
  },
});
