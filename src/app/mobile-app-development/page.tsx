import BoostYourMob from "@/components/BoostYourMob";
import MobileAppCard from "@/components/MobileAppCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className=" py-[190px] flex items-center justify-center bg-cover mx-auto "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720687833/RfTechnologiesWebsite/representation-user-experience-interface-design_1_1_jpayhx.png")`,
        }}
      >
        <p className="text-[50px] md:text-[120px] text-[#EDAC18]">Mobile App</p>
        <span className=" text-white text-[50px] md:text-[120px] text-center ml-4">
          Development{" "}
        </span>
      </div>
      <MobileAppCard />
      <BoostYourMob />
    </div>
  );
};

export default page;
