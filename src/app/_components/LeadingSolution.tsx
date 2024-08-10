import Button from "@/components/Button";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
type props = {
  content: {
    roundCta: string;
    title: string;
    content: string;
    btnText: string;
    btnLink: string;
  };
};

const LeadingSolution = ({ content }: props) => {
<<<<<<< HEAD
  console.log(content)
=======
  
>>>>>>> 817f32afa49217a13653fe06647e962c47a1f062
  return (
    <section className="relative z-20">
      <div className="page-width pt-32">
        <div className="bg-gradient-to-l clip-left-top  to-[#BCCDF2] from-[#0B3DAB] rounded-[40px] min-h-[84vh] max-md:min-h-[70vh] relative">
          <Button
            enableIcons={true}
            title={content?.roundCta}
            iconStyle="stroke-secondary"
            classes="bg-secondary absolute top-5 left-5"
          />
          <div className="flex justify-center md:flex-nowrap flex-wrap gap-2 lg:pt-24 lg:px-16 sm:pt-20 sm:px-10 max-sm:pt-10 max-sm:px-3  ">
            <div className="md:basis-[30%]  basis-full">
              <h2 className="text-primary md:w-3/4 uppercase">
                {content?.title}
              </h2>
            </div>
            <div className="md:basis-[70%] basis-full">
              <p className="text-primary md:text-2xl text-lg text-white mb-6">
                {content?.content}
              </p>
              <Button title={content?.btnText} href={content?.btnLink} icon={<GoArrowUpRight />} />
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 403 496"
        fill="none"
        className="absolute  left-0 top-2 -z-50 max-w-[403px] "
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M149.458 28.1895C117.916 39.0124 98.1425 71.6764 65.5911 78.9184C4.75731 92.4526 -76.2748 40.7142 -117.382 87.5558C-153.187 128.355 -104.117 194.707 -77.5788 242.06C-56.7787 279.175 -5.3112 288.291 15.8132 325.221C45.4449 377.024 8.8228 476.547 66.1122 493.267C123.452 510.001 146.028 405.999 199.174 378.734C237.412 359.117 288.353 384.526 324.221 360.85C363.534 334.899 392.561 291.931 400.906 245.57C409.357 198.618 390.889 151.573 369.57 108.895C348.801 67.3172 324.412 21.0827 280.775 5.08308C238.184 -10.5333 192.366 13.4666 149.458 28.1895Z"
          fill="#EDAC18"
          fill-opacity="0.18"
        />
      </svg>
    </section>
  );
};

export default LeadingSolution;
