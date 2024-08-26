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
    <>
      <section className="flex flex-row relative items-center justify-center bg-primary lg:py-40 py-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
     
  
          viewBox="0 0 1000 53"
          fill="none"
          className="absolute -top-28 z-50 right-0"
        >
          <path
            d="M104.5 0H1237V81H-0.000244141C8.39978 81 16.1664 77 18.9998 75C34.1664 64 75.3998 12.6 82.9998 7C90.5997 1.4 100.5 0 104.5 0Z"
            fill="black"
          />
        </svg>
        <div className="page-width">
          <div className="max-md:ml-4">
            <Heading title={data.title} />
          </div>
          <p
            className="text-white p-lg"
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          ></p>
        </div>
        {data?.dotsImage && (
          <Image
            src={data.dotsImage}
            width={180}
            height={180}
            alt="Dots Image"
            className="absolute right-0 top-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:top-0 max-sm:right-4"
            loading="lazy"
          />
        )}
        {data?.rfLogo && (
          <Image
            src={data?.rfLogo}
            width={180}
            height={180}
            alt="Rf icon"
            className="absolute left-0 lg:-bottom-[20px] bottom-0 max-lg:w-48 max-lg:h-48 max-sm:w-20 max-sm:h-20 max-md:hidden object-center object-contain"
            loading="lazy"
          />
        )}
        {data?.letsItImage && (
          <Image
            src={data?.letsItImage}
            width={400}
            height={67}
            alt="Let's it done"
            loading="lazy"
            className="absolute left-[15%] bottom-10 max-md:left-[10%] max-md:bottom-6 max-md:w-64 max-md:h-14"
          />
        )}
      </section>
    </>
  );
};

export default AboutSection;
