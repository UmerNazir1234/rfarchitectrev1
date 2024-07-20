import Hero from "@/components/Hero";
import React from "react";
import AboutSection from "./AboutSection";
import HeadingBox from "@/components/HeadingBox";
import Experience from "./Experience";
import OurVision from "./OurVision";
import WhatMakesUnique from "./WhatMakesUnique";
import ProjectSubmission from "@/components/ProjectSubmission";

const AboutUs = () => {
  return (
    <div>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg"
        title={`WHO WE ARE <span class="text-secondary">?</span>`}
      />
      <AboutSection />
      <HeadingBox
        classes="text-primary"
        title="we are rf tech"
        description="Our company was established in late 2018. Our main office is situated in Rawalpindi where our staff is available 24 hours a day. We work as a team there and provide them with our maximum efforts. A friendly environment enables our clients to completely speak their minds. So we can have an idea about what type of work they expected from us. And we are always so on with their expectations."
      />
      <Experience />
      <OurVision />
      <WhatMakesUnique />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        email="info@rftechnologies.com"
        number="00 000 0000"
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </div>
  );
};

export default AboutUs;
