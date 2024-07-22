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
    <section
      className=" bg-center bg-cover bg-no-repeat py-32 relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721475774/RfTechnologiesWebsite/Vector_11_bncewh.svg')",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-10 pb-12 relative z-50">
        <Button
          title="Our Services"
          classes="bg-secondary"
          enableIcons={true}
        />
        <h2 className="text-white uppercase">What we offer</h2>
      </div>
      <div className="page-width ">
        <div className="flex items-center justify-center gap-10 flex-wrap">
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
  );
};

export default SubServices;
