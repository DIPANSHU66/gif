import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';


const API_KEY='tIiWodKQbTSEUi1ThINIalL1F2w5SiAT';

const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const UseGif = (tag) => {

  const[gif,setGif]= useState('');

  const[loading,setloading]=useState(false);

  async function fetchdata(tag) {
    setloading(true);
    const { data } = await axios.get(tag ?`${url}&tag=${tag}`:url);
    const imagesource = data.data.images.downsized_large.url;
    setGif(imagesource);
    setloading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);


  return {gif,loading,fetchdata};
};

export default UseGif;
