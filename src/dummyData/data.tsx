import { TbBulb } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { FcProcess } from "react-icons/fc";
import { BiCheckShield } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { Tabs, Work } from "@/lib/type";
import { TbVirusSearch } from "react-icons/tb";
import { TbSettingsPause } from "react-icons/tb";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BsKanban } from "react-icons/bs";

export const menuItems = [
  { id: 1, name: "Who We Are?", link: "/about-us" },
  { id: 2, name: "Our Work", link: "/our-work" },
  { id: 3, name: "Our Services", link: "#" },
  { id: 4, name: "Contact Us", link: "/contact-us" },
];

/* home */
export const testimonial = [
  {
    id: 1,
    review:
      "I had Best experience with them. Very fast and professional. We wanted contact page link to change with our help desk code and they were able to do it in less than 24 hours. Will do another project with them. Thank you",
    client_name: "Nick Jabber",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 2,
    review:
      "RF Technologies was amazing! Will hire again for all my Shopify needs. Knows exactly what to do and works fast. Very well done.",
    client_name: "Marco Lange",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 3,
    review:
      "I had Best experience with them. Very fast and professional. We wanted contact page link to change with our help desk code and they were able to do it in less than 24 hours. Will do another project with them. Thank you",
    client_name: "Nick Jabber",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 4,
    review:
      "Great job, great communication, super fast, and got everything correct quickly! Thank you and highly recommended : ) ... I look forward to repeat business.",
    client_name: "Rico",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 5,
    review:
      "It's amazing to meet someone electronically from across the world, and grow to trust and respect them in such a short period of time. But that's exactly what happened with RF Technologies . I look forward to working with them for the foreseeable future.",
    client_name: "Leekim",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 6,
    review:
      "Having worked on multiple projects with RFtechnologoes, i've always been very happy with the outcome and quality.",
    client_name: "Austen Plummer",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "Australia",
  },
  {
    id: 7,
    review:
      "Adding a code on the product template Shopify. Very responsive and great job. Resolved as I needed it. Thank you.",
    client_name: "Zanetita",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "Czech Republic",
  },
  {
    id: 8,
    review:
      "The BEST. I honestly don’t want to share them with anyone else so that they can do all of my projects!",
    client_name: "The Best 10 Ever",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 9,
    review: "Excellent transparent communication throughout the process.",
    client_name: "Invividcolour",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United States",
  },
  {
    id: 10,
    review:
      "RF Technologies continues to do excellent work for my website . An absolute pleasure to work with. Has made an incredible difference to my store",
    client_name: "Tdsv",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United Kingdom",
  },
  {
    id: 11,
    review: "Worked with them a lot, and saw really good service 👏 👌",
    client_name: "Mordecha",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "United Kingdom",
  },
  {
    id: 12,
    review:
      "RF Technologies is definitely the option for us. I’ve renamed them USAIN BOLT because they are SUPER-FAST AND VERY EFFICIENT. Delivered way ahead of deadline.",
    client_name: "David Davinci",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "Ireland",
  },
  {
    id: 13,
    review:
      "RF Technologies is fantastic. Clear communications and I'm super happy with the work delivered. I look forward to working with them on the future projects. :)",
    client_name: "Littlehk",
    client_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721990356/RfTechnologiesWebsite/PHOTO-2018-06-20-19-37-19_puar6j.webp",
    client_country: "Hong Kong",
  },
];
export const featuredProjects = [
  {
    id: 1,
    title: "Elite ECW",

    url: "/our-work/#elite",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721996209/RfTechnologiesWebsite/elite_ejhwtj.webp",
  },
  {
    id: 2,
    title: "Wildflower",
    url: "/our-work/#whildflower",

    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997065/RfTechnologiesWebsite/wearewildflower-300x145.webp_sopxw0.webp",
  },
  {
    id: 3,
    title: "Thrust",

    url: "/our-work/#thrust",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997760/RfTechnologiesWebsite/thrust-1-e1653319909879_hteovy.webp",
  },
  {
    id: 4,
    title: "Presto",

    url: "/our-work/#presto",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997797/RfTechnologiesWebsite/other-1_uqi3w2.webp",
  },
  {
    id: 5,
    title: "The Lazy Monkey",

    url: "/our-work/#thelazy",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997830/RfTechnologiesWebsite/lazy-monkey-1_cuq5dm.webp",
  },
  {
    id: 6,
    title: "Big Little Things",

    url: "/our-work/#big",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997866/RfTechnologiesWebsite/big-little-1-e1653320233846_ctxsjz.webp",
  },
  {
    id: 7,
    title: " Pump Apparel",

    url: "/our-work/#pump",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997919/RfTechnologiesWebsite/pumpapparel-1-e1653320400598_i33jaj.webp",
  },
  {
    id: 8,
    title: "Niki's",

    url: "/our-work/#niki",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997965/RfTechnologiesWebsite/nikisss-banner-img_rabd61.webp",
  },
  {
    id: 9,
    title: "EazyTicks",

    url: "/our-work/#eazyticks",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721998002/RfTechnologiesWebsite/EazyTicks-Image_rtyiio.webp",
  },
  {
    id: 10,
    title: "Elite Customizer",

    url: "/our-work/#elitecustomizer",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721998034/RfTechnologiesWebsite/shopify-app_fkbokv.webp",
  },
  {
    id: 11,
    title: "Epic Neons",
    url: "/our-work/#epic",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721998064/RfTechnologiesWebsite/epic-neons_tqjtxe.webp",
  },
];

