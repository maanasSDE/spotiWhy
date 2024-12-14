import React from "react";
import { Home, Search, Library, Disc } from "lucide-react";
import { MobileNavLink } from "./MobileNavLink";

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-[72px] left-0 right-0 z-40">
      <div className="bg-[#121212] px-6 py-2 mx-2 rounded-lg">
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
