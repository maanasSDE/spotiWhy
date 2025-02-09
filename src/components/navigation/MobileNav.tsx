import { Home, Search, Library, Disc } from "lucide-react";
import { MobileNavLink } from "./MobileNavLink";

export function MobileNav() {
  return (
    <nav className="lg:hidden block fixed z-30 bottom-0 left-0 right-0 overflow-y-scroll no-scrollbar">
      <div className="bg-gradient-to-t from-[#000000] to-[#121212] px-6 py-2 opacity-90">
        <div className="flex justify-between items-center">
          <MobileNavLink icon={<Home size={26} />} text="Home" active />
          <MobileNavLink icon={<Search size={26} />} text="Search" />
          <MobileNavLink icon={<Library size={26} />} text="Library" />
          <MobileNavLink icon={<Disc size={26} />} text="Premium" />
        </div>
      </div>
    </nav>
  );
}
