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
      invalidatesTags: ["addNewBook"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["bookDetails"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
    getAllBooks: builder.query({
      query: ({ search, genre, publicationYear }) => ({
        url: "/books/all-books",
        params: { search, genre, publicationYear },
        providesTags: ["addNewBook", "deleteBook"],
      }),
    }),
    bookDetails: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["bookDetails"],
    }),
  }),
});

export const {
  useUpdateBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useBookDetailsQuery,
} = booksApi;
