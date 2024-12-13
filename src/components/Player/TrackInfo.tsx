import { Heart } from "lucide-react";

export function TrackInfo() {
  return (
    <div className="flex items-center min-w-[180px] max-w-[30%]">
      <img
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
        alt="Current track"
        className="w-14 h-14 rounded"
      />
      <div className="ml-3 mr-4">
        <h4 className="text-sm text-white hover:underline cursor-pointer">
          Tum Hi Ho
        </h4>
        <p className="text-xs text-[#b3b3b3] hover:text-white hover:underline cursor-pointer">
          Arijit Singh
        </p>
      </div>
      <button className="text-[#b3b3b3] hover:text-white transition">
        <Heart size={20} />
      </button>
    </div>
  );
}
