import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import SheetName from "./SheetName";
import TopbarActions from "./TopbarActions";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white border-b h-14">
      <Breadcrumbs />
      <SheetName />
      <TopbarActions />
    </div>
  );
};

export default Topbar;
