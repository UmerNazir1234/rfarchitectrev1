import React from "react";
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { TbLayoutGridAdd } from "react-icons/tb";
const MobileAppCard = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 page-width">
      <div className="p-24 w-full bg-[#048C5B] rounded-xl col-span-2 text-center">
        &nbsp;
        <TbLayoutGridAdd className="text-white text-8xl" />
        <h4 className="text-white">Cross-platform app development</h4>
        <p className="text-white">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <div className=" bg-[#13429B] rounded-xl row-span-2 text-center">
        &nbsp;
        <GrAndroid className="text-white text-8xl" />
        <h4 className="text-white">Android app development</h4>
        <p className="text-white">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <div className=" bg-[#710583] rounded-xl row-span-2 text-center">
        &nbsp;
        <FaApple className="text-white text-8xl" />
        <h4 className="text-white">Ios App Development</h4>
        <p className="text-white">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
    </div>
  );
};

export default MobileAppCard;
