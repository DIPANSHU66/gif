import React from "react";
import { useState } from "react";
import Spiner from "./Spiner";
import UseGif from "../hooks/UseGif";


const Tag = () => {
 
  const[tag,setTag]= useState('');
  


const{gif,loading,fetchdata}=UseGif(tag);



 

  return (
    <div
      className="w-1/2  bg-blue-200 rounded-lg border border-black
    relative flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-xl md:text-2xl underline uppercase font-bold">
        Random  {tag}   Gif
      </h1>
      {
      loading?(<Spiner></Spiner>):(<img src={gif} alt="" />)
      }
      <input  onChange={(event)=>setTag(event.target.value)} className="w-8/12  text-lg py-2  rounded-lg  mb-[20px]  text-center "type="text" />
      <button
        className="w-10/12  bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide"
        onClick={()=>{fetchdata(tag)}}
        value={tag}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
