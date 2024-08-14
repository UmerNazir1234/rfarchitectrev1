import React from "react";
import ImageWithText from "@/components/ImageWithText";
import TextWithCards from "@/components/TextWithCards";
import SubServices from "@/snippet/SubServices";
import { GoArrowUpRight } from "react-icons/go";
import Hero from "@/components/Hero";
import Stacks from "@/components/Stacks";
import ProjectSubmission from "@/components/ProjectSubmission";
import Faq from "@/components/Faq";
import {
  wordpressCardText,
  wordpressfaq,
  wordpressImageWithText,
  wordPressServiceData,
} from "@/dummyData/data";
import Benifits from "@/components/Benifits";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">WordPress</span> Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={wordPressServiceData} />
      <Benifits />
      <ImageWithText content={wordpressImageWithText} classes="pt-32" />
      <TextWithCards content={wordpressCardText} classes="py-32" />
      <Stacks />
      <Faq data={wordpressfaq} classes="py-24" />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/contact-us"
      />
    </>
  );
};

export default Index;
