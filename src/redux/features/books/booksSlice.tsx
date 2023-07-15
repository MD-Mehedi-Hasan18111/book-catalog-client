import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  summary?: string;
}

const initialState: { books: IBooks[] } = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooks[]>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
