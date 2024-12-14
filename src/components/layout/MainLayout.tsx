import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { MobileNav } from "../navigation/MobileNav";
import { NowPlaying } from "../player/NowPlaying";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black">
            <div className="h-full overflow-y-auto pb-24 lg:pb-28">
              {children}
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
      <NowPlaying />
    </div>
  );
}
