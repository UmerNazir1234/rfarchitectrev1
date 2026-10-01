import { BsDatabaseFillGear } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineImageSearch } from "react-icons/md";

export const textWithCardData = [
  {
    title: "Boost Your Mobile Traffic!",
    description:"We specialize in designing, developing, and integrating technology solutions that enable businesses to adapt, evolve, and thrive in a competitive landscape.<br/><br/>With 58% of web users now accessing sites via mobile devices, leveraging a mobile app alongside your e-commerce website can significantly amplify your reach and engagement. Imagine the power of providing your customers with a seamless mobile experience—let us help you turn that vision into reality.",
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
      "We specialize in designing, developing, and integrating technology solutions that help businesses adapt, evolve, and grow. With 58% of web users on mobile devices, pairing your e-commerce website with a custom mobile app can significantly boost your reach and engagement.<br/><br/>Check out our case studies to see the impressive results we've achieved for our clients. We've developed apps for leading brands and businesses, delivering exceptional success. Partner with us to elevate your digital strategy and grow your business.",
    btnLink: "/",
    btnTitle: "product gallery",
    ctaLink: "/our-work",
    ctaTitle: "View Case Studies",
    imageFirst: true,
    enableImageCenter: false,
    enableImageRight: true,
  },
];
