/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books/add-book`,
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    getAllBooks: builder.query({
      query: () => "/books/all-books",
    }),
    bookDetails: builder.query({
      query: (id) => `/books/${id}`,
    }),
    booksFilter: builder.query({
      query: ({ genre, publicationYear }) => ({
        url: "/books",
        params: { genre, publicationYear },
      }),
    }),
    booksSearch: builder.query({
      query: ({ search }) => ({
        url: "/books",
        params: { search },
      }),
    }),
  }),
});

export const {
  useUpdateBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useBookDetailsQuery,
  useBooksFilterQuery,
  useBooksSearchQuery,
} = booksApi;
