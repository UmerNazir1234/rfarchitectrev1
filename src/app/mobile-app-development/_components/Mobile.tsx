import Hero from "@/components/Hero";
import React from "react";
import MobileAppCard from "./MobileAppCard";
import ProductGallery from "@/components/ProductGallery";
import { GoArrowUpRight } from "react-icons/go";
import { TbLayoutGridAdd } from "react-icons/tb";
import MobileService from "./MobileService";
import TextWithCards from "@/components/TextWithCards";
import { textWithCardData } from "@/dummyData/data";

const Mobile = () => {
  console.log(textWithCardData);
  const { content } = textWithCardData;
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720687833/RfTechnologiesWebsite/representation-user-experience-interface-design_1_1_jpayhx.png"
        title={`<span class="text-secondary">Mobile App</span> Development`}
        btnTitle="LET'S TALK"
        href="/"
        classes="bg-white !text-primary"
        btnIcon={<GoArrowUpRight className="fill-primary icon icon--up" />}
      />
      <MobileService />
      <MobileAppCard />
      <TextWithCards content={content} />
      <ProductGallery />
    </>
  );
};

export default Mobile;
