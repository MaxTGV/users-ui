import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../shared/api";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const data = await getUsers();
    return data;
  } catch (error) {
    return error;
  }
});
