import Image from "next/image";
import React from "react";

const SubServiceCard = () => {
  return (
    <div className="w-[389px]  p-3">
      <div className="flex items-center justify-center flex-col gap-4 text-white">
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721477113/RfTechnologiesWebsite/Mask_group_m099ft.svg`}
          alt="Icon"
          loading="lazy"
          width={55}
          height={55}
          className="p-2 bg-white shadow-sm rounded-lg m-auto"
        />
        <h4 className=" text-[26px] font-bold text-center">
          UX/UI Design & Prototype
        </h4>
        <p className="font-nunito text-lg text-center">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
        </p>
      </div>
    </div>
  );
};

export default SubServiceCard;
