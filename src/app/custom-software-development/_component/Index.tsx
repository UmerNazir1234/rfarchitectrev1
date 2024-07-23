import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import TextWithCards from "@/components/TextWithCards";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";
import Stacks from "@/components/Stacks";
import Faq from "@/components/Faq";
import { customSoftwareDevelopmentServiceData, faq } from "@/dummyData/data";
import ProjectSubmission from "@/components/ProjectSubmission";
import SubServices from "@/snippet/SubServices";
import {
  customSoftwareDeveloperCardText,
  customSoftwareDeveloperImageWithText,                 
} from "./data";

const Index = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Custom Software</span> Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721664492/RfTechnologiesWebsite/programming-background-with-person-working-with-codes-computer_1_cglxcf.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <SubServices data={customSoftwareDevelopmentServiceData} />
      <TextWithCards
        content={customSoftwareDeveloperCardText}
        classes="py-32"
      />
      <ImageWithText
        content={customSoftwareDeveloperImageWithText}
        classes="pb-32"
      />
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
