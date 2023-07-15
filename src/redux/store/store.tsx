import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import booksReduer from "../features/books/booksSlice";
import { api } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: usersReducer,
    books: booksReduer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
