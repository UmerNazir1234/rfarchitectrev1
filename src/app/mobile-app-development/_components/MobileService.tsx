import React from "react";
import MobileAppCard from "./MobileAppCard";
import { TbLayoutGridAdd } from "react-icons/tb";
import { TfiAndroid } from "react-icons/tfi";
import Button from "@/components/Button";
import { SiApple } from "react-icons/si";
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
            enableIcons={true}
          />
        </div>
        <div className="mb-4">
          <MobileAppCard
            title="Cross-platform app development"
            classes="hover:bg-white bg-[#048C5B] text-white"
            textColor="group-hover:!text-red"
            titleColor="group-hover:!text-red !text-red"
            iconColor=""
            description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit."
            icon={
              <TbLayoutGridAdd className={` md:text-[140px] text-[80px]`} />
            }
          />
        </div>
        <div className="flex items-center justify-center gap-4 md:flex-nowrap flex-wrap">
          <div className="">
            {" "}
            <MobileAppCard
              title="Android app development"
              classes="hover:bg-white bg-[#13429B] text-white"
              description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              icon={<TfiAndroid className="md:text-[140px]  text-[80px]" />}
            />
          </div>
          <div className="">
            <MobileAppCard
              title="Ios App Development"
              classes="hover:bg-white bg-[#710583] text-white"
              description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              icon={<SiApple className="md:text-[140px]  text-[80px]" />}
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
