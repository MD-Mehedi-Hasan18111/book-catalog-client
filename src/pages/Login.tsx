import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.hippo.com/sites/default/files/content/blog/image/2022-02/how-to-make-a-home-library-hero.jpg)",
        }}
      >
        <div className="bg-white w-[800px] shadow-md rounded-lg p-8 flex">
          <div className="w-1/2 flex items-center justify-center">
            <div>
              <div className="text-center mb-4">
                <img
                  height="65px"
                  width="65px"
                  className="mx-auto"
                  src="https://www.cityofsachse.com/ImageRepository/Document?documentID=7216"
                  alt="logo"
                />
              </div>
              <p className="text-center text-gray-700 text-lg mb-4">
                Login to discover
                <br /> ❤ <br /> share your books!
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Log In
            </h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
              >
                Login
              </button>
              <p className="text-gray-700 text-md mt-4">
                have not account?{" "}
                <Link to="/signup">
                  <a className="text-indigo-500 font-semibold hover:text-indigo-700">
                    Sign Up
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
