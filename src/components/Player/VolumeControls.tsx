import {
  Volume2,
  Maximize2,
  PictureInPicture2,
  Mic2,
  PlaySquare,
  ListMusic,
} from "lucide-react";
import { useState } from "react";

export function VolumeControls() {
  const [value, setValue] = useState(50);
  return (
    <div className="flex items-center gap-4 min-w-[190px] justify-end">
      <button className="text-[#b3b3b3] hover:text-white transition">
        <PlaySquare size={19} />
      </button>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Mic2 size={19} />
      </button>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <ListMusic size={19} />
      </button>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Volume2 size={19} />
      </button>
      <div className="w-24 group">
        <div className="relative h-1 bg-[#4d4d4d] rounded-full cursor-pointer group">
          <div
            className="absolute h-full bg-[#ffffff] rounded-full group-hover:bg-[#1db954]"
            style={{ width: `${value}%` }} // Adjust width based on slider value
          ></div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))} // Convert string to number
            className="absolute w-full h-1 bg-transparent appearance-none 
          cursor-pointer 
          [&::-webkit-slider-runnable-track]:bg-transparent 
          [&::-webkit-slider-thumb]:appearance-none 
          group-hover:[&::-webkit-slider-thumb]:block 
          group-hover:[&::-webkit-slider-thumb]:relative 
          group-hover:[&::-webkit-slider-thumb]:w-3 
          group-hover:[&::-webkit-slider-thumb]:h-3 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:shadow-lg"
          />
        </div>
      </div>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <PictureInPicture2 size={19} />
      </button>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Maximize2 size={19} />
      </button>
    </div>
  );
}
