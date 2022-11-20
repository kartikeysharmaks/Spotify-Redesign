import React from "react";
import { BsPerson } from "react-icons/bs";

const Categories = () => {
  return (
    <div>
      <div className="bg-gray-700/90 px-4 py-2 text-gray-300/80 flex sm:items-center justify-between md:text-[19px] md:py-4 md:px-8">
        <ul className="flex space-x-4 md:space-x-6">
          <li>
            <p>Popular</p>
          </li>
          <li>
            <p>Albums</p>
          </li>
          <div className="hidden sm:inline-flex space-x-4 md:space-x-6">
            <li className="">
              <p>Songs</p>
            </li>
            <li>
              <p>Fans also like</p>
            </li>
            <li>
              <p>About</p>
            </li>
          </div>
        </ul>
        <div className="flex items-center ">
          <BsPerson className="text-white mr-[2px] mt-[2px]" />
          <p className="text-white">
            279.1M
            <span className="hidden sm:inline-block text-gray-300/80 sm:pl-2">
              followers
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
