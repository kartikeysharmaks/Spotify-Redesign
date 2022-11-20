import Image from "next/image";
import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
const Song = ({ number, title, image }) => {
  return (
    <div className="flex justify-between items-center mt-2   bg-gradient-to-r from-gray-300/20 to-gray-500/10 hover:bg-black/[30%] rounded-md px-8">
      <div className="flex items-center   py-2   duration-200 ease-in min-w-[27rem] max-w-   truncate  ">
        <p className="text-white  pr-8">{number}.</p>
        <div className="w-20 h-20 shrink-0 flex">
          <Image src={image} className="rounded-[0.5rem] object-cover" alt="song-image" />
        </div>
        <p className="pl-6 text-white truncate ">{title}</p>
      </div>
      <div className="hidden sm:inline-flex text-white whitespace-nowrap text-end  ">
        <p className="">Hunting High And Low</p>
      </div>
      <div className="items-center justify-between text-white   space-x-12 hidden lg:inline-flex">
        <div className="flex items-center space-x-2">
          <FaHeadphones className="" />
          <p>830,639,109</p>
        </div>
        <div className="hidden xl:inline-flex  items-center space-x-2">
          <BsClock />
          <p>3:10</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
