import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const WeAreRf = () => {
  return (
    <section className="relative">
      <div className="page-width ">
        <div className="flex items-center justify-center min-h-[70vh] lg:gap-24 gap-6 lg:flex-nowrap flex-wrap">
          <div className="lg:basis-[45%] basis-full">
            <Heading
              title="we are rf tech"
              classes="text-primary !mb-0 z-1"
              iconStyle="stroke-primary"
            />
          </div>
          <div className="lg:basis-[65%] basis-full">
            <p className="bg-blueLight md:p-10 p-4 rounded-3xl border-primary border p-lg">
              Our company was established in late 2018. Our main office is
              situated in Rawalpindi where our staff is available 24 hours a
              day. We work as a team there and provide them with our maximum
              efforts. A friendly environment enables our clients to completely
              speak their minds. So we can have an idea about what type of work
              they expected from us. And we are always so on with their
              expectations.
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

export default WeAreRf;
