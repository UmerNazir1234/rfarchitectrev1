import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="flex flex-row items-center justify-center bg-cover bg-no-repeat min-h-dvh relative"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719835637/RfTechnologiesWebsite/Vector_10_xzgp4k.jpg")`,
      }}
    >
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
        width={350}
        height={250}
        alt=""
        className="absolute right-24 top-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:top-0 max-sm:right-4"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png"
        }
        width={350}
        height={250}
        alt=""
        className="absolute left-0 bottom-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:hidden"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719913174/RfTechnologiesWebsite/Let_s_get_IT_done_isjw4p.png"
        }
        width={550}
        height={70}
        alt="Let's it done"
        loading="lazy"
        className="absolute left-[28%] bottom-10 max-md:left-[4%] max-md:bottom-6 max-md:w-64 max-md:h-14"
      />
    </section>
  );
};

export default AboutSection;
