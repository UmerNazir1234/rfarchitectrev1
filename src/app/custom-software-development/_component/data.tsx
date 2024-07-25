import { BsDatabaseFillGear } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineImageSearch } from "react-icons/md";

export const customSoftwareDeveloperCardText = [
  {
    title: "Our focus",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. </br> </br> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/why-choose-us ",
    btnTitle: "WHY CHOOSE US?",
    enableImageLeft: false,
    enableImageRight: true,
    cards: [
      {
        icon: (
          <MdOutlineImageSearch className="text-[80px] max-sm:text-[40px]" />
        ),
        cardTitle: "Search Engine Optimization",
      },
      {
        icon: <FiSpeaker className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Social Media Strategy",
      },
      {
        icon: <BsDatabaseFillGear className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Real Time and Data",
      },
      {
        icon: <HiDocumentReport className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Reporting & Analysis",
      },
    ],
  },
];

export const customSoftwareDeveloperImageWithText = [
  {
    title: "Client-Centric Approach",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721474154/RfTechnologiesWebsite/image_122_l4jdnw.svg",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "clients satisfaction",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: true,
    enableImageCenter: true,
    enableImageRight: false,
  },
];
