import Image from "next/image";
import React from "react";
import Button from "./Button";

const AnalyticsTools = () => {
  return (
    <section className="relative mt-16">
      <div className="page-width">
        <div className="flex items-center justify-center flex-col gap-10 pb-12 relative z-50">
          <Button
            title="Our Properties"
            classes="bg-secondary"
            enableIcons={true}
          />
          <h2 className="text-primary uppercase">Analytics Tools</h2>
        </div>
        <div className="flex items-center justify-center flex-wrap max-md:gap-3 mt-6 md:mb-28 mb-12">
          <div className=" basis-1/3 md:p-6 p-2">
            <Image
              src={
                "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721658812/RfTechnologiesWebsite/629a430c3e59ee069da94c88_modsj6.svg"
              }
              alt="Google Analytics"
              loading="lazy"
              width={250}
              height={300}
              className="m-auto"
            />
          </div>
          <div className=" basis-1/3 md:p-6 p-2">
            <Image
              src={
                "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721658811/RfTechnologiesWebsite/58b87d711b65fe46c38abc1f_uwpauj.svg"
              }
              alt="Href"
              loading="lazy"
              width={250}
              height={300}
              className="m-auto"
            />
          </div>
          <div className=" basis-1/3 md:p-6 p-2">
            <Image
              src={
                "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721658811/RfTechnologiesWebsite/61fa88d5eec4c40004bacd3a_1_p1i4a0.svg"
              }
              alt="Google Ads"
              loading="lazy"
              width={250}
              height={300}
              className="m-auto"
            />
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721659432/RfTechnologiesWebsite/Vector_3_srvhio.svg"
          alt="Background Image"
          loading="lazy"
          width={500}
          height={350}
          className="object-center object-contain absolute -top-[150px] left-1/2 transform -translate-x-1/2 z-0 max-sm:w-[300px] max-sm:h-[300px]"
        />
      </div>
    </section>
  );
};

export default AnalyticsTools;
