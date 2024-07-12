import Hero from "@/components/Hero";
import React from "react";
import WorkCard from "./WorkCard";
import { work } from "@/dummyData/data";

const OurWork = () => {
  return (
    <main>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776049/pexels-tranmautritam-326508_rraydb.png"
        title={` Experience Our <span class="text-secondary">Expertise</span>`}
      />
      <WorkCard work={work} />
    </main>
  );
};

export default OurWork;
