import Image from "next/image";
import React from "react";
import Button from "./Button";

type keyFeatures = {
  src?: string;
  title?: string;
  details?: string;
  id?: number;
  bgColor?: string;
};
type keyFeaturesProps = {
  data: keyFeatures[];
  heading?: string;
  btnUrl?: string;
  btnTitle?: string;
};
const KeyFeatures = ({ data, heading, btnUrl, btnTitle }: keyFeaturesProps) => {
  return (
    <section className=" bg-center bg-cover bg-no-repeat py-32 relative z-0">
      <div className="flex items-center justify-center flex-col gap-10 pb-12 relative z-50">
        <Button
          title={btnTitle}
          classes="bg-secondary"
          enableIcons={true}
          href={btnUrl}
        />
        <h2 className="uppercase text-primary text-center">{heading}</h2>
      </div>
      <div className="page-width">
        <div className="flex items-center justify-center flex-col gap-6 flex-wrap w-full">
          {data?.map((item) => {
            return (
              <div
                key={item?.id}
                style={{ backgroundColor: `${item?.bgColor}` }}
                className={`rounded-2xl z-50 sm:p-6 p-4 flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-3 w-full min-h-24`}
              >
                <div className="md:basis-1/2">
                  <div className="flex items-center justify-start gap-4">
                    <span className="rounded-full p-3 bg-white sm:h-20 sm:w-20 h-16 w-16 flex items-center justify-center">
                      <Image
                        src={`${item?.src}`}
                        alt={`${item?.title}` + "icon"}
                        width={45}
                        height={45}
                        className="max-sm:w-12 max-sm:h-12"
                      />
                    </span>
                    <div className="text-white font-bold sm:text-2xl text-xl ">
                      {item?.title}
                    </div>
                  </div>
                </div>
                <div className="md:basis-1/2">
                  <p className="rounded-full p-2 text-white sm:text-xl text-base">
                    {item?.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721726059/RfTechnologiesWebsite/Vector_4_esfqww.svg`}
        alt="Dots"
        loading="lazy"
        width={500}
        height={500}
        className="absolute -top-16 left-1/2 -translate-x-1/2 max-sm:!w-[150px] max-sm:!h-[150px] z-0"
      />
    </section>
  );
};

export default KeyFeatures;
