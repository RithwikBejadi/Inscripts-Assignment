import React from "react";

const TopbarActions: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search within sheet"
        className="rounded-md bg-gray-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400 w-48"
      />
      {/* Notification Bell */}
      <div className="relative">
        <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
          <span role="img" aria-label="bell">🔔</span>
        </button>
        <span className="absolute top-1 right-1 bg-green-700 text-white text-xs rounded-full px-1.5 py-0.5">2</span>
      </div>
      {/* User Avatar */}
      <div className="flex items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Doe"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col text-xs text-right">
          <span className="font-medium text-gray-800 leading-tight">John Doe</span>
          <span className="text-gray-400 leading-tight">john.doe...</span>
        </div>
      </div>
    </div>
  );
};

export default TopbarActions; 