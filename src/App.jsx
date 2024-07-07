import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <>
      <div className="w-full h-screen  flex flex-col background overflow-x-hidden items-center">
        <h1
          className="bg-pink-200 rounded-lg text-center 
       px-10 py-3 text-4xl  font-bold"
        >
          RANDOM GIFS
        </h1>
     
      <div className="flex flex-col w-full items-center justify-center  gap-y-10  mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
      </div>
    </>
  );
}

export default App;
