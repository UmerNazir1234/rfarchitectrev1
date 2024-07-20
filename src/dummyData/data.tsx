import { TbBulb } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { FcProcess } from "react-icons/fc";
import { BiCheckShield } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { Tabs, Work } from "@/lib/type";
import { MdOutlineImageSearch } from "react-icons/md";
import { FiSpeaker } from "react-icons/fi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";

export const menuItems = [
  { id: 1, name: "Who We Are?", link: "/who-we-are" },
  { id: 2, name: "Our Work", link: "/our-work" },
  { id: 3, name: "Our Services", link: "/our-services" },
  { id: 4, name: "Contact Us", link: "/contact-us" },
];

export const informationLinks = [
  {
    id: 1,
    name: "Become a Partner",
    link: "/become-a-partner",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Faq",
    link: "/faq",
  },
  {
    id: 6,
    name: "NDA",
    link: "/nda",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 8,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 9,
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
];

export const serviceLinks = [
  {
    id: 1,
    name: "Web Development",
    link: "/web-development",
  },
  {
    id: 2,
    name: "WordPress Development",
    link: "/wordPress-development",
  },
  {
    id: 3,
    name: "Shopify Development",
    link: "/shopify-development",
  },
  {
    id: 4,
    name: "Digital Marketing",
    link: "/digital-marketing",
  },
  {
    id: 5,
    name: "Graphic Design",
    link: "/graphic-design",
  },
  {
    id: 6,
    name: "SEO",
    link: "/seo",
  },
  {
    id: 7,
    name: "Mobile App Development",
    link: "/mobile-app-development",
  },
  {
    id: 8,
    name: "CRM Development",
    link: "/crm-development",
  },
  {
    id: 9,
    name: "Custom Software Development",
    link: "/custom-software-development",
  },
  {
    id: 10,
    name: "Woocommerce Development",
    link: "woocommerce-development",
  },
];

export const sliderData = [
  {
    id: 1,
    title: "IT SOLUTIONS <span class='heroSpan'>&</span> SERVICES",
    url: "/about-us",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720021733/RfTechnologiesWebsite/annie-spratt-QckxruozjRg-unsplash_lhcffl.png",
  },
  {
    id: 2,
    title: "IT SOLUTIONS <span class='heroSpan'>&</span> SERVICES",
    url: "/about-us",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720021733/RfTechnologiesWebsite/annie-spratt-QckxruozjRg-unsplash_lhcffl.png",
  },
];

export const tabs: Tabs[] = [
  {
    label: "Knowledge",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <TbBulb className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Promise",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <PiHandshakeLight className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Consistency",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <FcProcess className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Authenticity",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <BiCheckShield className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Passion",
    content: "As they.",
    icon: <SiFireship className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
];

export const work: Work[] = [
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_52_zznfko.png",
    title: "Elite By ECW",
    text: "Elite Sports & Apparel",
    subtitle: "React Extension Shopify",
    color: "#28292D",
    textColor: "#FFFFFF",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_62_ci28zj.png",
    title: "Eazyticks",
    text: "Online E-Ticketing Platform",
    subtitle: "Nextjs & Microsoft .Net",
    color: "#F85431",
    textColor: "#ffffff",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
    title: "Ozelu Studio",
    text: "Traditional Photo Studio Services Online",
    subtitle: "Nextjs",
    color: "#378C84",
    textColor: "#FFFFFF",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
    title: "EZFUNDRAZR",
    text: "FUNDRAISING MADE EASY",
    subtitle: "Microsoft.Net",
    color: "#BFF1E9",
    textColor: "#000000",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
    title: "Jenson Bike Shipping",
    text: "The Most Convenient, Affordable Way to Ship Your Bike and Gear",
    subtitle: "Shopify, UPS API integration",
    color: "#00263A",
    textColor: "#ffffff",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
    title: "The Transparency",
    text: "Skin Care Products",
    subtitle: "Shopify E-commerce",
    color: "#6AB7BD",
    textColor: "#FFFFFF",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_63_vm0xvw.png",
    title: "Pump Appearl",
    text: "Fitness Wear",
    subtitle: "Shopify , UX & UI Design",
    color: "#932828",
    textColor: "#ffffff",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776299/RfTechnologiesWebsite/image_64_wgmst1.png",
    title: "Niki's",
    text: "Natural Wipes & Parent’s Corner",
    subtitle: "Flutter Native App",
    color: "#4EB4BA",
    textColor: "#000000",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776297/RfTechnologiesWebsite/image_67_tqgzoz.png",
    title: "Big Little Things.",
    text: "WordPress E-commerce",
    subtitle: "",
    color: "#F4AE0F",
    textColor: "#ffffff",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776296/RfTechnologiesWebsite/image_66_sxtpis.png",
    title: "Combine Marketing",
    text: "Find All Good Projects In One Place",
    subtitle: "WordPress Elementor",
    color: "#5089C6",
    textColor: "#ffffff",
  },
  {
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776295/RfTechnologiesWebsite/image_68_w2qfee.png",
    title: "Hard Core Mattress",
    text: "We Specialize In Hard Foam Mattresses!",
    subtitle: "WordPress Elementor, Woocommerce",
    color: "#FDF4E6",
    textColor: "#28292D",
  },
];

export const stack = [
  {
    id: 1,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721400446/RfTechnologiesWebsite/pngwing.com_59_gm2uyx.svg",
    title: "React",
  },
  {
    id: 2,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402683/RfTechnologiesWebsite/Vector_3_mbvtlf.svg",
    title: "Laravel",
  },
  {
    id: 3,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_57_f3m3lj.svg",
    title: "ASP .NET",
  },
  {
    id: 4,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_58_mkdbq4.svg",
    title: "Vue.js",
  },
  {
    id: 5,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402678/RfTechnologiesWebsite/pngwing.com_60_xblbl8.svg",
    title: "Node.js",
  },
  {
    id: 6,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_62_nmqazp.svg",
    title: "WordPress",
  },
  {
    id: 7,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_63_zlabdz.svg",
    title: "Shopify",
  },
  {
    id: 8,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_64_r2dpz2.svg",
    title: "WooCommerce",
  },
  {
    id: 9,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_65_nb4rzf.svg",
    title: "UX/UI",
  },
  {
    id: 10,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402674/RfTechnologiesWebsite/pngwing.com_66_qofvpi.svg",
    title: "Flutter",
  },
  {
    id: 11,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/image_103_hjsnhq.svg",
    title: "SEO",
  },
  {
    id: 12,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/pngwing.com_67_mkn58v.svg",
    title: "PHP",
  },
];

// export const serviceCards = [
//   {
//     id:1,
//     title:"WordPress Development",
//     description:"Process of designing, creating, deploying, and maintaining software for a specific organizations.",
//     url:'/',
//   },

// ];
