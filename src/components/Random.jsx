import React from "react";
import Spiner from "./Spiner";
import UseGif from "../hooks/UseGif";

const Random = () => {

  const { gif, loading, fetchdata } = UseGif();
  
  return (
    <div
      className="w-1/2  bg-green-300 rounded-lg border border-black
    relative flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-xl md:text-2xl underline uppercase font-bold">
        Random Gif
      </h1>
      {loading ? <Spiner></Spiner> : <img src={gif} alt="" />}
      <button
        className="w-10/12  bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide"
        onClick={() => {
          fetchdata();
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
