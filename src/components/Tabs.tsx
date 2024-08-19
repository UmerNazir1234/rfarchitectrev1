"use client";
import React, { useState } from "react";
import { tabs } from "@/dummyData/data";
import type { Tabs } from "@/lib/type"; // Use type-only import

type TabsProps = {
  tabs: Tabs[]; // Using the Tabs type for props
};

const TabsComponent = ({ tabs }: TabsProps) => {
  // Renamed to avoid conflict
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="relative z-1">
      <div className="flex items-center md:flex-nowrap flex-wrap justify-center gap-5 max-md:px-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`w-full rounded-xl lg:min-w-52 min-w-28 lg:py-8 md:py-4 py-2 px-6 text-primary font-semibold bg-blueLight shadow ${
              activeTab === tab.label ? "bg-secondary text-white" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center justify-center lg:mb-4 mb-1">
              {tab?.icon}
            </div>
            <p className="text-base">{tab.label}</p>
          </button>
        ))}
      </div>
      <div className="py-2">
        {tabs.map((tab) =>
          tab.label === activeTab ? (
            <p
              key={tab.label}
              className="max-md:text-base mt-8 text-justify p-lg"
            >
              {tab.content}
            </p>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabsComponent; // Make sure to export the renamed component
