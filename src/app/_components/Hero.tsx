import React from "react";
import HeroSlider from "./HeroSlider";
import { sliderData } from "@/dummyData/data";

const Hero = () => {
  return (
    <div>
      <HeroSlider data={sliderData} />
    </div>
  );
};

export default Hero;
