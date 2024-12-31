import Heading from "@/components/Heading";
import IconEye from "@/components/Icons/IconEye";
import IconMisson from "@/components/Icons/IconMisson";
import Image from "next/image";
import React from "react";

const OurVision = ({ data }: any) => {
  return (
    <section className="relative">
      <div className="page-width py-12">
        <div className="flex justify-between lg:flex-none flex-wrap lg:gap-28 gap-4">
          <div className="lg:flex-1 basis-full">
            <div className="text-center flex flex-col items-center justify-center lg:gap-12 gap-6">
              <IconEye classes="!w-10 !h-10" />
              <Heading
                title={data?.ourvision?.title}
                classes="text-primary"
                iconStyle="stroke-primary"
              />
            </div>
            <p className="p-lg text-justify">{data?.ourvision?.detials}</p>
          </div>
          <div className="lg:flex-1 basis-full">
            <div className="text-center flex flex-col items-center justify-center lg:gap-12 gap-4">
              <IconMisson classes="!w-10 !h-10" />
              <Heading
                title={data?.ourmission?.title}
                classes="text-primary"
                iconStyle="stroke-primary"
              />
            </div>
            <p className="p-lg text-justify">{data?.ourmission?.detials}</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-[120px] right-0 z-0">
        <div className="relative ">
          {/* <Image
            src={data?.image}
            loading="lazy"
            alt="Experience backgorund Image"
            className=""
            fill
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[583px] xl:h-[550px] lg:w-[430px] lg:h-[400px] md:w-[330px] md:h-[300px] w-[300px] h-[270px]"
            width="497"
            height="550"
            viewBox="0 0 497 550"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M265.548 91.7059C293.676 104.397 328.034 92.0801 355.962 105.205C383.98 118.372 403.849 143.115 424.331 166.328C445.563 190.388 458.701 219.21 478.703 244.302C512.34 286.498 582.239 311.462 583.035 365.418C583.743 413.437 544.785 427.259 503.04 451C466.79 471.616 418.863 455.16 383.54 477.328C341.908 503.456 350.822 557.205 302.54 548C248.222 537.644 234.708 484.315 185.982 458.174C140.518 433.784 79.2417 502.753 34.3492 477.328C-3.36633 455.967 -1.03018 396.657 0.90883 353.355C2.70846 313.167 34.3052 281.402 44.861 242.583C54.9174 205.601 49.5107 166.664 61.567 130.284C76.8595 84.14 77.1684 10 124.934 0.966218C180.441 -9.53179 214.055 68.4726 265.548 91.7059Z"
              fill="#EDAC18"
              fillOpacity="0.18"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
