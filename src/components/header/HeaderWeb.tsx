import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";

export function HeaderWeb() {
  return (
    <div className="hidden lg:block fixed z-10 top-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3">
      <div className=" flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-2">
            <button className="bg-black/70 p-1 rounded-full hover:bg-black/90 transition">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="bg-black/70 p-1 rounded-full hover:bg-black/90 transition">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:block text-[#b3b3b3] hover:text-white p-2">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-black/70 p-1 rounded-full hover:bg-black/90 transition">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
