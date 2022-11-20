import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { GiRingedPlanet } from "react-icons/gi";
import { FiRadio } from "react-icons/fi";
import { TbMicrophone2, TbPlaylist, TbPlus } from "react-icons/tb";
import { MdAlbum } from "react-icons/md";
import { IoMdMicrophone } from "react-icons/io";
import { TbPlugConnectedX } from "react-icons/tb";
import { BiVolumeLow } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import { CgPlayList } from "react-icons/cg";
import { HiDocumentSearch } from "react-icons/hi";
import Image from "next/image";
import spotify from "../assets/songs.png";
import player from "../assets/player.png";
import BtnPlaylist from "./BtnPlaylist";

const LeftSidebar = () => {
  const buttons = [
    { starticon: <AiFillHome />, text: "Home" },
    { starticon: <GiRingedPlanet />, text: "Discover" },
    { starticon: <FiRadio />, text: "Radio" },
    { starticon: <TbMicrophone2 />, text: "Artists" },
    { starticon: <MdAlbum />, text: "Albums" },
    { starticon: <IoMdMicrophone />, text: "Podcasts" },
  ];
  const btnsplaylist = [
    {
      starticon: <TbPlaylist />,
      text: "Top Hit 2021-USA",
      endicon: <HiTrash />,
    },
    {
      starticon: <TbPlaylist/>,
      text: "Dance",
      endicon: <HiTrash />,
    },
    {
      starticon: <TbPlaylist/>,
      text: "Discover Weekly 2001",
      endicon: <HiTrash />,
    },
  ];
  return (
    <div className="sticky top-0 left-0 hidden lg:flex bg-gray-900/[90%] h-screen   backdrop-blur-md">
      <div className="w-[15rem] p-4 xl:w-[21rem] xl:px-7 xl">
        <div className="flex items-center justify-between ">
          <div className=" flex space-x-1">
            <div className="w-[0.8rem] h-[0.8rem] bg-red-500 rounded-full"></div>
            <div className="w-[0.8rem] h-[0.8rem] bg-yellow-500 rounded-full"></div>
            <div className="w-[0.8rem] h-[0.8rem] bg-green-500 rounded-full"></div>
          </div>
          <div className="flex space-x-1">
            <IoIosArrowBack className="text-white p-1 bg-gray-900 rounded-full text-[24px]" />
            <IoIosArrowForward className="text-white p-1 bg-gray-900 rounded-full text-[24px]" />
          </div>
        </div>
        <div className="flex pt-7 xl:pt-5 justify-between items-center">
          <div className="w-[7.5rem]  shrink-0">
            <Image src={spotify} alt="spotify"/>
          </div>
          <div className=" ">
            <BsThreeDots className="text-white w-[2rem] h-[2rem] " />
          </div>
        </div>
        <div className="mt-6 xl:mt-5 relative flex items-center">
          <input
            className="bg-black/50 h-[3rem] rounded-[0.5rem] w-full pl-11"
            placeholder="Search"
          />
          <RiSearchLine className="text-gray-300/40 absolute  text-[23px] ml-3 shrink-0" />
          <GoSettings className="text-white/70 absolute  text-[23px] ml-3 shrink-0 rotate-90 right-3" />
        </div>
        <div className="">
          <p className="text-gray-400 pt-5 text-[12px]">MENU</p>
        </div>
        <div className="mt-1">
          <ul className="space-y-1.5 xl:-space-y-0 ">
            {buttons.map((button) => (
              <li key={button.starticon}>
                <BtnPlaylist starticon={button.starticon} text={button.text} />
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between text-white pt-2">
            <p className="text-gray-400 text-[14px]">PLAYLISTS</p>
            <TbPlus className="text-[14px]" />
          </div>
          <div className="pt-0">
            <ul>
              {btnsplaylist.map((btn) => (
                <BtnPlaylist key={btn.text}
                  text={btn.text}
                  starticon={btn.starticon}
                  endicon={btn.endicon}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center pt-4 border-t mt-2 border-gray-400">
          <div className="bg-white rounded-full w-14 h-14 ">
            <Image src={player} alt=""/>
          </div>
          <div className="text-white pl-4">
            <p>Save Your Tears</p>
            <p className="text-gray-400">Ariana grande</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-white pt-3">
          <BiVolumeLow className="w-6 h-6 mr-2" />
          <div className="flex ">
            <div className="relative w-[5rem] h-[0.5rem] bg-[#5bd83b]  rounded-l flex items-center">
              <div className="absolute h-5 w-[0.5rem] bg-white rounded-full left-20  border border-gray-800"></div>
            </div>
            <div className=" w-[2rem] h-[0.5rem] bg-gray-500/50  rounded-r flex items-center"></div>
          </div>
          <div className="flex items-center text-[32px]">
            <CgPlayList />
            <HiDocumentSearch className="text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
