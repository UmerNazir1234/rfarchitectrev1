'use client'
import React, { useState } from "react";

type tabProps = {
  label?: string;
  content?: React.ReactNode;
};
type TabProps = {
  tabs: tabProps[];
};

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-2 px-4 ${
              activeTab === tab.label ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) =>
          tab.label === activeTab ? (
            <div key={tab.label}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
