import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { SidebarLink } from "./SidebarLink";
import { PlaylistItem } from "./PlaylistItem";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 bg-[#121212] flex-col h-screen">
      <div className="p-6">
        <div className="mb-8">
          <img src="/spotify-white.svg" alt="Spotify" className="h-10" />
        </div>

        <nav className="mb-6 space-y-2">
          <SidebarLink icon={<Home size={24} />} text="Home" active />
          <SidebarLink icon={<Search size={24} />} text="Search" />
          <SidebarLink icon={<Library size={24} />} text="Your Library" />
        </nav>

        <div className="mt-8 space-y-4">
          <button className="w-full flex items-center gap-2 text-[#b3b3b3] hover:text-white transition group">
            <span className="p-1 bg-[#282828] rounded-sm group-hover:bg-[#1a1a1a]">
              <Plus size={20} />
            </span>
            <span className="font-medium">Create Playlist</span>
          </button>

          <button className="w-full flex items-center gap-2 text-[#b3b3b3] hover:text-white transition group">
            <span className="p-1 bg-gradient-to-br from-[#450af5] to-[#c4efd9] rounded-sm">
              <Heart size={20} />
            </span>
            <span className="font-medium">Liked Songs</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <div className="px-4 space-y-2">
          <PlaylistItem title="Top Hindi Songs" />
          <PlaylistItem title="Bollywood Butter" />
          <PlaylistItem title="Indie India" />
          <PlaylistItem title="Punjabi 101" />
          <PlaylistItem title="Tamil Hits" />
          <PlaylistItem title="Telugu Trending" />
          <PlaylistItem title="Malayalam Classics" />
          <PlaylistItem title="Kannada Hits" />
          <PlaylistItem title="Marathi Mix" />
          <PlaylistItem title="Bengali Beats" />
        </div>
      </div>
    </aside>
  );
}
