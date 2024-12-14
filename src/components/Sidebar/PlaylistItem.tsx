interface PlaylistItemProps {
  title: string;
}

export function PlaylistItem({ title }: PlaylistItemProps) {
  return (
    <a
      href="#"
      className="block py-1.5 text-[#b3b3b3] hover:text-white transition-colors text-[14px]"
    >
      {title}
    </a>
  );
}
