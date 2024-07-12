import Hero from "@/components/Hero";
import React from "react";
import MobileAppCard from "./MobileAppCard";
import BoostYourMob from "@/components/BoostYourMob";
import ProductGallery from "@/components/ProductGallery";
import { GoArrowUpRight } from "react-icons/go";
import { TbLayoutGridAdd } from "react-icons/tb";

const Mobile = () => {
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
      <section className="">
        <div className="py-20 page-width">
          <div className="mb-4">
            <MobileAppCard
              title="Cross-platform app development"
              classes="hover:bg-black hover:bg-red"
              description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit."
              icon={<TbLayoutGridAdd className="md:text-[140px] text-[80px]" />}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
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
      </section>
      <MobileAppCard />
      <BoostYourMob />
      <ProductGallery />
    </>
  );
};

export default Mobile;
