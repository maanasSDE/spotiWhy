import React from "react";

interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export function SidebarLink({ icon, text, active }: SidebarLinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-4 px-2 py-2 rounded-md transition-colors ${
        active ? "text-white bg-[#282828]" : "text-[#b3b3b3] hover:text-white"
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}
