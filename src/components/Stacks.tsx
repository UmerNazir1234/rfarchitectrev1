import Image from "next/image";
import Link from "next/link";
import React from "react";
import { stack } from "@/dummyData/data";
import Button from "./Button";

const Stacks = () => {
  return (
    <div className="relative">
      <div className="page-width pb-12 relative z-50">
        <div className="flex items-center justify-center flex-col md:gap-8 gap-4 pb-10">
          <Button title="Our Stack" classes="bg-secondary" enableIcons />

          <h2 className="text-primary">Technologies We work</h2>
          <p className="p-lg max-w-4xl text-center ">
            With Latest Technologies and our expert teams Get a scalable and
            reliable website design and development which increase your profit.
          </p>
        </div>
        <div className="flex items-stretch justify-center xl:gap-10 md:gap-4 gap-2 flex-wrap">
          {stack?.map((item, index) => {
            return (
              <div
                key={index}
                className="md:basis-[30%] basis-[48%] max-sm:basis-[98%] xl:min-w-[360px] xl:min-h-[380px] stack-card"
              >
                <div className="bg-white flex items-center justify-center flex-col lg:gap-6 gap-3 border border-black border-opacity-20 lg:p-8 p-4  rounded-[20px] shadow-sm h-full w-full card-wrapper">
                  <div className="flex items-center justify-center flex-col lg:gap-5 gap-2 image-wrapper">
                    <Image
                      src={item.image}
                      loading="lazy"
                      alt={item.title}
                      width={130}
                      height={130}
                      className=" max-sm:w-24 max-sm:h-24 rounded p-2"
                    />
                    <h4 className="text-primary max-sm:text-base title">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-lg max-md:text-base text-center content">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="468"
        height="428"
        viewBox="0 0 468 428"
          className="absolute right-0 top-16 max-md:w-52 max-md:h-52"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M269.026 420.372C312.277 429.004 361.656 435.05 398.279 410.476C434.819 385.959 433.291 332.409 456.155 294.813C483.25 250.261 553.048 221.188 544.703 169.717C536.306 117.929 470.118 96.023 420.956 77.7051C384.515 64.1274 343.243 94.3445 306.702 81.039C265.765 66.133 251.119 -0.354309 207.554 0.00143433C167.275 0.330383 153.242 56.3064 122.678 82.5418C85.0612 114.83 24.6848 125.259 7.46781 171.747C-9.87035 218.562 4.30068 277.34 36.3601 315.608C67.2977 352.537 125.231 344.97 169.158 364.75C204.621 380.718 230.886 412.76 269.026 420.372Z"
          fill="#EDAC18"
          fill-opacity="0.18"
        />
      </svg>

    </div>
  );
};

export default Stacks;
