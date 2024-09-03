import Button from "@/components/Button";
import SubServiceCard from "@/components/SubServiceCard";
import { subServiceProps } from "@/lib/type";
import Image from "next/image";
import React from "react";
type dataProps = {
  data: subServiceProps[];
};
const SubServices = ({ data }: dataProps) => {
  return (
    <div className="relative z-60 -mt-[130px] w-full">
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

      <section className="bg-center bg-cover bg-no-repeat py-32 relative z-50 bg-primary">
        <div className="flex items-center justify-center flex-col gap-10 pb-12 relative z-50  ">
          <Button
            title="Our Services"
            classes="bg-secondary cursor-default"
            enableIcons={true}
          />
          <h2 className="text-white uppercase">What we offer</h2>
        </div>
        <div className="page-width ">
          <div className="flex justify-center gap-10 flex-wrap">
            <SubServiceCard data={data} />
          </div>
        </div>
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485173/Group_1597883856_ptuvcr.svg`}
          alt="Dots"
          loading="lazy"
          width={200}
          height={200}
          className="absolute left-0 bottom-0 max-sm:!w-[150px] max-sm:!h-[150px]"
        />
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485903/Trade_Mark-02_2_kjzezd.svg`}
          alt="Rf icon"
          loading="lazy"
          width={320}
          height={320}
          className="absolute top-4 right-4 z-40 max-sm:w-[200px] max-sm:h-[200px]"
        />
      </section>
    </div>
  );
};

export default SubServices;
