import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { MobileNav } from "../navigation/MobileNav";
import { NowPlaying } from "../Player/NowPlaying";
import { HeaderWeb } from "../header/HeaderWeb";
import { MobileCategories } from "../header/mobileHeader";
interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-[#1f1f1f]">
      <MobileCategories />
      <div className="h-screen bg-black text-white">
        <HeaderWeb />
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f] to-[#121212]">
              <div className="h-full overflow-y-auto pb-24 lg:pb-28">
                {children}
              </div>
            </div>
          </main>
        </div>
        <MobileNav />
        <NowPlaying />
      </div>
    </div>
  );
}
