import React from "react";
import { Home, Search, Library, Plus, Heart } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black text-gray-300 p-4 flex flex-col h-screen">
      <div className="mb-8">
        <img src="/spotify-white.svg" alt="Spotify" className="h-10" />
      </div>

      <div className="mt-8 space-y-4">
        <button className="flex items-center space-x-2 hover:text-white transition">
          <div className="p-1 bg-gray-800 rounded">
            <Plus size={20} />
          </div>
          <span>Create Playlist</span>
        </button>

        <button className="flex items-center space-x-2 hover:text-white transition">
          <div className="p-1 bg-gradient-to-br from-purple-700 to-blue-300 rounded">
            <Heart size={20} />
          </div>
          <span>Liked Songs</span>
        </button>
      </div>

      <div className="mt-6 border-t border-gray-800 pt-6 space-y-2"></div>
    </aside>
  );
}
