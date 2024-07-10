import Heading from "@/components/Heading";
import IconEye from "@/components/Icons/IconEye";
import IconMisson from "@/components/Icons/IconMisson";
import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <section className=" relative">
      <div className="page-width py-12">
        <div className="flex justify-between lg:flex-none flex-wrap lg:gap-28 gap-4">
          <div className="lg:flex-1 basis-full">
            <div className="text-center flex flex-col items-center justify-center lg:gap-12 gap-6">
              <IconEye classes="!w-10 !h-10" />
              <Heading
                title="our vision"
                classes="text-primary"
                iconStyle="stroke-primary"
              />
            </div>
            <p className="p-lg text-justify">
              We wanted to master the world with our latest technologies and
              techniques. Through advancement, in digital means, we aspire to be
              leaders. Satisfaction, innovation, teamwork, and dedication are
              the prime values of our company and these values define who we
              are, how we work, and what we strive for. These core values and
              modulation reflect the internal theme of our company.
            </p>
          </div>
          <div className="lg:flex-1 basis-full">
            <div className="text-center flex flex-col items-center justify-center lg:gap-12 gap-4">
              <IconMisson classes="!w-10 !h-10" />
              <Heading
                title="our mission"
                classes="text-primary"
                iconStyle="stroke-primary"
              />
            </div>
            <p className="p-lg text-justify">
              How many times have you been changing channels and eventually seen
              an entrepreneur giving advice or what was your feeling when the
              last time you held a magazine and again a successful man gave his
              intellectual ideas? That time you held your breath and wanted to
              be one of them. Our goal is to take advantage of technology for
              our welfare as well as those who are connected with us. We have a
              whole different perception of seeing the world. We consider your
              values and ethics and try to convince you according to them. We
              have also brought revolutionary change to many of our clients’
              lives.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-[120px] right-0 ">
        <div className="relative xl:w-[583px] xl:h-[550px] lg:w-[430px] lg:h-[400px] md:w-[330px] md:h-[300px] w-[300px] h-[270px]">
          <Image
            src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720612053/Vector_2_ds4oyb.png`}
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
