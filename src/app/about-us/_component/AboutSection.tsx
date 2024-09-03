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
    <section className=" relative z-60 -mt-[82px] w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="81"
        viewBox="0 0 1440 81"
        fill="none"
        preserveAspectRatio="none"
        className="max-sm:h-8 -mb-[1px]"
      >
        <g clipPath="url(#clip0_1766_1353)" transform="scale(1)">
          <path
            d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
            fill="#002475"
          />
          <path
            d="M204 81H0V0H308.5C300.1 0 292.333 4 289.5 6C274.333 17 233.1 68.4 225.5 74C217.9 79.6 208 81 204 81Z"
            fill=""
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1353">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex flex-row items-center justify-center bg-primary lg:py-28 py-20">
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
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-full -mt-[1px]"
        viewBox="0 0 1440 81"
        fill="none"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_1766_1358)">
          <path
            d="M968 0H1439.5V81.5L847 81C855.4 81 863.167 77 866 75C881.167 64 938.9 12.6 946.5 7C954.1 1.4 964 0 968 0Z"
            fill="transparent"
          />
          <path
            d="M847 81H0V0H967.5C959.1 0 951.333 4 948.5 6C933.333 17 876.1 68.4 868.5 74C860.9 79.6 851 81 847 81Z"
            fill="#002475"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1358">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default AboutSection;
