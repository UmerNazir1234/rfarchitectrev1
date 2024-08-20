import Hero from "@/components/Hero";
import React from "react";
import AboutSection from "./AboutSection";
import HeadingBox from "@/components/HeadingBox";
import Experience from "./Experience";
import OurVision from "./OurVision";
import WhatMakesUnique from "./WhatMakesUnique";
import ProjectSubmission from "@/components/ProjectSubmission";
import content from "@/data/about";

const AboutUs = () => {
  const {
    banner,
    about,
    wearerf,
    experience,
    vision,
    projectSubmission,
    tabs,
  } = content;
  return (
    <div>
      <Hero image={banner?.image} title={banner?.title} />
      <AboutSection data={about} />
      <HeadingBox
        classes="text-primary"
        title={wearerf?.title}
        description={wearerf?.description}
      />
      <Experience data={experience} />
      <OurVision data={vision} />
      <WhatMakesUnique />
      <ProjectSubmission
        title={projectSubmission?.title}
        description={projectSubmission?.details}
        btnTitle={projectSubmission?.btntitle}
        btnUrl={projectSubmission?.btnurl}
      />
    </div>
  );
};

export default AboutUs;
