"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { textWithCards } from "@/lib/type";

type CardProps = {
  content: textWithCards[];
  classes?: string;
  children?: React.ReactNode;
};
const bgImages = [
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864072/Rectangle_22_1_rk7ogw.png",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864498/Rectangle_22_1_h38pgv.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864529/Rectangle_22_2_wbgtoh.svg",
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720864562/Rectangle_22_3_a6qf7l.svg",
];
const TextWithCards = ({ content, classes, children }: CardProps) => {
  return (
    <>
      {content?.map((data, index) => (
        <section className="relative " key={index}>
          <div className={`page-width ${classes || "py-12"}  relative z-10`}>
            {data?.btnLink && data?.btnTitle && (
              <div className="flex items-start justify-start lg:mb-12 mb-8">
                <Button
                  title={data?.btnTitle}
                  classes="bg-secondary uppercase"
                  enableIcons={true}
                  href={data?.btnLink}
                  iconStyle="stroke-secondary"
                />
              </div>
            )}
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
                    className="md:text-2xl text-xl"
                    dangerouslySetInnerHTML={{
                      __html: (data?.description && data?.description) || "",
                    }}
                  ></p>
                )}
                <div className="mt-6 w-full">{children && children}</div>
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
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="524"
                height="473"
                viewBox="0 0 399 474"
                 className="absolute -rotate-[11deg] -top-24 max-md:-top-16 -left-8 z-0 max-md:w-80 max-md:h-80"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M148.639 51.0097C187.917 55.3832 224.671 22.5083 263.368 30.5341C306.918 39.5661 358.415 57.1666 375.771 98.1165C393.52 139.995 344.072 183.903 347.591 229.251C351.57 280.549 409.05 322.645 397.072 372.684C385.456 421.212 338.984 468.438 289.28 472.848C234.937 477.669 201.551 408.02 148.639 394.725C113.686 385.942 78.3881 420.667 43.6351 411.123C6.60448 400.954 -19.4031 369.478 -45.5873 341.388C-77.4796 307.174 -128.606 275.945 -125.897 229.251C-123.145 181.822 -58.5302 164.448 -32.9973 124.383C-9.03045 86.7757 -23.2033 19.9325 18.1455 3.22934C61.84 -14.4214 101.804 45.7948 148.639 51.0097Z"
                  fill="#EDAC18"
                  fill-opacity="0.18"
                />
              </svg>
          
          )}

          {data?.enableImageRight && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720867924/Vector_1_w7e4gz.svg"
              alt="Background Image"
              loading="lazy"
              width={450}
              height={550}
              className="object-center object-cover absolute top-12 right-0 z-0"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default TextWithCards;
