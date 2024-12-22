import {
  ChevronLeft,
  ChevronRight,
  Bell,
  User,
  SmilePlus,
  Ellipsis,
  Search,
} from "lucide-react";

export function HeaderWeb() {
  return (
    <div className="hidden lg:block fixed z-10 top-0 left-0 right-0 bg-[#000000] border-t border-[#282828] px-4 py-3">
      <div className=" flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-1">
            <button className="hidden md:block text-[#b3b3b3] hover:text-white ">
              <Ellipsis className="w-5 h-5" />
            </button>
            <button className="bg-black/70 p-1 rounded-full hover:bg-black/90 transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="bg-black/70 p-1 rounded-full hover:bg-black/90 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="w-full bg-[#1b1b1b] placeholder:text-gray-500 text-white text-sm rounded-3xl pl-4 pr-28 py-2  focus:border-white"
              placeholder="What do you wanna play?"
            />
            <button
              className="absolute top-1 right-1 flex items-center px-2.5 border border-transparent text-center text-sm text-white"
              type="button"
            >
              <Search />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:block bg-white text-[#000000] text-sm font-medium px-4 rounded-3xl p-1">
            Explore Premium
          </button>
          <button className="hidden md:block text-[#b3b3b3] hover:text-white p-2">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-[#b3b3b3] p-1 rounded-full hover:text-white transition">
            <SmilePlus className="w-5 h-5" />
          </button>
          <button className="text-[#b3b3b3] p-1 rounded-full  hover:text-white transition">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
