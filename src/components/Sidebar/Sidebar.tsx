import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { NavLink } from "./NavLink";
import { PlaylistItem } from "./PlaylistItem";

export function Sidebar() {
  return (
    <aside className="w-64 bg-black text-gray-300 p-6 flex flex-col h-screen">
      <div className="mb-8">
        <img src="/spotify-white.svg" alt="Spotify" className="h-10" />
      </div>

      <nav className="space-y-4">
        <NavLink icon={<Home />} text="Home" active />
        <NavLink icon={<Search />} text="Search" />
        <NavLink icon={<Library />} text="Your Library" />
      </nav>

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

      <div className="mt-6 border-t border-gray-800 pt-6 space-y-2">
        <PlaylistItem title="Top Hindi Songs" />
        <PlaylistItem title="Bollywood Butter" />
        <PlaylistItem title="Indie India" />
        <PlaylistItem title="Punjabi 101" />
        <PlaylistItem title="Tamil Hits" />
      </div>
    </aside>
  );
}
