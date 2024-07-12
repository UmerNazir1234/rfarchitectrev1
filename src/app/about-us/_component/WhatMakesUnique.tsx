import Tabs from "@/components/Tabs";
import React from "react";
import { tabs } from "@/dummyData/data";
const WhatMakesUnique = () => {
  return (
    <section className="">
      <div className="page-width py-16">
        <h2 className="text-[#002577] text-center my-10">
          WHAT MAKES US <span className="text-[#EDAC18]">UNIQUE</span>?
        </h2>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default WhatMakesUnique;
