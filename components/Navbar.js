import React from "react";
import verified from "../assets/check.png";
import Image from "next/image";
import grande from "../assets/grande.jpg";
import { FaHeadphones } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-between  w-full   bg-[url('../assets/grande.jpg')] 
      bg-cover bg-black/40 bg-blend-darken bg-no-repeat py-4 pb-9 sm:pb-4 sm:pt-8 md:pb-8 md:pt-10  h-full sm:bg-center sm:px-4  md:bg-[center_top_-3rem] lg:h-[19rem]  "
      >
        <div className=" h-[12rem] w-full px-4    lg:h-full ">
          <div className=" md:text-[18px] ">
            <p className="text-white">
              Home <span className="text-gray-400"> / Popular Artists</span>
            </p>
          </div>

          <div className="  sm:flex sm:justify-between sm:items-end  lg:h-full lg:pb-10   ">
            <div className="pt-8">
              <p className="text-gray-400 md:text-[18px] font-semibold ">
                ARTIST
              </p>
              <div className="flex lg:items-center ">
                <p className="text-white text-[30px] md:text-[40px] font-bold">
                  Ariana Grande
                </p>
                <div className="h-12 w-12  flex">
                  <Image src={verified} className="object-cover" alt="verified" />
                </div>
              </div>
              <div className="text-white flex items-center md:text-[18px] md:mt-2 ">
                <FaHeadphones className="" />
                <p className="px-2 ">64,427,424</p>
                <p className="text-gray-400">Monthly Listeners</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4   ">
              <div>
                <button className="py-2 bg-[#5bd83b] rounded-full px-8 text-white font-semibold md:text-[18px] md:px-12 ">
                  PLAY
                </button>
              </div>

              <button className="py-2 bg-gray-600/70  rounded-full px-4 text-gray-200 flex items-center text-[14px] md:py-  md:text-[18px] md:px-7">
                <IoCheckmarkSharp className="text-white  top-3 left-3 mr-[0.3rem] " />
                Following
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
