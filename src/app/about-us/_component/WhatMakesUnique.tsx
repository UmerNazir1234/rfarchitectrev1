import Tabs from "@/components/Tabs";
import React from "react";

const WhatMakesUnique = () => {
  const tabs = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];
  return (
    <section className="">
      <div className="page-width py-24">
        <h2 className="text-[#002577] text-center my-10">
          WHAT MAKES US <span className="text-[#EDAC18]">UNIQUE</span>?
        </h2>
        <Tabs tabs={tabs} />
        <p className="p-lg text-center">
          {" "}
          The question that every business holder thinks about at least once is
          why we choose this company over others. Several factors that make us
          unique among other competitors in the industry are :
        </p>
      </div>
    </section>
  );
};

export default WhatMakesUnique;
