import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../shared/api";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  try {
    const data = await getPosts();
    return data;
  } catch (error) {
    return error;
  }
});
