import Button from "@/components/Button";
import IconConsulting from "@/components/Icons/IconConsulting";
import IconReact from "@/components/Icons/IconReact";
import IconSupport from "@/components/Icons/IconSupport";
import React from "react";

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
            />
            <h2 className=" text-white mt-6">
              WE PROVIDE THE BEST IT SOLUTION
            </h2>
          </div>
          <div className="flex items-start lg:flex-nowrap flex-wrap justify-start gap-4 mt-12">
            <div className="lg:basis-[60%] basis-full">
              <div className="flex items-start justify-center flex-col gap-6 itSolutionCard">
                <div className="group cursor-pointer">
                  <div className="flex items-center group-hover:text-primary group-hover:bg-white sm:gap-10  gap-3 text-white justify-start bg-white bg-opacity-20 sm:p-8 p-3 rounded-2xl border-primary border-2 lg:max-w-2xl max-w-full">
                    <div>
                      <IconConsulting
                        fill="group-hover:fill-primary"
                        classes="lg:w-auto !w-16 !h-16 lg:h-auto "
                      />
                    </div>
                    <div>
                      <h5 className="">CONSULTING</h5>
                      <p className="">
                        We provide effective consultations to our clients which
                        helps customers and organizations to improve their
                        performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center  group-hover:text-primary group-hover:bg-white sm:gap-10 gap-3 text-white justify-start bg-white bg-opacity-20 sm:p-8 p-3 rounded-2xl border-primary border-2 lg:max-w-2xl max-w-full">
                    <div>
                      <IconSupport
                        fill="group-hover:fill-primary"
                        classes="lg:w-auto !w-16 !h-16 lg:h-auto"
                      />
                    </div>
                    <div>
                      <h5 className="">PRODUCTION</h5>
                      <p>
                        During the production, Experts take care of all the
                        possible solutions and flexibilities for a better and
                        more successful digital product.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center  group-hover:text-primary group-hover:bg-white sm:gap-10 gap-3 text-white justify-start bg-white bg-opacity-20 sm:p-8 p-3 rounded-2xl border-primary border-2 lg:max-w-2xl max-w-full">
                    <div>
                      <IconReact
                        fill="group-hover:stroke-primary"
                        classes="lg:w-auto !w-16 !h-16 lg:h-auto"
                      />
                    </div>
                    <div>
                      <h5 className="">SUPPORT</h5>
                      <p>
                        We don't abandon you. we provide 24/7 support and
                        maintenance for your product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-[40%] basis-full">
              <div className="flex items-center justify-center sm:gap-4 gap-2 flex-wrap">
                <div className="transform3d flex items-center flex-col gap-2 text-white justify-start bg-white bg-opacity-20 min-w-52 max-sm:min-w-36 sm:py-6 sm:px-14 py-6 px-4 rounded-xl border-primary border-2">
                  <h3 className="!font-medium">312+</h3>
                  <p>Products</p>
                </div>
                <div className="transform3deven flex items-center flex-col gap-2 text-white justify-start bg-white bg-opacity-20 min-w-52 max-sm:min-w-36 sm:py-6 sm:px-14 py-6 px-4 rounded-xl border-primary border-2 ">
                  <h3 className="!font-medium">20+</h3>
                  <p>Employees</p>
                </div>
                <div className="transform3d flex items-center flex-col gap-2 text-white justify-start bg-white bg-opacity-20 min-w-52 max-sm:min-w-36 sm:py-6 sm:px-14 py-6 px-4 rounded-xl border-primary border-2">
                  <h3 className="!font-medium">200+</h3>
                  <p>Clients</p>
                </div>
                <div className="transform3deven flex items-center flex-col gap-2 text-white justify-start bg-white bg-opacity-20 min-w-52 max-sm:min-w-36 sm:py-6 sm:px-14 py-6 px-4 rounded-xl border-primary border-2 ">
                  <h3 className="!font-medium">6+</h3>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
