import Hero from "@/components/Hero";
import React from "react";
import MobileAppCard from "./MobileAppCard";
import { GoArrowUpRight } from "react-icons/go";
import MobileService from "./MobileService";
import { textWithCardData } from "./Data";
import { imageWithText } from "./Data";
import TextWithCards from "@/components/TextWithCards";
import ImageWithText from "@/components/ImageWithText";
import HeadingBox from "@/components/HeadingBox";
import OurStack from "./OurStack";

const MobileApp = () => {
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
      <TextWithCards content={textWithCardData} />
      <ImageWithText content={imageWithText} />
      <HeadingBox
      classes="text-primary"
        title="our priorities"
        description="Fully-fledged, stable, and scalable mobile applications use this alternative to reduce costs and time-to-market and to reach more users without loss of quality. we analyse your needs and come up with a better solution that perfectly aligns with your business goals and budget."
      />
      <OurStack />

    </>
  );
};

export default MobileApp;
