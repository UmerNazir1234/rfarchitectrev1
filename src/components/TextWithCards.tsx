"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { textWithCards } from "@/lib/type";

type CardProps = {
  content: textWithCards[];
};
const bgImages = [
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864072/Rectangle_22_1_rk7ogw.png",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864498/Rectangle_22_1_h38pgv.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864529/Rectangle_22_2_wbgtoh.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864562/Rectangle_22_3_a6qf7l.svg",
];
const TextWithCards = ({ content }: CardProps) => {
  return (
    <>
      {content?.map((data, index) => (
        <section className="relative" key={index}>
          <div className="page-width py-12 relative z-10">
            <div className="flex items-start justify-start lg:mb-12 mb-8">
              {data?.btnLink && data?.btnTitle && (
                <Button
                  title={data?.btnTitle}
                  classes="bg-secondary uppercase"
                  enableIcons={true}
                  href={data?.btnLink}
                  iconStyle="stroke-secondary"
                />
              )}
            </div>
            <div className="xl:flex xl:items-start xl:justify-between xl:gap-20">
              <div className="md:basis-[50%] flex items-start justify-center flex-col max-xl:mb-8">
                {data?.title && (
                  <h2
                    className="text-primary mb-6"
                    dangerouslySetInnerHTML={{
                      __html: (data?.title && data?.title) || "",
                    }}
                  ></h2>
                )}
                {data?.description && (
                  <p
                    className="text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: (data?.description && data?.description) || "",
                    }}
                  ></p>
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
                      <span className="sm:mb-2">{card?.icon}</span>
                      <h5 className="font-semibold max-sm:text-sm">
                        {card?.cardTitle}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {data?.enableImageLeft && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720867552/Vector_vjta5o.svg"
              alt="Background Image"
              loading="lazy"
              width={550}
              height={700}
              className="object-center object-cover absolute -top-[150px] left-0 z-0"
            />
          )}
          {data?.enableImageRight && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720867924/Vector_1_w7e4gz.svg"
              alt="Background Image"
              loading="lazy"
              width={450}
              height={550}
              className="object-center object-cover absolute top-0 right-0 z-0"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default TextWithCards;
