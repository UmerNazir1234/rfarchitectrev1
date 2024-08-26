import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

type contentProps = {
  title: string;
  description?: string;
  classes?: string;
};

const HeadingBox = ({ title, description, classes }: contentProps) => {
  return (
    <section className="relative">

      <div className="page-width ">
        <div className="flex items-center justify-center lg:py-36 py-16 lg:gap-24 gap-6 lg:flex-nowrap flex-wrap">
          <div className="lg:basis-[45%] basis-full max-lg:ps-6">
            <Heading
              title={title}
              classes={classes}
              iconStyle="stroke-primary"
            />
          </div>
          <div className="lg:basis-[65%] basis-full relative z-50">
            <p className="bg-blueLight md:p-10 p-4 rounded-3xl border-primary border p-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <div className="relative xl:h-[550px] xl:w-[583px] lg:h-[400px] lg:w-[420px] h-[300px] w-[300px] object-contain ">
          <Image
            className="max-w-full block"
            loading="lazy"
            alt="Background logo"
            src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719920546/RfTechnologiesWebsite/Vector_vpvzwx.png"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default HeadingBox;
