import { BsDatabaseFillGear } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineImageSearch } from "react-icons/md";

export const textWithCardData = [
  {
    title: "Boost Your Mobile Traffic!",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. </br> </br> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/about-us ",
    btnTitle: "About us",
    enableImageLeft: true,
    enableImageRight: false,
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

export const imageWithText = [
  {
    title: "Our Case Study",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720698819/RfTechnologiesWebsite/Group_1597883917_jpewpc.png",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "product gallery",
    ctaLink: "/",
    ctaTitle: "View More",
    imageFirst: true,
    enableImageCenter: false,
    enableImageRight: true,
  },
];
