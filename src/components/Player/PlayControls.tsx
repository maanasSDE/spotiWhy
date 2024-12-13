import { Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react";

export function PlayControls() {
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
        <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full group cursor-pointer">
          <div className="relative w-1/3 h-full bg-white rounded-full group-hover:bg-[#1db954]">
            <div className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>
        <span className="text-xs text-[#b3b3b3]">3:45</span>
      </div>
    </div>
  );
}
