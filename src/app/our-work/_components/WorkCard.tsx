import Image from "next/image";
import React from "react";
import { Work } from "@/lib/type";
import { work } from "@/dummyData/data";

type WorkProps = {
  work: Work[];
};

const WorkCard = ({ work }: WorkProps) => {
  return (
    <section>
      <div>
        {work?.map((item) => (
          <div
            key={item?.id}
            id={`${item?.workId}`}
            className={`md:flex px-12 max-md:px-4 py-16 max-md:py-10 items-center justify-evenly max-md:flex-wrap w-full even:flex-row-reverse`}
            style={{
              color: item?.textColor || "white", // Default to white
              backgroundColor: item?.color || "#28292D", // Default background
            }}
          >
            <div className="basis-1/2 grow   ">
              <div className="relative xl:h-[650px] lg:h-[500px] md:h-[450px] h-[250px] w-auto">
                <Image
                  src={item?.image}
                  loading="lazy"
                  fill
                  alt={`${item?.title} image`}
                  className="object-contain max-w-full block object-center"
                />
              </div>
            </div>
            <div>
              <div className="basis-1/2 grow shrink-0  flex items-start gap-4 justify-start flex-col max-md:items-center">
                <h2 className=" lg:!text-[70px] md:!text-[50px]">
                  {item?.title}
                </h2>
                <p className="p-lg lg:!text-[32px] !text-[20px] font-nunito max-md:text-center !leading-normal">
                  {item?.text}
                </p>
                <h4 className="lg:!text-[32px] !text-[20px] font-nunito ">
                  {item?.subtitle}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCard;
