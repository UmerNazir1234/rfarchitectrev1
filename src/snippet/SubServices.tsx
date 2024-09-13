import Button from "@/components/Button";
import IconDots from "@/components/Icons/IconDots";
import SubServiceCard from "@/components/SubServiceCard";
import { subServiceProps } from "@/lib/type";
import Image from "next/image";
import React from "react";
type dataProps = {
  data: subServiceProps[];
};
const SubServices = ({ data }: dataProps) => {
  return (
    <div className="relative -mt-[130px] w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 81"
        fill="none"
        className="w-full max-w-full -mb-[1px]"
      >
        <g clip-path="url(#clip0_1766_1353)">
          <path
            d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
            fill="#002475"
          />
          <path
            d="M204 81H0V0H308.5C300.1 0 292.333 4 289.5 6C274.333 17 233.1 68.4 225.5 74C217.9 79.6 208 81 204 81Z"
            fill="transparent"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1353">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <section className="bg-center bg-cover bg-no-repeat py-8  z-30 bg-primary ">
        <div className="flex items-center justify-center flex-col gap-10 pb-12 relative z-50  ">
          <Button
            title="Our Services"
            classes="bg-secondary cursor-default"
            enableIcons={true}
          />
          <h2 className="text-white uppercase">How We Can Help?</h2>
        </div>
        <div className="page-width ">
          <div className="flex justify-center md:gap-10 gap-4 flex-wrap">
            <SubServiceCard data={data} />
          </div>
        </div>

        <IconDots clasess="absolute left-0 bottom-0 max-sm:!w-[100px] max-sm:!h-[100px] z-20 max-md:w-10 max-md:h-10" />
        {/* <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485173/Group_1597883856_ptuvcr.svg`}
          alt="Dots"
          loading="lazy"
          width={200}
          height={200}
          className="absolute left-0 bottom-0 max-sm:!w-[100px] max-sm:!h-[100px] z-20"
        /> */}
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485903/Trade_Mark-02_2_kjzezd.svg`}
          alt="Rf icon"
          loading="lazy"
          width={200}
          height={200}
          className="absolute top-4 right-4  z-0"
        />
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-full -mt-[1px] relative z-10 max-sm:w-100 max-sm:h-100"
        viewBox="0 0 1440 81"
        fill="none"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_1766_1358)">
          <path
            d="M968 0H1439.5V81.5L847 81C855.4 81 863.167 77 866 75C881.167 64 938.9 12.6 946.5 7C954.1 1.4 964 0 968 0Z"
            fill="transparent"
          />
          <path
            d="M847 81H0V0H967.5C959.1 0 951.333 4 948.5 6C933.333 17 876.1 68.4 868.5 74C860.9 79.6 851 81 847 81Z"
            fill="#002475"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1358">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SubServices;
