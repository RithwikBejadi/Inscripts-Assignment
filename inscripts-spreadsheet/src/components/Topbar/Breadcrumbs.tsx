import React from "react";

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="flex items-center text-xs text-gray-400 gap-1">
      <span className="font-medium text-gray-500">Workspace</span>
      <span className="mx-1">&gt;</span>
      <span className="font-medium text-gray-500">Folder 2</span>
      <span className="mx-1">&gt;</span>
      <span className="font-semibold text-gray-800">Spreadsheet 3</span>
    </nav>
  );
};

export default Breadcrumbs; 