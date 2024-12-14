import { PlayControls } from "./PlayControls";
import { TrackInfo } from "./TrackInfo";
import { VolumeControls } from "./VolumeControls";
import { MobilePlayer } from "./MobilePlayer";

export function NowPlaying() {
  return (
    <>
      {/* Mobile Player */}
      <div className="lg:hidden">
        <MobilePlayer />
      </div>

      {/* Desktop Player */}
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3">
        <div className="flex items-center justify-between mx-auto">
          <TrackInfo />
          <PlayControls />
          <VolumeControls />
        </div>
      </div>
    </>
  );
}
