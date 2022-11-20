import React from "react";
import SongList from "../components/SongList";
import Categories from "./Categories";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className=" ">
      <Navbar />
      <Categories />
      <SongList />
    </div>
  );
};

export default Hero;
