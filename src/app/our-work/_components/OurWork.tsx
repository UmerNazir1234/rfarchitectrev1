import Hero from "@/components/Hero";
import React from "react";
import WorkCard from "./WorkCard";
import { work } from "@/dummyData/data";

const OurWork = () => {
  return (
    <div>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776049/pexels-tranmautritam-326508_rraydb.png"
        title={`Work <span class="text-secondary">Case Studies</span>`}
      />
      <WorkCard
        work={work.filter(
          (item) => item.workId !== "blueticks" && item.workId !== "spotlyy",
        )}
      />
    </div>
  );
};

export default OurWork;
