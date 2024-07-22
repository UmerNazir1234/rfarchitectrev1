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
import { TbVirusSearch } from "react-icons/tb";
import { TbSettingsPause } from "react-icons/tb";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BsKanban } from "react-icons/bs";

export const menuItems = [
  { id: 1, name: "Who We Are?", link: "/about-us" },
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
    link: "/wordpress-development",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 2,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402683/RfTechnologiesWebsite/Vector_3_mbvtlf.svg",
    title: "Laravel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 3,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_57_f3m3lj.svg",
    title: "ASP .NET",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 4,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_58_mkdbq4.svg",
    title: "Vue.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 5,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402678/RfTechnologiesWebsite/pngwing.com_60_xblbl8.svg",
    title: "Node.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 6,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_62_nmqazp.svg",
    title: "WordPress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 7,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_63_zlabdz.svg",
    title: "Shopify",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 8,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_64_r2dpz2.svg",
    title: "WooCommerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 9,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_65_nb4rzf.svg",
    title: "UX/UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 10,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402674/RfTechnologiesWebsite/pngwing.com_66_qofvpi.svg",
    title: "Flutter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 11,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/image_103_hjsnhq.svg",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 12,
    url: "/",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/pngwing.com_67_mkn58v.svg",
    title: "PHP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

/* Home */
export const faq = [
  {
    id: 1,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 6,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

/*custom software Development */
export const customSoftwareDevelopmentServiceData = [
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
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 3,
    title: "Custom Mobile App Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638917/RfTechnologiesWebsite/Mask_group_6_ajs3qa.svg",
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
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
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
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638947/RfTechnologiesWebsite/Mask_group_7_kkk7xr.svg",
  },
];
/*end Custom software Development */

/* WordPress Development */
export const wordPressServiceData = [
  {
    id: 1,
    title: "WordPress API Integration Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642883/RfTechnologiesWebsite/Mask_group_xf3txy.svg",
  },
  {
    id: 2,
    title: "Theme Development Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_2_ws5unm.svg",
  },
  {
    id: 3,
    title: "Custom WordPress Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_1_zwcjkj.svg",
  },
  {
    id: 4,
    title: "WooCommerce Development Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 5,
    title: "WordPress Migration Service",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_3_j14sxn.svg",
  },
  {
    id: 6,
    title: "WordPress SEO Service",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_5_swkmsx.svg",
  },
  {
    id: 7,
    title: "PSD to WordPress",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 8,
    title: "WordPress Speed Optimization Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_7_qakhfb.svg",
  },
  {
    id: 9,
    title: "Maintenance And Support",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_8_ahomn6.svg",
  },
];

export const wordpressCardText = [
  {
    title: "why choose us<span class='text-secondary'>?</span>",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. </br> </br> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/about-us ",
    btnTitle: "about us",
    enableImageLeft: false,
    enableImageRight: true,
    cards: [
      {
        icon: <TbVirusSearch className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Effective Solutions",
      },
      {
        icon: <TbSettingsPause className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Upgradation",
      },
      {
        icon: (
          <PiProjectorScreenChart className="text-[80px] max-sm:text-[40px]" />
        ),
        cardTitle: "Responsive and flexible design",
      },
      {
        icon: <BsKanban className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "In-Depth Analysis",
      },
    ],
  },
];
export const wordpressImageWithText = [
  {
    title: "Shopify To WordPress",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642023/RfTechnologiesWebsite/image_133_wto9ik.svg",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "Best services",
    ctaLink: "",
    ctaTitle: "View More",
    imageFirst: true,
    enableImageCenter: true,
    enableImageRight: false,
  },
];
export const wordpressfaq = [
  {
    id: 1,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 6,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    awnser:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];
/* End WordPress Development */

/* woocomemrce development */
export const woocomemrceServiceData = [
  {
    id: 1,
    title: "WooCommerce Consultation",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 2,
    title: "WooCommerce Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_2_ws5unm.svg",
  },
  {
    id: 3,
    title: "WooCommerce Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_1_zwcjkj.svg",
  },
  {
    id: 4,
    title: "WooCommerce Integrations",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 5,
    title: "WooCommerce Configuration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_3_j14sxn.svg",
  },
  {
    id: 6,
    title: "WooCommerce Migration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_5_swkmsx.svg",
  },
  {
    id: 7,
    title: "WooCommerce Extensions",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
];
