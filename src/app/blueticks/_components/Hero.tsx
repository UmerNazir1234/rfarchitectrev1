import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="h-full sm:min-h-screen min-h-[85vh] flex sm:items-center items-end max-sm:pb-10 justify-start overflow-hidden relative">
      <div className=" max-w-full w-full relative z-20">
        <div className="page-width">
          <div className="max-w-xl">
            <h1 className="text-primary font-bold">BlueTicks</h1>
            <h3 className="text-secondary max-sm:mt-2 drop-shadow-lg">
              Your E-Ticketing Platform
            </h3>
            <p className="md:text-2xl text-xl mt-4">
              Your ultimate destination for securing tickets to the most sought-after events and experiences! At BlueTicks, we strive to connect you with a world of entertainment, ensuring you never miss out on your favorite concerts, sports matches, theater performances, and more, independently.

            </p>
            <div className="mt-8">
              <Button
                title="Get Started"
                href="/contact-us"
                icon={<GoArrowUpRight />}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727173589/RfTechnologiesWebsite/Group_1597883988_hqegge.png`}
        loading="lazy"
        height={500}
        width={1200}
        className="absolute right-0 top-0 bottom-0 object-contain object-right z-0"
        alt="BlueTicks"
      />
    </section>
  );
};

export default Hero;
