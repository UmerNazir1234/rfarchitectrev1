import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

interface AboutSectionProps {
  data: {
    title?: string;
    description?: string;
    dotsImage?: string;
    rfLogo?: string;
    letsItImage?: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section className="flex flex-row relative items-center justify-center bg-cover bg-no-repeat min-h-dvh md:-mt-28 overflow-hidden bg-primary">
      <div className="page-width">
        <Heading title={data.title} />
        <p
          className="text-white p-lg"
          dangerouslySetInnerHTML={{ __html: data.description || "" }}
        ></p>
      </div>
      {data?.dotsImage && (
        <Image
          src={data.dotsImage}
          width={260}
          height={260}
          alt="Dots Image"
          className="absolute right-24 top-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:top-0 max-sm:right-4"
          loading="lazy"
        />
      )}
      {data?.rfLogo && (
        <Image
          src={data?.rfLogo}
          width={250}
          height={250}
          alt="Rf icon"
          className="absolute left-0 lg:-bottom-[20px] bottom-0 max-lg:w-48 max-lg:h-48 max-sm:w-20 max-sm:h-20 max-md:hidden object-center object-contain"
          loading="lazy"
        />
      )}
      {data?.letsItImage && (
        <Image
          src={data?.letsItImage}
          width={452}
          height={67}
          alt="Let's it done"
          loading="lazy"
          className="absolute left-[15%] bottom-10 max-md:left-[10%] max-md:bottom-6 max-md:w-64 max-md:h-14"
        />
      )}
    </section>
  );
};

export default AboutSection;
