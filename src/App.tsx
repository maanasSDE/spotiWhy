import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Player } from "./components/Player/Player";
import { Header } from "./components/Main/Header";
import { FeaturedSection } from "./components/Main/FeaturedSection";
import { RecentlyPlayed } from "./components/Main/RecentlyPlayed";

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8 pb-24">
        <Header />
        <FeaturedSection />
        <RecentlyPlayed />
      </main>

      <Player />
    </div>
  );
}

export default App;
