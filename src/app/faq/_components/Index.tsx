import React from "react";
import Faq from "./Faq";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import { GoArrowUpRight } from "react-icons/go";
import { content } from "@/data/faq";

const Index = () => {
  const {
    faq,
    shopify,
    wordpress,
    grapicDesigning,
    mobileApp,
    webdevelopment,
    digitalmarketing,
    seo,
    csd,
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
      <Faq title={faq?.title} data={faq?.items} />
      <Faq title={shopify?.title} data={shopify?.items} />
      <Faq title={wordpress?.title} data={wordpress?.items} />
      <Faq title={grapicDesigning?.title} data={grapicDesigning?.items} />
      <Faq title={mobileApp?.title} data={mobileApp?.items} />
      <Faq title={webdevelopment?.title} data={webdevelopment?.items} />
      <Faq title={digitalmarketing?.title} data={digitalmarketing?.items} />
      <Faq title={seo?.title} data={seo?.items} />
      <Faq title={csd?.title} data={csd?.items} />
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
