import { Volume2, Maximize2 } from "lucide-react";

export function VolumeControls() {
  return (
    <div className="flex items-center gap-2 min-w-[180px] justify-end">
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Volume2 size={20} />
      </button>
      <div className="w-24 group">
        <div className="h-1 bg-[#4d4d4d] rounded-full cursor-pointer">
          <div className="relative w-2/3 h-full bg-white rounded-full group-hover:bg-[#1db954]">
            <div className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Maximize2 size={20} />
      </button>
    </div>
  );
}
