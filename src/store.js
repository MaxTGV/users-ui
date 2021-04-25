import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { postReducer } from "./state/posts/postsReducer";
import { isUserSelectedReducer } from "./state/users/isUserSelectedReducer";
import { usersSlice } from "./state/users/usersSlice";

const reducer = {
  users: usersSlice.reducer,
  posts: postReducer,
  isUserSelected: isUserSelectedReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
