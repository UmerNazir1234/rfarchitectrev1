import Image from "next/image";
import React from "react";

type cardProps = {
  title?: string;
  description?: string;
  icon?: string;
};
type serviceProps = {
  data?: cardProps[];
};
const SubServiceCard = ({ data }: serviceProps) => {
  return (
    <>
      {data?.map((item, index) => (
        <div className="w-[389px] p-3" key={index}>
          <div className="flex items-center justify-center flex-col gap-4 text-white">
            <Image
              src={`${item?.icon}`}
              alt={`${item?.title}`}
              loading="lazy"
              width={55}
              height={55}
              className="p-2 bg-white shadow-sm rounded-lg m-auto"
            />
            <h4 className="text-[26px] font-bold text-center">{item?.title}</h4>
            <p className="font-nunito text-lg text-center">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubServiceCard;
