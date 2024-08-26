"use client";
import React, { useState } from "react";
import type { Tabs } from "@/lib/type"; // Use type-only import
import { IoMdArrowDropdownCircle } from "react-icons/io";

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
            className={`w-full rounded-xl lg:min-w-52 min-w-28 lg:py-8 relative md:py-4 py-2 px-6 text-primary font-semibold bg-blueLight shadow ${
              activeTab === tab.label ? "bg-secondary text-white" : ""
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {activeTab === tab.label && (
              <div className="absolute bottom-[-18px] left-[40%] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="18"
                  viewBox="0 0 39 18"
                  fill="none"
                >
                  <path
                    d="M19.5 18L0.880455 0H38.1195L19.5 18Z"
                    fill="#edac18"
                  />
                </svg>
              </div>
            )}
            <div className="flex items-center justify-center lg:mb-4 mb-1">
              {tab?.icon}
            </div>
            <p className=" text-base font-bold">{tab.label}</p>
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
