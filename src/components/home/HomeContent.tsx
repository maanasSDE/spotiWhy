import React from "react";
import { Header } from "./Header";
import { FeaturedSection } from "./FeaturedSection";
import { RecentlyPlayed } from "./RecentlyPlayed";

export function HomeContent() {
  return (
    <div className="px-4 py-4 md:px-8 md:py-6">
      <Header />
      <FeaturedSection />
      <RecentlyPlayed />
    </div>
  );
}
