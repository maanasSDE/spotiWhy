import React from "react";

interface FeaturedCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

function FeaturedCard({ title, imageUrl, description }: FeaturedCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg hover:bg-gray-800 transition cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export function FeaturedSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
