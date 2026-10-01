import Button from "@/components/Button";
import IconConsulting from "@/components/Icons/IconConsulting";
import IconShopify from "@/components/Icons/IconShopify";
import IconSupport from "@/components/Icons/IconSupport";
import React from "react";
import WhyChooseRightCard from "./WhyChooseRightCard";
import WhyChooseLeftCard from "./WhyChooseLeftCard";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover md:pt-24 pb-60"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720179109/WhyChooseUs_pm78cb.png")`,
        }}
      >
        <div className="page-width">
          <div className="">
            <Button
              title="OUR FOUR PILLARS"
              classes="bg-secondary uppercase"
              enableIcons={true}
              iconStyle="stroke-secondary"
              href="/about-us"
            />
            <h2 className=" text-white mt-6">
              Technology shaped around your business and its goals
            </h2>
          </div>
          <div className="flex items-start lg:flex-nowrap flex-wrap justify-start gap-4 mt-12">
            <div className="lg:basis-[60%] basis-full">
              <div className="flex items-start justify-center flex-col gap-6 itSolutionCard">
                <WhyChooseLeftCard
                  icon={
                    <IconShopify
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100 "
                    />
                  }
                  title="SHOPIFY ENGINEERING"
                  content="We engineer across the Shopify ecosystem, not just storefronts, connecting commerce experiences, integrations, and operations."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconSupport
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100"
                    />
                  }
                  title="PRODUCT ENGINEERING"
                  content="We take products from idea to prototype, MVP, launch, and scale with engineering grounded in real user and business needs."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconSupport
                      fill="group-hover:stroke-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100"
                    />
                  }
                  title="TECHNOLOGY PARTNERSHIP"
                  content="We provide long-term, embedded engineering support, staying alongside your team as priorities and products evolve."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconConsulting
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100 "
                    />
                  }
                  title="BUSINESS UNDERSTANDING"
                  content="We solve business problems using technology. We first understand how your business works, then recommend the right solution."
                />
              </div>
            </div>
            <div className="lg:basis-[40%] basis-full">
              <div className="flex items-center justify-center sm:gap-4 gap-2 flex-wrap">
                <WhyChooseRightCard number="312+" title="Products" />
                <WhyChooseRightCard number="20+" title="Employees" />
                <WhyChooseRightCard number="200+" title="Clients" />
                <WhyChooseRightCard number="6+" title="Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
