import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-6xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            DISCOVER <br /> BOOKS WORLD
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Welcome to Library Catalog!
          </p>
          <div className="text-primary mt-20">
            <p>The Prophet Muhammad said</p>
            <q>Whoever teaches some knowledge will have the reward of the one <br /> who acts upon it, without that detracting from his reward in the slightest.</q>
          </div>
          <button className="mt-5 border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white font-[500] px-[12px] py-[4px] rounded-[8px]">Learn more</button>
        </div>
        <div className="">
          <img height="600px" width="600px" className="rounded-[14px]" src="https://www.mmu.ac.uk/sites/default/files/styles/twitter_card_image/public/2021-08/B11A3502.jpg?h=9eb0d413&itok=4MeyBLS6" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
