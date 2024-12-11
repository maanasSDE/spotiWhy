import { Play } from "lucide-react";

interface RecentCardProps {
  title: string;
  imageUrl: string;
}

function RecentCard({ title, imageUrl }: RecentCardProps) {
  return (
    <div className="group relative bg-gray-900 rounded-md p-4 hover:bg-gray-800 transition cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-square object-cover rounded-md mb-4"
      />
      <button className="absolute right-6 bottom-20 p-3 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
        <Play fill="white" size={24} />
      </button>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
  );
}

export function RecentlyPlayed() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <RecentCard
          title="Daily Mix 1"
          imageUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
        />
        <RecentCard
          title="Top 50 - India"
          imageUrl="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
        />
        <RecentCard
          title="Peaceful Piano"
          imageUrl="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop"
        />
        <RecentCard
          title="Bollywood Acoustic"
          imageUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
        />
        <RecentCard
          title="Hindi Lofi"
          imageUrl="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
        />
        <RecentCard
          title="Party Punjabi"
          imageUrl="https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop"
        />
      </div>
    </section>
  );
}
