import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import TextWithCards from "@/components/TextWithCards";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";
import Stacks from "@/components/Stacks";
import Faq from "@/components/Faq";
import { faq, grapicDesignServiceData } from "@/dummyData/data";
import ProjectSubmission from "@/components/ProjectSubmission";
import SubServices from "@/snippet/SubServices";

const Index = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Graphic Design </span> Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721664267/RfTechnologiesWebsite/marketing-strategy-planning-strategy-concept_1_a2tnp6.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <SubServices data={grapicDesignServiceData} />

      <Stacks />
      <Faq data={faq} classes="py-24" />
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

export default Index;
