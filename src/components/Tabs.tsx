"use client";
import React, { useState } from "react";

type tabProps = {
  label?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
};
type TabProps = {
  tabs: tabProps[];
};

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex items-center md:flex-nowrap flex-wrap justify-center gap-5 max-md:px-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`rounded-xl lg:min-w-48 min-w-28 lg:py-8 md:py-4 py-2 px-2 p-lg max-md:text-base text-primary font-semibold bg-blueLight shadow  ${
              activeTab === tab.label ? " bg-secondary text-white " : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center justify-center lg:mb-4 mb-1 ">
              {tab?.icon}
            </div>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-2 ">
        {tabs.map((tab) =>
          tab.label === activeTab ? (
            <div
              key={tab.label}
              className="p-lg max-md:text-base mt-8 text-justify"
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
