import Image from "next/image";
import React from "react";

type titleProps = {
  title?: string;
};
type props = {
  data?: titleProps[];
};
const Features = ({ data }: props) => {
  return (
    <div className="flex items-center justify-start flex-col w-full sm:gap-6 gap-3 relative ">
      {data?.map((item) => (
        <div
          key={item?.title}
          className="flex items-center justify-start gap-2 w-full bg-[#30C386] bg-opacity-20 sm:p-4 p-3 border border-[#30c386] shadow rounded-lg"
        >
          <span>
            {" "}
            <Image
              src={
                "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721655303/RfTechnologiesWebsite/Group_1597883907_gztenh.svg"
              }
              alt="checked"
              width={25}
              height={25}
              loading="lazy"
              className="max-sm:w-[25px] max-sm:h-[25px]"
            />
          </span>
          <p className="w-full sm:text-xl text-base font-semibold ">
            {item?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
