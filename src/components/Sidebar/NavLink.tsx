import React from "react";

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export function NavLink({ icon, text, active }: NavLinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-4 hover:text-white transition ${
        active ? "text-white" : ""
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}
