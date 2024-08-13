import Heading from "@/components/Heading";
import IconEye from "@/components/Icons/IconEye";
import IconMisson from "@/components/Icons/IconMisson";
import Image from "next/image";
import React from "react";

const OurVision = ({ data }: any) => {
  return (
    <section className=" relative">
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
      <div className="absolute -top-[120px] right-0 ">
        <div className="relative xl:w-[583px] xl:h-[550px] lg:w-[430px] lg:h-[400px] md:w-[330px] md:h-[300px] w-[300px] h-[270px]">
          <Image
            src={data?.image}
            loading="lazy"
            alt="Experience backgorund Image"
            className=""
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
