import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { postsSlice } from "./state/posts/postsSlice";
import { usersSlice } from "./state/users/usersSlice";

const reducer = {
  users: usersSlice.reducer,
  posts: postsSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
