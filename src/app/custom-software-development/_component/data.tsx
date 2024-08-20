import { BsDatabaseFillGear } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineImageSearch } from "react-icons/md";

export const customSoftwareDeveloperCardText = [
  {
    title: "Our Focus",
    description:
      "At RF Tech, we deliver custom software solutions tailored to your specific business needs. Our strategic approach ensures that every project aligns with your objectives, driving efficiency and growth.<br/><br/>We leverage the latest technologies and best practices to build scalable, secure, and high-performance software. From bespoke applications to system integrations, we provide end-to-end support to bring your vision to life.",
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
      "At RF Tech, your success is our top priority. We tailor our software solutions to your specific needs, ensuring they align perfectly with your business goals and deliver outstanding results.<br/><br/>We’re committed to building strong partnerships through continuous support and adaptability. Our client-focused approach ensures that your software evolves with your needs, driving your success every step of the way.",
    btnLink: "/",
    btnTitle: "clients satisfaction",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: true,
    enableImageCenter: true,
    enableImageRight: false,
  },
];
