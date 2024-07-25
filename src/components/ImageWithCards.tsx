"use client";
import React from "react";
import Image from "next/image";
import { imageWithCards } from "@/lib/type";
import { Site } from "@/helpers/Site";

type CardProps = {
  content: imageWithCards[];
  classes?: string;
};
const bgImages = [
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864072/Rectangle_22_1_rk7ogw.png",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864498/Rectangle_22_1_h38pgv.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864529/Rectangle_22_2_wbgtoh.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864562/Rectangle_22_3_a6qf7l.svg",
];
const ImageWithCards = ({ content, classes }: CardProps) => {
  return (
    <>
      {content?.map((data, index) => (
        <section className="relative" key={index}>
          <div className={`page-width ${classes || "py-12"}  relative z-10`}>
            <div className="xl:flex xl:items-center xl:justify-between xl:gap-20">
              <div className="md:basis-[50%] flex items-start justify-center flex-col max-xl:mb-8">
                {data?.image ? (
                  <Image
                    src={`${data?.image}`}
                    alt={`Background Image`}
                    loading="lazy"
                    width={800}
                    height={616}
                    className="object-center object-contain max-sm:h-[350px] max-sm:w-fit m-auto"
                  />
                ) : (
                  <Image
                    src={`${Site?.placeholder}`}
                    alt={`placeholder Image`}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="object-center object-contain max-sm:h-[350px] max-sm:w-fit m-auto"
                  />
                )}
              </div>

              <div className="md:basis-[50%]">
                <div className="flex items-center justify-center sm:gap-4 gap-2 flex-wrap max-xl:max-w-[580px] m-auto max-md:max-w-none">
                  {data?.cards?.map((card: any, index) => (
                    <div
                      className="flex items-center flex-col gap-2 bg-cover bg-no-repeat bg-center text-white justify-center bg-opacity-20 text-center w-64 max-sm:w-36 min-h-64 max-sm:min-h-36 max-sm:p-2 p-4 rounded-xl"
                      style={{
                        backgroundImage: `url(${bgImages[index]})`,
                      }}
                      key={card?.title}
                    >
                      <div className="text-[55px] font-semibold">
                        {card?.title}
                      </div>
                      <h5 className="font-semibold text-xl max-sm:text-sm">
                        {card?.cardTitle}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ImageWithCards;
