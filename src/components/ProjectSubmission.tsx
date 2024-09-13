import Button from "@/components/Button";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import React from "react";

type ContentProps = {
  title?: string;
  description?: string;
  btnTitle?: string;
  btnUrl?: string;
  titleColor?: string;
};
const ProjectSubmission = ({
  title,
  description,
  btnTitle,
  btnUrl,
  titleColor,
}: ContentProps) => {
  if (!title) {
    return null;
  }
  return (
    <section className="bg-secondary relative py-10">
      <div className="page-width">
        <div className="flex items-center justify-start sm:gap-8 gap-4 md:flex-nowrap flex-wrap">
          <div className="lg:basis-2/3 basis-full">
            <div className=" max-md:text-center">
              <h2
                className={`${
                  titleColor ? titleColor : "text-primary"
                } !capitalize"`}
              >
                {title}
              </h2>
              <p className="text-white xl:text-3xl text-2xl w-3/4 max-md:text-center text-start max-lg:w-full mt-3 ">
                {description}
              </p>
            </div>
          </div>
          <div className="lg:basis-1/3 basis-full relative z-20 ">
            <div className="flex gap-4 items-center justify-between flex-col">
              <p className="p-lg text-white">
                <span className="font-bold me-2">Email:</span>
                <a href={"mailto:" + Site?.email}>{Site?.email}</a>
              </p>

              <p className="p-lg text-white">
                {" "}
                <span className="font-bold me-2">Number:</span>
                <a href={"tel:" + Site?.number}>{Site?.number}</a>
              </p>

              {btnUrl && <Button title={btnTitle} href={btnUrl} />}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0">
        <div className="relative lg:w-[200px] lg:h-[180px] w-[130px] h-[100px]">
          <Image
            src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720612915/Trade_Mark-02_2_njnprv.svg"
            loading="lazy"
            alt="Experience background Image"
            fill
          />
        </div>
      </div>

      <Image
        src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720613337/Frame_1597883705_yhbvpg.svg"
        loading="lazy"
        alt="Image Circle"
        width={150}
        height={150}
        className="absolute -top-20 max-md:-top-10 right-0 max-lg:w-36 max-lg:h-36 max-md:w-20 max-md:h-20"
      />
    </section>
  );
};

export default ProjectSubmission;