/* endHome */
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
    title:
      "<span class='text-secondary'>RF TECHNOLOGIES</span> We Provide Awnsers. ",
    url: "/about-us",
    description:
      "Want To Turn Your Idea Into A Digital Product And Make It Successful Using Best Marketing Strategies?",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722243811/RfTechnologiesWebsite/Desktop_-_9_lcv48g.png",
  },
  {
    id: 2,
    title: "IT SOLUTIONS <span class='text-secondary'>&</span> SERVICES",
    url: "/about-us",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722243811/RfTechnologiesWebsite/Desktop_-_9_lcv48g.png",
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
    id: 1,
    workId: "elite",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_52_zznfko.png",
    title: "Elite By ECW",
    text: "Elite Sports & Apparel",
    subtitle: "React Extension Shopify",
    color: "#28292D",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    workId: "whildflower",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_62_ci28zj.png",
    title: "Eazyticks",
    text: "Online E-Ticketing Platform",
    subtitle: "Nextjs & Microsoft .Net",
    color: "#F85431",
    textColor: "#ffffff",
  },
  {
    id: 3,
    workId: "thrust",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
    title: "Ozelu Studio",
    text: "Traditional Photo Studio Services Online",
    subtitle: "Nextjs",
    color: "#378C84",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    workId: "presto",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
    title: "EZFUNDRAZR",
    text: "FUNDRAISING MADE EASY",
    subtitle: "Microsoft.Net",
    color: "#BFF1E9",
    textColor: "#000000",
  },
  {
    id: 5,
    workId: "thelazy",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
    title: "Jenson Bike Shipping",
    text: "The Most Convenient, Affordable Way to Ship Your Bike and Gear",
    subtitle: "Shopify, UPS API integration",
    color: "#00263A",
    textColor: "#ffffff",
  },
  {
    id: 6,
    workId: "big",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
    title: "The Transparency",
    text: "Skin Care Products",
    subtitle: "Shopify E-commerce",
    color: "#6AB7BD",
    textColor: "#FFFFFF",
  },
  {
    id: 7,
    workId: "pump",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_63_vm0xvw.png",
    title: "Pump Appearl",
    text: "Fitness Wear",
    subtitle: "Shopify , UX & UI Design",
    color: "#932828",
    textColor: "#ffffff",
  },
  {
    id: 8,
    workId: "niki",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776299/RfTechnologiesWebsite/image_64_wgmst1.png",
    title: "Niki's",
    text: "Natural Wipes & Parent’s Corner",
    subtitle: "Flutter Native App",
    color: "#4EB4BA",
    textColor: "#000000",
  },
  {
    id: 9,
    workId: "eazyticks",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776297/RfTechnologiesWebsite/image_67_tqgzoz.png",
    title: "Big Little Things.",
    text: "WordPress E-commerce",
    subtitle: "",
    color: "#F4AE0F",
    textColor: "#ffffff",
  },
  {
    id: 10,
    workId: "elitecustomizer",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776296/RfTechnologiesWebsite/image_66_sxtpis.png",
    title: "Combine Marketing",
    text: "Find All Good Projects In One Place",
    subtitle: "WordPress Elementor",
    color: "#5089C6",
    textColor: "#ffffff",
  },
  {
    id: 11,
    workId: "hard",
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
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721400446/RfTechnologiesWebsite/pngwing.com_59_gm2uyx.svg",
    title: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 2,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402683/RfTechnologiesWebsite/Vector_3_mbvtlf.svg",
    title: "Laravel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 3,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_57_f3m3lj.svg",
    title: "ASP .NET",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 4,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_58_mkdbq4.svg",
    title: "Vue.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 5,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402678/RfTechnologiesWebsite/pngwing.com_60_xblbl8.svg",
    title: "Node.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 6,
    url: "/our-work",
    workId: "big",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_62_nmqazp.svg",
    title: "WordPress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 7,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_63_zlabdz.svg",
    title: "Shopify",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 8,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_64_r2dpz2.svg",
    title: "WooCommerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 9,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_65_nb4rzf.svg",
    title: "UX/UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 10,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402674/RfTechnologiesWebsite/pngwing.com_66_qofvpi.svg",
    title: "Flutter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 11,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/image_103_hjsnhq.svg",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 12,
    url: "/our-work",
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

export const wooCommerceKeyFeatures = [
  {
    id: 1,
    bgColor: "#0037B1",
    title: "Open-Source Platform",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648544/RfTechnologiesWebsite/Mask_group_14_x8cunu.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    title: "Easy to Setup",
    bgColor: "#C90764",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729010/RfTechnologiesWebsite/Mask_group_31_ka6ncj.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    title: "Offer Payments & Shipping",
    bgColor: "#01AB78",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729053/RfTechnologiesWebsite/Mask_group_32_vwcaes.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    title: "Manage Orders On the Go",
    bgColor: "#D09703",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729106/RfTechnologiesWebsite/Mask_group_33_shpkdh.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    title: "Manage Orders On the Go",
    bgColor: "#710583",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729147/RfTechnologiesWebsite/Mask_group_34_khsfqk.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 6,
    title: "Extensions Store",
    bgColor: "#F17812",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729190/RfTechnologiesWebsite/Mask_group_35_id3ako.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];
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
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647257/RfTechnologiesWebsite/Mask_group_9_mu6pnf.svg",
  },
  {
    id: 3,
    title: "WooCommerce Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647291/RfTechnologiesWebsite/Mask_group_10_r09khi.svg",
  },
  {
    id: 4,
    title: "WooCommerce Integrations",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 5,
    title: "WooCommerce Configuration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647342/RfTechnologiesWebsite/Mask_group_12_kcarut.svg",
  },
  {
    id: 6,
    title: "WooCommerce Migration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 7,
    title: "WooCommerce Extensions",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
];

export const woocomemrceCardText = [
  {
    title: "why choose us<span class='text-secondary'>?</span>",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. </br> </br> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/about-us ",
    btnTitle: "about us",
    enableImageLeft: true,
    enableImageRight: false,
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

export const woocomemrcefaq = [
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
/* end woocommerce */

/* website design and development */
export const websiteServiceData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648706/RfTechnologiesWebsite/Mask_group_17_nd3l9k.svg",
  },
  {
    id: 2,
    title: "SEO",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648676/RfTechnologiesWebsite/Mask_group_16_vgjjim.svg",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647291/RfTechnologiesWebsite/Mask_group_10_r09khi.svg",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648596/RfTechnologiesWebsite/Mask_group_15_bgalcf.svg",
  },
  {
    id: 5,
    title: "Open Source Platform",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648544/RfTechnologiesWebsite/Mask_group_14_x8cunu.svg",
  },
  {
    id: 6,
    title: "CRM",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 7,
    title: "Integration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 7,
    title: "Maintenance",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_8_ahomn6.svg",
  },
];

export const websiteImageWithText = [
  {
    title: "Great websites grow your business over time",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721649228/RfTechnologiesWebsite/Group_1597883924_lbomti.png",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "OUR EXPERTISE",
    ctaLink: "",
    ctaTitle: "View More",
    imageFirst: false,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: true,
  },
];

export const websitefaq = [
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

/* end website desing and development */

/* Digital Marketing */
export const digitalServiceData = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651687/RfTechnologiesWebsite/Mask_group_18_kayl71.svg",
  },
  {
    id: 2,
    title: "Email Marketing",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651713/RfTechnologiesWebsite/Mask_group_19_otzj8i.svg",
  },
  {
    id: 3,
    title: "Pay Per Click (ad)",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651747/RfTechnologiesWebsite/Mask_group_20_w2h9oo.svg",
  },
  {
    id: 4,
    title: "Content Marketing",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651809/RfTechnologiesWebsite/Mask_group_22_vgivjd.svg",
  },
  {
    id: 5,
    title: "SEO",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648676/RfTechnologiesWebsite/Mask_group_16_vgjjim.svg",
  },
  {
    id: 6,
    title: "Conversion Rate Optimization",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651779/RfTechnologiesWebsite/Mask_group_21_wx4rgo.svg",
  },
];

export const socialAnalysisImageWithText = [
  {
    title: "Social Analysts and Strategists",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651869/RfTechnologiesWebsite/Group_1597883924_1_oow9q4.png",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "OUR EXPERTISE",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: true,
  },
];
export const trustedBrandImageWithText = [
  {
    title: "Trusted by World-wide brands and organizations",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721658313/RfTechnologiesWebsite/Group_1597883962_a02iim.svg",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "/",
    btnTitle: "OUR APPROCH",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: true,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: false,
  },
];

export const digitalMarketingfaq = [
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

export const digitalMarketingCardText = [
  {
    title: "Change the Way You See Social",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    btnLink: "/about-us ",
    btnTitle: "Social Media Strategy",
    enableImageLeft: true,
    enableImageRight: false,
    childern: "this is child",
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
export const digitalFeatures = [
  {
    id: 1,
    title: "Understand Your Audience",
  },
  {
    id: 2,
    title: "Engage Your Community",
  },
  {
    id: 3,
    title: "Reach Your Audience",
  },
  {
    id: 4,
    title: "Social Media Analytics",
  },
];
/* End Digital Marketing */

/* seo */

export const seoServiceData = [
  {
    id: 1,
    title: "Local SEO",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662845/RfTechnologiesWebsite/Mask_group_23_tx8sdx.svg",
  },
  {
    id: 2,
    title: "On-Page Optimization",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662845/RfTechnologiesWebsite/Mask_group_24_wf44ci.svg",
  },
  {
    id: 3,
    title: "Technical SEO",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_25_sfg0dc.svg",
  },
  {
    id: 4,
    title: "Speed Optimization",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_26_rg2tz8.svg",
  },
  {
    id: 5,
    title: "Keyword Research",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662843/RfTechnologiesWebsite/Mask_group_27_fpdmpo.svg",
  },
  {
    id: 6,
    title: "Content Creation",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662843/RfTechnologiesWebsite/Mask_group_28_lazqu5.svg",
  },
  {
    id: 7,
    title: "E-commerce SEO",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_29_bzuvyx.svg",
  },
  {
    id: 8,
    title: "SEO Consulting",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 9,
    title: "Analysis and Reporting",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662843/RfTechnologiesWebsite/Mask_group_30_wme1fs.svg",
  },
];
export const seoCardText = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721734466/RfTechnologiesWebsite/Group_1597883924_2_yopuhj.svg",
    cards: [
      {
        title: "40%",
        cardTitle: "Reduction in Bounce Rate",
      },
      {
        title: "81%",
        cardTitle: "Higher Conversion Rate",
      },
      {
        title: "410%",
        cardTitle: "Increase In Organic Traffic",
      },
      {
        title: "220%",
        cardTitle: "Increase in Return on Investments",
      },
    ],
  },
];
/* endseo */

/* grapic designing */
export const grapicDesignServiceData = [
  {
    id: 1,
    title: "Label Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721477113/RfTechnologiesWebsite/Mask_group_m099ft.svg",
  },
  {
    id: 2,
    title: "Label Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 3,
    title: "Banners Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638917/RfTechnologiesWebsite/Mask_group_6_ajs3qa.svg",
  },
  {
    id: 4,
    title: "Logo and Branding Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487828/Mask_group_4_vn0iha.svg",
  },
  {
    id: 5,
    title: "Products and Catalogs",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487832/Mask_group_2_cyrs1o.svg",
  },
  {
    id: 6,
    title: "Front-end and UX/UI Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487834/Mask_group_1_bnef0w.svg",
  },
  {
    id: 7,
    title: "Social Media Design",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487835/Mask_group_jelked.svg",
  },
  {
    id: 8,
    title: "InfoGraphicst",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638947/RfTechnologiesWebsite/Mask_group_7_kkk7xr.svg",
  },
];

export const grapicCardText = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721733053/RfTechnologiesWebsite/Group_1597883924_1_bhav7a.svg",
    cards: [
      {
        title: "300+",
        cardTitle: "Logo and Brand Design",
      },
      {
        title: "90+",
        cardTitle: "Happy Clients",
      },
      {
        title: "1350+",
        cardTitle: "Front-end and UX & UI Design Tampltes",
      },
      {
        title: "94+",
        cardTitle: "Banners Designs",
      },
    ],
  },
];

