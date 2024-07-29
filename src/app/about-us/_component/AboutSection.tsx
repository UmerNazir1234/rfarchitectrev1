import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-row relative items-center justify-center bg-cover bg-no-repeat min-h-dvh   -mt-28 overflow-hidden bg-primary">
      <div className="page-width">
        <Heading title="about rf technologies" />

        <p className=" text-white p-lg">
          We are a team of endless innovators striving to connect dots and
          people. A <span className="text-italic">true leading company </span>
          with sustained commitments to your
          <span className="text-italic">business goals </span>. We are always
          searching for an experienced approach to help brands understand the
          digital role of solving real business problems,
          <span className="text-italic">finding opportunities </span>, and
          giving them intangible results. In our environment, you will get to
          learn, earn, grow and discover. When everything gets blurry our vision
          helps us to <span className="text-italic">stay focused</span>. Our
          staff contains all types of thinkers and innovators that are coming
          from all walks of life. Our success formula drives all possible
          approaches to make a drastic inclusion. We as a team serve and{" "}
          <span className="text-italic">deliver the best</span> to our
          customers.
        </p>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719912842/RfTechnologiesWebsite/Group_1597883856_r26khq.png"
        }
        width={260}
        height={260}
        alt=""
        className="absolute right-24 top-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:top-0 max-sm:right-4"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png"
        }
        width={250}
        height={250}
        alt="Rf icon"
        className="absolute left-0 lg:-bottom-[20px] bottom-0 max-lg:w-48 max-lg:h-48 max-sm:w-20 max-sm:h-20 max-md:hidden object-center object-contain"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719913174/RfTechnologiesWebsite/Let_s_get_IT_done_isjw4p.png"
        }   
        width={452}
        height={67}
        alt="Let's it done"
        loading="lazy"
        className="absolute left-[15%] bottom-10 max-md:left-[10%] max-md:bottom-6 max-md:w-64 max-md:h-14"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1237 81"
        className=" lg:h-36 !w-[90%] absolute right-0 -top-28 !z-50"
        fill="black"
      >
        <path
          d="M104.5 0H1237V81H-0.000244141C8.39978 81 16.1664 200 18.9998 75C34.1664 64 75.3998 12.6 82.9998 7C90.5997 1.4 100.5 0 104.5 0Z"
          fill="#002475"
        />
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="53"
        viewBox="0 0 1440 53"
        fill="none"
      >
        <g clip-path="url(#clip0_703_899)">
          <rect width="1440" height="53" fill="#D9D9D9" />
          <path
            d="M667 0H0V53H762.5C754.1 53 746.333 49 743.5 47C728.333 36 696.1 12.6 688.5 7C680.9 1.4 671 0 667 0Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_703_899">
            <rect width="1440" height="53" fill="white" />
          </clipPath>
        </defs>
      </svg> */}
    </section>
  );
};

export default AboutSection;
