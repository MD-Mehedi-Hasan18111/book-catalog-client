import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";

interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

const AllBooks = () => {
  const genres = [
    "Mystery",
    "Thriller",
    "Science Fiction",
    "Historical Fiction",
    "Poetry",
  ];

  const publicationYears = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  const books: IBooks[] = [
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
    {
      title: "Computer Programming",
      author: "Tamim Shahriar Subeen",
      genre: "Dimik",
      publicationDate: "2015-01-01",
      image:
        "https://static-01.daraz.com.bd/p/e5af5d950fff75fffd7f6a79d7aab4e3.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>All Books</title>
      </Helmet>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className="text-[14px] bg-green-500 text-white px-[12px] py-[4px] rounded-[8px]">
              Reset
            </button>
          </div>
          {/* Filter options */}
          <div className="space-y-2">
            <div className="bg-white p-2 rounded">
              <h2 className="text-[15px] text-gray-400">By Genre:</h2>
              <div className="mt-2">
                {genres?.map((genre, i) => {
                  return (
                    <div key={i} className="flex items-center mb-[8px]">
                      <input
                        className="h-[18px] w-[18px]"
                        id={genre}
                        type="radio"
                        name="genre"
                      />
                      <label className="text-[14px] ml-3" htmlFor={genre}>
                        {genre}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white p-2 rounded">
              <div className="bg-white p-2 rounded">
                <h2 className="text-[15px] text-gray-400">
                  By Publication Year:
                </h2>
                <div className="mt-2">
                  {publicationYears?.map((genre, i) => {
                    return (
                      <div key={i} className="flex items-center mb-[8px]">
                        <input
                          className="h-[18px] w-[18px]"
                          id={genre}
                          type="radio"
                          name="genre"
                        />
                        <label className="text-[14px] ml-3" htmlFor={genre}>
                          {genre}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow p-4">
          {/* Search bar */}
          <div className="flex items-center mb-4">
            <input
              className="border border-gray-300 p-2 mr-2 flex-grow"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Search
            </button>
          </div>

          {/* All Books */}
          <div className="mt-[20px] mb-[100px]">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              {books.map((book, i) => {
                return (
                  <div key={i}>
                    <Card book={book} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
