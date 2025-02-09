import { FeaturedSection } from "./FeaturedSection";
import { RecentlyPlayed } from "./RecentlyPlayed";
import { MobileLibrary } from "./mobileLibrary";

export function HomeContent() {
  return (
    <div className="px-4 py-4 md:px-8 md:py-6">
      <MobileLibrary />
      <FeaturedSection />
      <RecentlyPlayed />
    </div>
  );
}
