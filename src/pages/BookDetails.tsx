import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IBooks {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

const BookDetails = () => {
  const books: IBooks[] = [
    {
      id: "1",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "2",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "3",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "4",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "5",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "6",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "7",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "8",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      id: "9",
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
  ];

  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState<IBooks | null>(null);
  const [review, setReview] = useState<{
    email: string;
    comment: string;
  } | null>(null);
  const [customerReviews, setCustomerReviews] = useState<
    { email: string; comment: string }[]
  >([]);

  useEffect(() => {
    const findBook = books.find((book) => book.id == id);
    setBook(findBook || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review) {
      setCustomerReviews([...customerReviews, review]);
      setReview(null);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {book ? (
        <div className="flex flex-wrap items-start">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="max-w-full rounded shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 pl-8">
            <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
            <p className="text-lg mb-2"><span className="font-bold">Author:</span> {book.author}</p>
            <p className="text-lg mb-2"><span className="font-bold">Genre:</span> {book.genre}</p>
            <p className="text-lg mb-2">
              <span className="font-bold">Publication Year:</span> {moment(book.publicationDate).format("DD MMMM, YYYY")}
            </p>
            <h3 className="text-xl font-[500] mt-4 mb-2">
              Summary about {book.title}
            </h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consequat convallis est, at fermentum sapien bibendum sit amet.
              Sed faucibus risus non lacus vulputate, eu fermentum mauris
              eleifend. Aliquam venenatis tincidunt nisi, eget dapibus ligula
              commodo in.
            </p>

            <form onSubmit={handleReviewSubmit}>
              <label htmlFor="review" className="text-lg font-[500] mb-3">
                Write Review
              </label>
              <textarea
                id="review"
                value={review?.comment || ""}
                onChange={(e) =>
                  setReview({
                    email: "user@RiGameFill.com",
                    comment: e.target.value,
                  })
                }
                className="w-full h-32 p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Write your review here..."
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                Submit Review
              </button>
            </form>

            <h3 className="text-xl font-bold mt-6">Customer Reviews</h3>
            <div className="mb-4">
              {customerReviews.length > 0 ? (
                <ul className="space-y-4">
                  {customerReviews.map((review, index) => (
                    <li key={index} className="flex items-start mt-4">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
                        alt="User Profile"
                      />
                      <div className="ml-4">
                        <p className="font-[600]">{review.email}</p>
                        <p className="py-2 rounded">{review.comment}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default BookDetails;
