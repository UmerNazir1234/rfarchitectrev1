import React from "react";
import Faq from "./Faq";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import { GoArrowUpRight } from "react-icons/go";
import { content } from "@/data/faq";

const Index = () => {
  const {
    business,
    founder,
    shopify,
    partnership,
  } = content;

  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Frequently Asked </span> Questions`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721663715/RfTechnologiesWebsite/question-mark-icon-solving-problem-solution-concept_1_typb1e.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Faq title={business?.title} data={business?.items} />
      <Faq title={founder?.title} data={founder?.items} />
      <Faq title={shopify?.title} data={shopify?.items} />
      <Faq title={partnership?.title} data={partnership?.items} />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </div>
  );
};

export default Index;
