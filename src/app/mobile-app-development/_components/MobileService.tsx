import React from "react";
import MobileAppCard from "./MobileAppCard";
import { TbLayoutGridAdd } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import Button from "@/components/Button";
import Image from "next/image";

const MobileService = () => {
  return (
    <section className="relative">
      <div className="lg:py-32 py-12 page-width relative z-10">
        <div className="flex items-center justify-center">
          <Button
            title="Our Services"
            href="/"
            classes="bg-secondary lg:my-12 my-6"
            icon={<GoArrowUpRight className="icon max-md:w-6  icon--arrow" />}
            enableIcons={true}
          />
        </div>
        <div className="mb-4">
          <MobileAppCard
            title="Cross-platform app development"
            classes="hover:bg-white"
            textColor="text-black"
            description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit."
            icon={<TbLayoutGridAdd className="md:text-[140px] text-[80px]" />}
          />
        </div>
        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="">
            {" "}
            <MobileAppCard
              title="Cross-platform app development"
              description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit."
              icon={
                <TbLayoutGridAdd className="md:text-[140px]  text-[80px]" />
              }
            />
          </div>
          <div className="">
            <MobileAppCard
              title="Cross-platform app development"
              description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit."
              icon={
                <TbLayoutGridAdd className="md:text-[140px]  text-[80px]" />
              }
            />
          </div>
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720857722/Group_1597883922_uwqpzs.png"
        }
        alt="Dotted image"
        loading="lazy"
        className="absolute right-0 top-0 z-0 max-lg:w-96 max-lg:h-96 max-md:w-52 max-md:h-52"
        width={400}
        height={500}
      />
    </section>
  );
};

export default MobileService;
