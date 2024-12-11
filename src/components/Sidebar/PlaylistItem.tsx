interface PlaylistItemProps {
  title: string;
}

export function PlaylistItem({ title }: PlaylistItemProps) {
  return (
    <a
      href="#"
      className="block py-1 text-sm text-gray-400 hover:text-white transition"
    >
      {title}
    </a>
  );
}
