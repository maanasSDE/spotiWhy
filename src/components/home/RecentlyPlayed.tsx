interface RecentCardProps {
  title: string;
  imageUrl: string;
  artist: string;
}

function RecentCard({ title, imageUrl, artist }: RecentCardProps) {
  return (
    <a
      href="#"
      className="p-4 rounded-lg bg-[#181818] hover:bg-[#282828] transition-all duration-300 group"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="aspect-square w-full object-cover rounded-md shadow-lg mb-4"
        />
        <button className="absolute right-2 bottom-2 w-12 h-12 bg-[#1db954] rounded-full shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      <h3 className="font-bold mb-1 truncate">{title}</h3>
      <p className="text-sm text-[#b3b3b3] truncate">{artist}</p>
    </a>
  );
}

export function RecentlyPlayed() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <RecentCard
          title="Daily Mix 1"
          imageUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
          artist="Based on your recent listening"
        />
        <RecentCard
          title="Top 50 - India"
          imageUrl="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
          artist="Your daily update of the most played tracks"
        />
        <RecentCard
          title="Peaceful Piano"
          imageUrl="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop"
          artist="Relax and indulge with beautiful piano pieces"
        />
        <RecentCard
          title="Bollywood Acoustic"
          imageUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
          artist="Unplugged versions of your favorite songs"
        />
        <RecentCard
          title="Hindi Lofi"
          imageUrl="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
          artist="Chill beats with Hindi vocals"
        />
        <RecentCard
          title="Party Punjabi"
          imageUrl="https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop"
          artist="Dance to the latest Punjabi hits"
        />
      </div>
    </section>
  );
}
