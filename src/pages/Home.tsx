import moment from "moment";
import React from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import { Link } from "react-router-dom";

interface IBooks {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

const Home = () => {
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

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-6xl font-black text-primary mb-2">
              DISCOVER <br /> BOOKS WORLD
            </h1>
            <p className="text-secondary font-semibold text-xl">
              Welcome to Library Catalog!
            </p>
            <div className="text-primary mt-20">
              <p>The Prophet Muhammad said</p>
              <q>
                Whoever teaches some knowledge will have the reward of the one{" "}
                <br /> who acts upon it, without that detracting from his reward
                in the slightest.
              </q>
            </div>
            <button className="mt-5 border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white font-[500] px-[12px] py-[4px] rounded-[8px]">
              Learn more
            </button>
          </div>
          <div className="">
            <img
              height="600px"
              width="600px"
              className="rounded-[14px]"
              src="https://www.mmu.ac.uk/sites/default/files/styles/twitter_card_image/public/2021-08/B11A3502.jpg?h=9eb0d413&itok=4MeyBLS6"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[20px] mb-[100px]">
          <h3 className="text-[20px] font-[500] text-left mb-[20px]">
            Recently Published Books
          </h3>
          <div className="grid grid-cols-3 gap-x-10 gap-y-10">
            {books.map((book, i) => {
              return (
                <Link key={i} to={`/details/${book.id}`}>
                  <Card book={book} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
