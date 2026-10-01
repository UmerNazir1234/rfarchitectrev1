import Hero from "@/components/Hero";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Stacks from "@/components/Stacks";
import Faq from "@/components/Faq";
import {
  faq,
  grapicCardText,
  grapicDesignServiceData,
} from "@/dummyData/data";
import ProjectSubmission from "@/components/ProjectSubmission";
import SubServices from "@/snippet/SubServices";
import OurProcess from "./OurProcess";
import HeadingBox from "@/components/HeadingBox";
import ImageWithCards from "@/components/ImageWithCards";

const Index = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Graphic Design </span> Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721664267/RfTechnologiesWebsite/marketing-strategy-planning-strategy-concept_1_a2tnp6.png"
        btnTitle="Discuss Your Project"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <SubServices data={grapicDesignServiceData} />
      <ImageWithCards content={grapicCardText} classes="sm:pt-32" />
      <OurProcess />
      <HeadingBox
        title="Our Priorities"
        classes="text-primary"
        description={`At RF Tech, our top priority is delivering outstanding graphic design solutions that effectively communicate your brand’s message and engage your audience. We focus on understanding your vision and goals to create visually compelling designs that drive results and make a lasting impact.`}
      />
      <Stacks />
      <Faq data={faq} classes="py-24" />
      <ProjectSubmission
        title="Discuss Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Discuss Your Project"
        btnUrl="/"
      />
    </div>
  );
};

export default Index;
