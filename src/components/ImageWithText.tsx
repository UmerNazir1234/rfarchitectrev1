"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { imageWithText } from "@/lib/type";
import { Site } from "@/helpers/Site";

type CardProps = {
  content: imageWithText[];
  classes?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
};

const ImageWithText = ({
  content,
  fullWidth,
  classes,
  children,
}: CardProps) => {
  return (
    <>
      {content?.map((data, index) => (
        <section className="relative" key={index}>
          <div
            className={`${fullWidth ? "full-page-width" : "page-width"}  ${
              classes || "py-16"
            } relative z-10`}
          >
            <div
              className={`flex items-center justify-between md:gap-20 gap-6 ${
                data?.imageFirst && data?.imageFirst === true
                  ? "max-lg:flex-col-reverse"
                  : "lg:flex-row-reverse flex-col-reverse "
              }  lg:flex-nowrap  flex-wrap`}
            >
              <div
                className={` ${
                  data?.imageFirst === false && fullWidth
                    ? "flex items-center justify-end"
                    : ""
                } lg:basis-[50%] basis-full `}
              >
                {data?.image ? (
                  <Image
                    src={`${data?.image}`}
                    alt={`${data?.title}`}
                    loading="lazy"
                    width={800}
                    height={616}
                    className={`object-center object-contain max-sm:h-fit max-sm:w-fit ${
                      fullWidth ? "sm:text-left" : "m-auto"
                    }  `}
                  />
                ) : (
                  <Image
                    src={`${Site?.placeholder}`}
                    alt={`${data?.title}`}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="object-center object-contain max-sm:h-[350px] max-sm:w-fit m-auto"
                  />
                )}
              </div>
              <div
                className={`${
                  fullWidth ? "sm:px-10" : ""
                } lg:basis-[50%] basis-full  flex items-start justify-center flex-col max-xl:mb-8`}
              >
                {data?.btnLink && data?.btnTitle && (
                  <div className="flex items-start justify-start lg:mb-12 mb-8">
                    <Button
                      title={data?.btnTitle}
                      classes="bg-secondary uppercase"
                      enableIcons={true}
                      iconStyle="stroke-secondary"
                    />
                  </div>
                )}
                {data?.title && (
                  <h2
                    className={`text-primary ${data?.subtitle ? '' : 'mb-6' }   uppercase text-left`}
                    dangerouslySetInnerHTML={{
                      __html: (data?.title && data?.title) || "",
                    }}
                  ></h2>
                )}
                      {data?.subtitle && (
                  <h2
                    className="text-secondary  text-3xl mb-6  text-left"
                    dangerouslySetInnerHTML={{
                      __html: (data?.subtitle && data?.subtitle) || "",
                    }}
                  ></h2>
                )}
                {data?.description && (
                  <p
                    className="md:text-2xl text-lg text-left"
                    dangerouslySetInnerHTML={{
                      __html: (data?.description && data?.description) || "",
                    }}
                  ></p>
                )}
                {children && children}
                {data?.ctaLink && data?.ctaTitle && (
                  <div className="sm:pt-8 pt-4">
                    <Button
                      classes="btn btn--outline "
                      title={`${data?.ctaTitle}`}
                      href={`${data?.ctaLink}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {data?.enableImageCenter && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720882920/Vector_2_a61v0y.svg"
              alt="Background Image"
              loading="lazy"
              width={583}
              height={550}
              className="object-center object-contain absolute -top-[150px] left-1/2 transform -translate-x-1/2 z-0 max-sm:w-[300px] max-sm:h-[300px]"
            />
          )}

          {data?.enableImageRight && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720882511/Trade_Mark-02_2_i54sew.svg"
              alt="Background Image"
              loading="lazy"
              width={330}
              height={330}
              className="object-center object-cover absolute top-0 right-0 z-0 max-md:w-[200px] max-md:h-[200px]"
            />
          )}
          {data?.enableImageleft && (
            <Image
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721649364/RfTechnologiesWebsite/Vector_adriqe.svg"
              alt="Background Image"
              loading="lazy"
              width={400}
              height={400}
              className="object-center object-contain absolute top-28 left-0 transform z-0 max-sm:w-[300px] max-sm:h-[300px]"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default ImageWithText;
