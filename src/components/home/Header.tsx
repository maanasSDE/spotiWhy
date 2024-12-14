import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
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
    </header>
  );
}
