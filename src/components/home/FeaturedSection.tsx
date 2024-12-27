interface FeaturedCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

function FeaturedCard({ title, imageUrl, description }: FeaturedCardProps) {
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
      <p className="text-sm text-[#b3b3b3] line-clamp-2">{description}</p>
    </a>
  );
}

export function FeaturedSection() {
  return (
    <section className="mb-8 mt-12">
      <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <FeaturedCard
          title="Bollywood Butter"
          imageUrl="https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=500&h=500&fit=crop"
          description="The hottest Bollywood songs, refreshed daily!"
        />
        <FeaturedCard
          title="Indie India"
          imageUrl="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&h=500&fit=crop"
          description="Best of independent Indian artists"
        />
        <FeaturedCard
          title="Punjabi Hits"
          imageUrl="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&h=500&fit=crop"
          description="Top Punjabi tracks that rule the charts"
        />
        <FeaturedCard
          title="Tamil Bestsellers"
          imageUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop"
          description="Best of Kollywood music"
        />
      </div>
    </section>
  );
}
