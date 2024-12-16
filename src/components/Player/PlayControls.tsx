import { Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react";
import { useState } from "react";

export function PlayControls() {
  const [value, setValue] = useState(33);

  return (
    <div className="flex flex-col items-center max-w-[45%] w-full">
      <div className="flex items-center gap-4">
        <button className="text-[#b3b3b3] hover:text-white transition">
          <Shuffle size={20} />
        </button>
        <button className="text-[#b3b3b3] hover:text-white transition">
          <SkipBack size={20} />
        </button>
        <button className="bg-white rounded-full p-2 hover:scale-105 transition">
          <Play size={20} fill="black" />
        </button>
        <button className="text-[#b3b3b3] hover:text-white transition">
          <SkipForward size={20} />
        </button>
        <button className="text-[#b3b3b3] hover:text-white transition">
          <Repeat size={20} />
        </button>
      </div>
      <div className="w-full flex items-center gap-2 mt-2">
        <span className="text-xs text-[#b3b3b3]">2:14</span>
        <div className="relative flex-1 h-1 bg-[#4d4d4d] rounded-full cursor-pointer group">
          {/* Dynamic filled track */}
          <div
            className="absolute h-full bg-white rounded-full pointer-events-none group-hover:bg-[#1db954]"
            style={{ width: `${value}%` }} // Width changes dynamically with slider value
          ></div>

          {/* Slider input */}
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))} // Convert value to number
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
        <span className="text-xs text-[#b3b3b3]">3:45</span>
      </div>
    </div>
  );
}
