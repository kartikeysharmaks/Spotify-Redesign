import React from "react";

const BtnPlaylist = ({ text, starticon, endicon }) => {
  return (
    <div className="flex items-center text-white text-[12px] py-2 whitespace-nowrap xl:text-[20px]">
      <div className="text-[24px] mr-2 shrink-0 ">{starticon}</div>

      <p className="truncate">{text}</p>
      <div className="ml-2 shrink-0 text-[20px]">{endicon}</div>
    </div>
  );
};

export default BtnPlaylist;
