import Benifits from "@/components/Benifits";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  woocomemrceCardText,
  woocomemrcefaq,
  woocomemrceServiceData,
  wooCommerceKeyFeatures,
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
        btnTitle="Discuss Your Project"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={woocomemrceServiceData} />
      <KeyFeatures
        data={wooCommerceKeyFeatures}
        heading="Key Features of WooCommerce"
        btnTitle="Care features"
        btnUrl="/"
      />
      <TextWithCards content={woocomemrceCardText} classes="pb-32 lg:pb-24 pb-16" />
      <Stacks />
      <Faq data={woocomemrcefaq} classes="lg:py-24 md:py-16 py-8" />
      <ProjectSubmission
        title="Discuss Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Discuss Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
