import React from "react";
import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button className="p-1 bg-black bg-opacity-70 rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button className="p-1 bg-black bg-opacity-70 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">
          <Bell size={20} />
        </button>
        <button className="bg-black bg-opacity-70 p-1 rounded-full">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
