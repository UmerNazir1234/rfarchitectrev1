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
        className="bg-no-repeat bg-cover md:py-24 py-10"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720179109/WhyChooseUs_pm78cb.png")`,
        }}
      >
        <div className="page-width">
          <div className="">
            <Button
              title="why choose us"
              classes="bg-secondary uppercase"
              enableIcons={true}
              iconStyle="stroke-secondary"
              href="/about-us"
            />
            <h2 className=" text-white mt-6">
              WE PROVIDE THE BEST IT SOLUTION
            </h2>
          </div>
          <div className="flex items-start lg:flex-nowrap flex-wrap justify-start gap-4 mt-12">
            <div className="lg:basis-[60%] basis-full">
              <div className="flex items-start justify-center flex-col gap-6 itSolutionCard">
                <WhyChooseLeftCard
                  icon={
                    <IconConsulting
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto "
                    />
                  }
                  title="CONSULTING"
                  content="We provide effective consultations to our clients which
                        helps customers and organizations to improve their
                        performance."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconSupport
                      fill="group-hover:fill-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto"
                    />
                  }
                  title="PRODUCTION"
                  content="During the production, Experts take care of all the
                        possible solutions and flexibilities for a better and
                        more successful digital product."
                />
                <WhyChooseLeftCard
                  icon={
                    <IconReact
                      fill="group-hover:stroke-primary"
                      classes="lg:w-auto !w-16 !h-16 lg:h-auto"
                    />
                  }
                  title="SUPPORT"
                  content=" We don't abandon you. we provide 24/7 support and
                        maintenance for your product."
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
