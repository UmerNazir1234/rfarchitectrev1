import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
    woocomemrceServiceData,
  wordpressCardText,
  wordpressfaq,
  wordpressImageWithText,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">WOO - Commerce</span> Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={woocomemrceServiceData} />
      <ImageWithText content={wordpressImageWithText} classes="pt-32" />
      <TextWithCards content={wordpressCardText} classes="py-32" />
      <Stacks />
      <Faq data={wordpressfaq} classes="py-24" />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        email="info@rftechnologies.com"
        number="00 000 0000"
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
