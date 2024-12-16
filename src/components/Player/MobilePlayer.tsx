import { useState } from "react";
import { Play, Pause } from "lucide-react";

export function MobilePlayer() {
  const [isPlaying, setisPlaying] = useState(true);

  const toggleIcon = () => {
    setisPlaying(!isPlaying); // Toggle the state
  };

  return (
    <div className="fixed bottom-[70px] left-0 right-0  bg-[#181818] border-t border-[#282828] mx-3 p-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
            alt="Current track"
            className="w-12 h-12 rounded flex-shrink-0"
          />
          <div className="ml-3 flex-1 min-w-0">
            <h4 className="text-sm font-medium text-white truncate">
              Tum Hi Ho
            </h4>
            <p className="text-xs text-[#b3b3b3] truncate">Arijit Singh</p>
          </div>
        </div>
        <div className="flex items-center gap-6 ml-4">
          <button onClick={toggleIcon} className="text-white p-2">
            {isPlaying ? (
              <Play size={20} fill="currentColor" />
            ) : (
              <Pause size={20} fill="currentColor" />
            )}
          </button>
        </div>
      </div>
      <div className="mt-2">
        <div className="h-1 bg-[#4d4d4d] rounded-full">
          <div className="w-1/3 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
