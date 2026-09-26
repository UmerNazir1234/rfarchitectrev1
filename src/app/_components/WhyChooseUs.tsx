import Button from "@/components/Button";
import IconConsulting from "@/components/Icons/IconConsulting";
import IconReact from "@/components/Icons/IconReact";
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
              title="your ongoing partner"
              classes="bg-secondary uppercase"
              enableIcons={true}
              iconStyle="stroke-secondary"
              href="/about-us"
            />
            <h2 className=" text-white mt-6">
              Support that continues as your business evolves
            </h2>
          </div>
          <div className="flex items-start lg:flex-nowrap flex-wrap justify-start gap-4 mt-12">
            <div className="lg:basis-[60%] basis-full">
              <div className="flex items-start justify-center flex-col gap-6 itSolutionCard">
                <WhyChooseLeftCard
                  icon={
                    <IconConsulting
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100 "
                    />
                  }
                  title="CONSULTING"
                  content="We learn how your business operates, clarify the outcomes that matter, and shape the work around your priorities."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconSupport
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100"
                    />
                  }
                  title="PRODUCTION"
                  content="Our team works alongside yours through delivery, adapting the plan as real business needs become clearer."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconReact
                      fill="group-hover:stroke-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto group-hover:transition-all group-hover:delay-100"
                    />
                  }
                  title="SUPPORT"
                  content="After launch, we remain available to maintain what is working and help you respond to what changes."
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
