import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <section className="sm:pt-32 pt-16">
      <div className="page-width">
        <div className="flex items-center justify-center">
          <Heading
            title="Our Process"
            classes="text-primary"
            iconStyle="stroke-primary"
          />
        </div>
        <Image
          src={
            "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721731978/RfTechnologiesWebsite/Group_1597883935_ukwloe.svg"
          }
          alt="Our Process Image"
          width={700}
          height={700}
          loading="lazy"
          className="m-auto object-center object-contain"
        />
      </div>
    </section>
  );
};

export default OurProcess;
