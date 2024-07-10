import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const ProjectSubmit = () => {
  return (
    <section className="bg-secondary relative py-10">
      <div className="page-width">
        <div className="flex items-center justify-start gap-8 md:flex-nowrap flex-wrap">
          <div className="lg:basis-2/3 basis-full">
            <div className=" max-md:text-center">
              <Heading
                title="Submit your project"
                icon={false}
                classes="text-primary !capitalize mb-4"
              />
              <div>
                <p className="text-white md:text-3xl text-2xl w-3/4 max-md:text-center text-start max-lg:w-full ">
                  Let us know your requirements and we&apos;ll get back to you
                  as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/3 basis-full relative z-20 ">
            <div className="flex gap-4 items-center justify-between flex-col">
              <p className="p-lg text-white">
                Email: info@rftechnologies.com.pk
              </p>
              <p className="p-lg text-white">Phone# +92 334 4738506</p>
              <Button title="Submit Your Project" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 ">
        <div className="relative lg:w-[200px]  lg:h-[180px] w-[130px]  h-[100px]">
          <Image
            src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720612915/Trade_Mark-02_2_njnprv.svg`}
            loading="lazy"
            alt="Experience backgorund Image"
            className=""
            fill
          />
        </div>
      </div>
      <div className="absolute sm:right-0 sm:-top-[40px] bottom-0 right-0 z-10">
        <div className="relative lg:w-[200px]  lg:h-[180px] w-[130px]  h-[100px]">
          <Image
            src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720613337/Frame_1597883705_yhbvpg.svg`}
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

export default ProjectSubmit;
