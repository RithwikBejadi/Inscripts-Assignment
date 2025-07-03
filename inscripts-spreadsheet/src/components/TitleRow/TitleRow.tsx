import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [active, setActive] = useState(0);
  const tabs = ["Sheet1", "Sheet2"];
  return (
    <div className="flex gap-2 bg-gray-200 p-2 border-t">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={`px-4 py-1 rounded-t ${active === idx ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-100'}`}
          onClick={() => {
            setActive(idx);
            console.log(`Tab changed: ${tab}`);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs; 