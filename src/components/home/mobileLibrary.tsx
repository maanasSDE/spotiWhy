import { Heart } from "lucide-react";

export function MobileLibrary() {
  const playlists = [
    {
      gradient:
        "bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700",
      icon: "heart",
    },
    {
      title: "Your Top Songs 2023",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    },

    {
      title: "Spanish Blast",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    },
    {
      title: "Country Songs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/John_Denver_1974.jpg/330px-John_Denver_1974.jpg",
    },
    {
      title: "EDM",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    },
    {
      title: "Rahat Fateh Ali Khan",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="lg:hidden pt-14 grid grid-cols-2 gap-2">
      {playlists.map((playlist, index) => (
        <a
          key={index}
          href="#"
          className="relative rounded-lg overflow-hidden aspect-[4/1] bg-[#282828]"
        >
          {playlist.gradient ? (
            <div
              className={`absolute font-bold text-base pl-10 pt-6 inset-0 ${playlist.gradient}`}
            >
              Liked Songs
              {playlist.icon === "heart" && (
                <div className="absolute left-3 bottom-3">
                  <Heart className="w-5 h-5 text-white" fill="white" />
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
