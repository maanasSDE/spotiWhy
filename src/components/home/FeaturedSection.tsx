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
      <h2 className="text-2xl font-bold mb-4">Made for You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <FeaturedCard
          title="One Direction"
          imageUrl="https://upload.wikimedia.org/wikipedia/en/7/79/Take_Me_Home_by_One_Direction.png"
          description=""
        />
        <FeaturedCard
          title="Ed Sheeran"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/330px-Ed_Sheeran-6886_%28cropped%29.jpg"
          description=""
        />
        <FeaturedCard
          title="Pritam"
          imageUrl="https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_l_1716815534.webp"
          description="Top Pritam tracks that rule the charts"
        />
        <FeaturedCard
          title="John Denver"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/John_Denver_1974.jpg/330px-John_Denver_1974.jpg"
          description="Best of Kollywood music"
        />
        <FeaturedCard
          title="KK"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/KK_%28124%29.jpg/255px-KK_%28124%29.jpg"
          description="Best of Kollywood music"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <FeaturedCard
          title="Bollywood Butter"
          imageUrl="https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=500&h=500&fit=crop"
          description="The hottest Bollywood songs, refreshed daily!"
        />
        <FeaturedCard
          title="Bollywood & Chill"
          imageUrl="https://media.istockphoto.com/id/1253945768/vector/sale2.jpg?s=612x612&w=0&k=20&c=msJYpJQZitTc1LysKHSUoY9PdTLpD_RBhzSpreqkSxo="
          description="Best of Bollywood has to offer"
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
