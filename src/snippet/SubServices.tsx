import Button from "@/components/Button";
import SubServiceCard from "@/components/SubServiceCard";
import { stack } from "@/dummyData/data";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "UX/UI Design & Prototype",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721477113/RfTechnologiesWebsite/Mask_group_m099ft.svg",
  },
  {
    id: 2,
    title: "Software Consulting Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485173/Group_1597883856_ptuvcr.svg",
  },
  {
    id: 3,
    title: "Custom Mobile App Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721485903/Trade_Mark-02_2_kjzezd.svg",
  },
  {
    id: 4,
    title: "Custom Web Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487828/Mask_group_4_vn0iha.svg",
  },
  {
    id: 5,
    title: "Legacy App Upgradation",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487832/Mask_group_2_cyrs1o.svg",
  },
  {
    id: 6,
    title: "Enterprise App Development",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487834/Mask_group_1_bnef0w.svg",
  },
  {
    id: 7,
    title: "Custom CRM Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487835/Mask_group_jelked.svg",
  },
  {
    id: 8,
    title: "MVP Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487835/Trade_Mark-02_2_sa8hc5.svg",
  },
];

const SubServices = () => {
  return (
    <section
      className=" bg-center bg-cover bg-no-repeat py-32 relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721475774/RfTechnologiesWebsite/Vector_11_bncewh.svg')",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-10 md:!pb-20 !pb-12 relative z-50">
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
