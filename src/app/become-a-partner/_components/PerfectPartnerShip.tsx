import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const PerfectPartnerShip = () => {
  return (
    <section className="flex flex-row relative items-center justify-center bg-cover bg-no-repeat py-48  overflow-hidden bg-primary">
      <div className="page-width">
        <div className="flex items-center justify-center">
          <Heading title="Perfect Partnership" />
        </div>
        <p className=" text-white p-lg text-center">
          The perfect partnership is built on trust, collaboration, and a shared
          vision for success. By aligning our expertise with your business
          goals, we create synergistic solutions that drive exceptional results
          and foster long-term growth. Together, we turn challenges into
          opportunities and achieve extraordinary outcomes.
        </p>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719912842/RfTechnologiesWebsite/Group_1597883856_r26khq.png"
        }
        width={260}
        height={260}
        alt=""
        className="absolute right-24 top-0 max-lg:w-36 max-lg:h-36 max-sm:w-20 max-sm:h-20 max-sm:top-0 max-sm:right-4"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png"
        }
        width={250}
        height={250}
        alt="Rf icon"
        className="absolute left-0 lg:-bottom-[30px] bottom-0 max-lg:w-48 max-lg:h-48 max-sm:w-20 max-sm:h-20 max-md:hidden object-center object-contain"
        loading="lazy"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719913174/RfTechnologiesWebsite/Let_s_get_IT_done_isjw4p.png"
        }
        width={302}
        height={67}
        alt="Let's it done"
        loading="lazy"
        className="absolute left-[13%] bottom-10 max-md:left-[10%] max-md:bottom-6 max-md:w-64 max-md:h-14"
      />
    </section>
  );
};

export default PerfectPartnerShip;
