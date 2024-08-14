import Faq from "@/components/Faq";
import HeadingBox from "@/components/HeadingBox";
import Hero from "@/components/Hero";
import ImageWithCards from "@/components/ImageWithCards";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  seoCardText,
  seoFaqs,
  seoServiceData,
  woocomemrceCardText,
  woocomemrcefaq,
  woocomemrceServiceData,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">Search Engine Optimization</span> Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={seoServiceData} />
      <ImageWithCards content={seoCardText} classes="pt-32" />
      <HeadingBox
        classes="text-primary"
        title="our priorities"
        description={`At RF Tech, our priority is to boost your online visibility with customized SEO strategies that drive targeted traffic and improve search engine rankings. We focus on aligning our efforts with your business goals to deliver impactful results and long-term growth.`}
      />
      <Stacks />
      <Faq data={seoFaqs} classes="py-24" />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
