import React from "react";
import Song from "./Song";
import maroon5 from "../assets/maroon5.png";
import zayn from "../assets/zayn.png";
import jayz from "../assets/jayz.png";
import coldplay from "../assets/coldplay.jpg";
import cent from "../assets/50cent.jpg";

const SongList = () => {
  const songs = [
    {
      number: 1,
      title: "Tiers with Ariana Grande",
      image: maroon5,
    },
    {
      number: 2,
      title: "Santa Tell Me",
      image: zayn,
    },
    {
      number: 3,
      title: "Positions",
      image: jayz,
    },
    {
      number: 4,
      title: "7 Rings",
      image: coldplay,
    },
    {
      number: 5,
      title: "Stuck with U (with Justin Bieber)",
      image: cent,
    },
  ];
  return (
    <div className="bg-black/80 p-6 ">
      <div className="flex text-white items-center">
        <p className="text-[28px] font-semibold">The List </p>
        <p className="text-[20px] text-gray-300 pl-3">12 songs</p>
      </div>
      <div className="">
        <ul>
          {songs.map((song) => (
            <li key={song.number}>
              <Song
                number={song.number}
                title={song.title}
                image={song.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