/* end grapic designing */

/* CRM */
export const crmServiceData = [
  {
    id: 1,
    title: "CRM Consulting",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 2,
    title: "CRM Solution Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721737918/RfTechnologiesWebsite/Mask_group_36_gyikae.svg",
  },
  {
    id: 3,
    title: "CRM Implementation",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647342/RfTechnologiesWebsite/Mask_group_12_kcarut.svg",
  },
  {
    id: 4,
    title: "Mobile CRM Solutions",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721737960/RfTechnologiesWebsite/Mask_group_37_oogaqw.svg",
  },
  {
    id: 5,
    title: "CRM Integration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 6,
    title: "CRM Migration",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 7,
    title: "CRM Platform Customization",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 8,
    title: "CRM Software Maintenance",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_8_ahomn6.svg",
  },
];
export const crmKeyFeatures = [
  {
    id: 1,
    bgColor: "#0037B1",
    title: "Understand Your Customers",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738259/RfTechnologiesWebsite/Mask_group_38_dfx41z.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    title: "Boost Sales",
    bgColor: "#C90764",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738285/RfTechnologiesWebsite/Mask_group_39_b5btme.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    title: "Improve Communication",
    bgColor: "#01AB78",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738319/RfTechnologiesWebsite/Mask_group_40_kyr5os.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    title: "Make Data-Driven Decisions",
    bgColor: "#D09703",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738349/RfTechnologiesWebsite/Mask_group_41_thfnjv.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    title: "Enhance Customer Service",
    bgColor: "#710583",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738382/RfTechnologiesWebsite/Mask_group_42_j5fxq0.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 6,
    title: "Automate Everyday Tasks",
    bgColor: "#F17812",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738407/RfTechnologiesWebsite/Mask_group_43_popba4.svg",
    details:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];
export const crmImageWithText = [
  {
    title: "Functionalities & flex-abilities",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741821/RfTechnologiesWebsite/Group_1597883963_hevjr1.svg",
    description:
      "Functionalities and flex-abilities of custom CRM  are following.",
    btnLink: "/about-us",
    btnTitle: "why choose us",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: true,
  },
];
export const crmFeatures = [
  {
    id: 1,
    title: "Sale Data Management",
  },
  {
    id: 2,
    title: "Leads management",
  },
  {
    id: 3,
    title: "Account management",
  },
  {
    id: 4,
    title: "Opportunity management",
  },
  {
    id: 5,
    title: "Workflows and Approvals",
  },
  {
    id: 6,
    title: "Email integrations",
  },
  {
    id: 7,
    title: "Reports and Dashboard",
  },
];
/* end CRM */

/* shopify development */
export const shopifyServiceData = [
  {
    id: 1,
    title: "Shopify Store Setup",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741033/RfTechnologiesWebsite/Mask_group_44_mzoynp.svg",
  },
  {
    id: 2,
    title: "Shopify Store Maintenance",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741100/RfTechnologiesWebsite/Mask_group_45_vzdue7.svg",
  },
  {
    id: 3,
    title: "Shopify Mobile App Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741139/RfTechnologiesWebsite/Mask_group_46_r3q1zj.svg",
  },
  {
    id: 4,
    title: "Shopify Theme Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647291/RfTechnologiesWebsite/Mask_group_10_r09khi.svg",
  },
  {
    id: 5,
    title: "Shopify Private App Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741139/RfTechnologiesWebsite/Mask_group_46_r3q1zj.svg",
  },
  {
    id: 6,
    title: "Migration To Shopify",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 7,
    title: "PSD to Shopify",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741365/RfTechnologiesWebsite/Mask_group_49_og0i73.svg",
  },
  {
    id: 8,
    title: "Shopify Integration Services",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741312/RfTechnologiesWebsite/Mask_group_48_l4wkxq.svg",
  },
  {
    id: 9,
    title: "Shopify Plus Development",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741411/RfTechnologiesWebsite/Mask_group_50_ijiekz.svg",
  },
];
export const shopifyFaq = [
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
export const shopifyImageWithText = [
  {
    title: "Advantage Of Choosing Us",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741821/RfTechnologiesWebsite/Group_1597883963_hevjr1.svg",
    description:
      "With Our best experience and good knowledge of Shopify, we provide the best solutions for your online stores.",
    btnLink: "/",
    btnTitle: "Advantages",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: true,
  },
];
export const shopifyFeatures = [
  {
    id: 1,
    title: "Top Shopify Developers",
  },
  {
    id: 2,
    title: "Mobile-First Approach",
  },
  {
    id: 3,
    title: "SEO Friendly",
  },
  {
    id: 4,
    title: "Short Time To Online Running",
  },
  {
    id: 5,
    title: "Full Testing and Bug-Free site",
  },
  {
    id: 6,
    title: "Fully Customization and Full Maintenance",
  },
  {
    id: 7,
    title: "Convert existing store to online 2.0",
  },
];
export const shopImageWithText = [
  {
    title: "",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721809735/RfTechnologiesWebsite/Group_1597883964_loqihf.svg",
    description:
      "Our Shopify Experts migrate your existing theme to Shopify Online Store 2.0 Fully accurate word by word. </br> </br> With Online 2.0 Shopify Theme, Enjoy the creative designs and Sections on all the pages of your shopify Website. Easily Customize and Highly attractive with 100% Conversion rate.",
    btnLink: "",
    btnTitle: "",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageCenter: false,
    enableImageRight: false,
    enableImageleft: true,
  },
];
/* end shopify development */

/* blog */

export const blog = [
  {
    id: 1,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721834451/RfTechnologiesWebsite/image_202_tzlx4m.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 2,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906512/RfTechnologiesWebsite/5757453_1_dnrpij.png",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 3,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906551/RfTechnologiesWebsite/image_203_epwbbo.png",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 4,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906575/RfTechnologiesWebsite/image_204_hvyuvz.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 5,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906612/RfTechnologiesWebsite/image_205_w39xn3.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 6,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906637/RfTechnologiesWebsite/image_206_hugvn6.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 7,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721834451/RfTechnologiesWebsite/image_202_tzlx4m.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 8,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906512/RfTechnologiesWebsite/5757453_1_dnrpij.png",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 9,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906551/RfTechnologiesWebsite/image_203_epwbbo.png",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 10,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906575/RfTechnologiesWebsite/image_204_hvyuvz.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 11,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906612/RfTechnologiesWebsite/image_205_w39xn3.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
  {
    id: 12,
    blog_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906637/RfTechnologiesWebsite/image_206_hugvn6.svg",
    blog_title: "New HTML tag: An absolute game changer",
    publish_date: "July 19, 2024",
    auther_image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png",
    auther_name: "Jacob Jones",
  },
];
/* end blog */

/* become a password */
export const becomeImageWithText = [
  {
    title: "Why Choose a Business Partner?",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721741821/RfTechnologiesWebsite/Group_1597883963_hevjr1.svg",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. <br/> <br/> Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnLink: "",
    btnTitle: "",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageLeft: true,
    enableImageCenter: false,
    enableImageRight: false,
  },
];

export const becomePartnersTabs: Tabs[] = [
  {
    label: "Our Priorities",
    content:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia.",
    icon: <TbBulb className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Beginners Partnership",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <PiHandshakeLight className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Modified Developers",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <FcProcess className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Trustworthy Companionship",
    content:
      "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
    icon: <BiCheckShield className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "24/7 hours Availability",
    content: "As they.",
    icon: <SiFireship className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
];
/* end become a password */
