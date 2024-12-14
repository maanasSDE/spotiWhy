import React from "react";

interface MobileNavLinkProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export function MobileNavLink({ icon, text, active }: MobileNavLinkProps) {
  return (
    <a
      href="#"
      className={`flex flex-col items-center gap-1 py-1 ${
        active ? "text-white" : "text-[#b3b3b3]"
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{text}</span>
    </a>
  );
}
