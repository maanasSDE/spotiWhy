import { Heart } from "lucide-react";

export function MobileLibrary() {
  const playlists = [
    {
      title: "Liked Songs",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      icon: "heart",
    },
    {
      title: "Your Top Songs 2023",
      image:
        "https://images.unsplash.com/photo-1671226366569-22c8da6d7d65?w=300&h=300&fit=crop",
    },
    {
      title: "Russian",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    },
    {
      title: "Flirting songs",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    },
    {
      title: "EDM",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    },
    {
      title: "Best Of Rahat Fateh Ali Khan",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {playlists.map((playlist, index) => (
        <a
          key={index}
          href="#"
          className="relative rounded-lg overflow-hidden aspect-[3/2] bg-[#282828]"
        >
          {playlist.gradient ? (
            <div className={`absolute inset-0 ${playlist.gradient}`}>
              {playlist.icon === "heart" && (
                <div className="absolute left-3 bottom-3">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
              )}
            </div>
          ) : (
            <img
              src={playlist.image}
              alt={playlist.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 p-3 flex items-end">
            <h3 className="text-white font-bold text-base leading-tight">
              {playlist.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}
