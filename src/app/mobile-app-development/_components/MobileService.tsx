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
            classes="hover:bg-white hover:text-black bg-[#048C5B] text-white"
            textColor="group-hover:!text-red"
            titleColor="group-hover:!text-red !text-red"
            iconColor=""
            description="Cross-platform apps that can work in different environments and industries thanks to a unique blend of native and web app technologies. cross-platform app development is a single codebase, ease of maintenance, and reduced development costs."
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
              classes="hover:bg-white hover:text-black bg-[#13429B] text-white"
              description="With 2.5 billion active users, Android is the world's most popular operating system. Our expert developers create stable, scalable custom apps to help you grow your business and reach your target audience."
              icon={<TfiAndroid className="md:text-[140px]  text-[80px]" />}
            />
          </div>
          <div className="">
            <MobileAppCard
              title="Ios App Development"
              classes="hover:bg-white hover:text-black bg-[#710583] text-white"
              description="Our certified developers create efficient iOS apps for all devices, offering support from design to deployment and maintenance. We deliver top-notch iOS app development with a value-driven, build-by-build approach."
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
