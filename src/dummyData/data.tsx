import { TbBulb } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { BiCheckShield } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { Tabs, Work } from "@/lib/type";
import { TbVirusSearch } from "react-icons/tb";
import { TbSettingsPause } from "react-icons/tb";
import { PiProjectorScreenChart } from "react-icons/pi";
import { BsKanban } from "react-icons/bs";
import { VscTerminalUbuntu } from "react-icons/vsc";
import IconShopify from "@/components/Icons/IconShopify";
import IconWoocommerce from "@/components/Icons/IconWoocommerce";
import IconGrapic from "@/components/Icons/IconGrapic";
import IconCrm from "@/components/Icons/IconCrm";
import IconWordpress from "@/components/Icons/IconWordpress";
import IconApplicationDev from "@/components/Icons/IconApplicationDev";
import IconCustomSoftDev from "@/components/Icons/IconCustomSoftDev";
import IconSeo from "@/components/Icons/IconSeo";
import IconDigitalMarketing from "@/components/Icons/IconDigitalMarketing";

interface SubLink {
  id: number;
  icon: React.ReactElement;
  iconBg?: string;
  title: string;
  description: string;
  link: string;
}

interface MenuItem {
  id: number;
  name: string;
  link: string;
  links?: SubLink[];
}

export const menuItems: MenuItem[] = [
  { id: 1, name: "Who We Are?", link: "/about-us" },
  { id: 2, name: "Our Work", link: "/our-work" },
  {
    id: 3,
    name: "Our Services",
    link: "/our-services",
    links: [
      {
        id: 1,
        icon: <IconShopify classes="w-12 h-12" />,
        iconBg: "#EBF6D3",
        title: "Shopify Development",
        description:
          "Run Your business today with best e-commerce platform for online stores and retail point-of-sale systems.",
        link: "/shopify-development",
      },
      {
        id: 2,
        icon: <IconCustomSoftDev classes="w-12 h-12" />,
        iconBg: "#FEF3F3",
        title: "Custom Software Development",
        description:
          "Process of designing, creating, deploying, and maintaining software for a specific organizations.",
        link: "/custom-software-development",
      },
      {
        id: 3,
        icon: <IconApplicationDev classes="w-12 h-12" />,
        iconBg: "#FEF3F3",
        title: "Mobile Application Development",
        description:
          "Bring your project to market on every device and platform. attractive design and Fully Functional",
        link: "/mobile-app-development",
      },
      {
        id: 4,
        icon: <IconWordpress classes="w-12 h-12" />,
        iconBg: "#EAFCF3",
        title: "Wordpress Development",
        description:
          "Fulfills your content management needs, event calendars, media management, and general page content.",
        link: "/wordpress-development",
      },
      {
        id: 5,
        icon: <IconCrm classes="w-12 h-12" />,
        iconBg: "#E9F3D3",
        title: "CRM Development",
        description:
          "Get your personal CRM which allows for leads generation, assigning leads and staff management",
        link: "/crm-development",
      },
      {
        id: 6,
        icon: <IconWoocommerce classes="w-12 h-12" />,
        iconBg: "#EDE2F8",
        title: "Woocommerce Development",
        description:
          "Turn your WordPress website into an E-commerce Store online fully customizable",
        link: "/woocommerce-development",
      },
      {
        id: 7,
        icon: <IconGrapic classes="w-12 h-12" />,
        iconBg: "#FDECF3",
        title: "Graphic Designing",
        description:
          "Creation of visual compositions to solve problems and communicate ideas through typography, imagery, color and form",
        link: "/graphic-design",
      },
      {
        id: 8,
        icon: <IconSeo classes="w-12 h-12" />,
        iconBg: "#E3F4F9",
        title: "Search Engine Optimization",
        description:
          "Process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
        link: "/seo",
      },
      {
        id: 9,
        icon: <IconDigitalMarketing classes="w-12 h-12" />,
        iconBg: "#EBF4FA",
        title: "Digital Marketing",
        description:
          "Promotion of brands to connect with potential customers using the internet and other forms of digital communication",
        link: "/digital-marketing",
      },
    ],
  },
  { id: 4, name: "BlueTicks", link: "/blueticks" },
  { id: 5, name: "Contact Us", link: "/contact-us" },
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

    url: "/our-work/#biglittlethings",
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

    url: "/our-work/#ezticks",
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
  {
    id: 12,
    title: "Ozelu Studio",
    url: "/our-work/#ozelu",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
  },
  {
    id: 13,
    title: "EZFUNDRAZR",
    url: "/our-work/#ezfundrazr",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
  },
  {
    id: 14,
    title: "Jenson Bike Shipping",
    url: "/our-work/#jensonbikeshipping",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
  },
  {
    id: 15,
    title: "The Transparency",
    url: "/our-work/#thetransparency",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
  },
  {
    id: 16,
    title: "Combine Marketing",
    url: "/our-work/#combinemarketing",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776296/RfTechnologiesWebsite/image_66_sxtpis.png",
  },
  {
    id: 17,
    title: "Hard Core Mattress",
    url: "/our-work/#hard",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776295/RfTechnologiesWebsite/image_68_w2qfee.png",
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
    link: "/our-work",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 5,
    name: "Faq's",
    link: "/faq",
  },
  {
    id: 6,
    name: "NDA",
    link: "/policies/nda",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 8,
    name: "Privacy Policy",
    link: "/policies/privacy-policy",
  },
  {
    id: 9,
    name: "Terms & Conditions",
    link: "/policies/terms-conditions",
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
      "<span class='text-secondary'>RF TECHNOLOGIES</span> We Provide answers. ",
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
    icon: <VscTerminalUbuntu className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
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

export const aboutTabs: Tabs[] = [
  {
    label: "Knowledge",
    content:
      "Knowledge is the foundation of innovation. At RF Technologies, we believe that true power lies in not just acquiring knowledge, but in delivering it precisely when and where it's needed. Our team of experts is dedicated to guiding our clients with the insights they need to excel. We don't just speak to everyone; we focus on our target audience, communicating in a way that resonates with them. This strategic approach sets us apart from the competition, allowing us to cut through the noise and deliver unparalleled value.",
    icon: <TbBulb className="lg:!w-24 lg:!h-24 !w-10 !h-10" />,
  },
  {
    label: "Promise",
    content:
      "Our commitment to our clients is unwavering. We make promises that we intend to keep, ensuring that every project we undertake is completed with the highest level of integrity and professionalism. At RF Technologies, a promise is more than just words; it's a bond of trust. We understand the importance of reliability in building long-lasting relationships, and we work tirelessly to uphold the trust our clients place in us.",
    icon: <PiHandshakeLight className="lg:!w-24 lg:!h-24 !w-10 !h-10" />,
  },
  {
    label: "Consistency",
    content:
      "Consistency is key to our success. At RF Technologies, we are committed to maintaining a high standard of quality across all our services. Whether it's our approach to problem-solving or our attention to detail, consistency is what ensures our clients receive the same level of excellence every time they work with us. This steadfast dedication to quality is what keeps us ahead in a competitive industry.",
    icon: <VscTerminalUbuntu className="lg:!w-24 lg:!h-24 !w-10 !h-10" />,
  },
  {
    label: "Authenticity",
    content:
      "Authenticity is at the heart of everything we do. We believe in being true to our values and transparent in our dealings. At RF Technologies, authenticity means staying genuine in our approach, whether it's in our communication with clients or the way we conduct our business. This honesty and openness are what build trust and foster strong, enduring partnerships.",
    icon: <BiCheckShield className="lg:!w-24 lg:!h-24 !w-10 !h-10" />,
  },
  {
    label: "Passion",
    content:
      "Passion drives us to go the extra mile. At RF Technologies, we are passionate about technology and its potential to transform businesses. This passion fuels our creativity and innovation, pushing us to deliver solutions that are not only effective but also inspiring. Our enthusiasm for what we do is evident in the results we achieve for our clients, making us a partner who is as invested in their success as they are.",
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
    topBgFirstClr: "#28292D",
    topBgSecondClr: "",
    bottomBgSecondClr: "#f85431",
    bottomBgFirstClr: "",
    imageFirst: true,
  },
  {
    id: 2,
    workId: "ezticks",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_62_ci28zj.png",
    title: "Eazyticks",
    text: "Online E-Ticketing Platform",
    subtitle: "Nextjs & Microsoft .Net",
    color: "#F85431",
    textColor: "#ffffff",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#f85431",
    bottomBgFirstClr: "#378C84",
    imageFirst: false,
  },
  {
    id: 3,
    workId: "ozelu",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
    title: "Ozelu Studio",
    text: "Traditional Photo Studio Services Online",
    subtitle: "Nextjs",
    color: "#378C84",
    textColor: "#FFFFFF",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#BFF1E9",
    bottomBgFirstClr: "#378C84",
    imageFirst: true,
  },
  {
    id: 4,
    workId: "ezfundrazr",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
    title: "EZFUNDRAZR",
    text: "FUNDRAISING MADE EASY",
    subtitle: "Microsoft.Net",
    color: "#BFF1E9",
    textColor: "#000000",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#BFF1E9",
    bottomBgFirstClr: "#00263A",
    imageFirst: false,
  },
  {
    id: 5,
    workId: "jensonbikeshipping",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
    title: "Jenson Bike Shipping",
    text: "The Most Convenient, Affordable Way to Ship Your Bike and Gear",
    subtitle: "Shopify, UPS API integration",
    color: "#00263A",
    textColor: "#ffffff",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#133561",
    bottomBgFirstClr: "#00263A",
    imageFirst: true,
  },
  {
    id: 6,
    workId: "thecoachcorner",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1742048278/Coach-Corner-Communication-Strategies-Platform-for-Coaches-Players-03-15-2025_07_09_PM_mlkots.png",
    title: "The Coach Corner",
    text: "Communication/Stratagies Platform for Players & Coaches",
    subtitle: "Next Js, Microsoft .Net Core",
    color: "#133561",
    textColor: "#FFFFFF",
    topBgFirstClr: "#133561",
    topBgSecondClr: "#133561",
    bottomBgSecondClr: "#133561",
    bottomBgFirstClr: "#932828",
    imageFirst: false,
    url: 'https://thecoachcorner.com/',
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
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#4EB4BA",
    bottomBgFirstClr: "#932828",
    imageFirst: true,
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
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#4EB4BA",
    bottomBgFirstClr: "#F4AE0F",
    imageFirst: false,
  },
  {
    id: 9,
    workId: "biglittlethings",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776297/RfTechnologiesWebsite/image_67_tqgzoz.png",
    title: "Big Little Things.",
    text: "WordPress E-commerce",
    subtitle: "",
    color: "#F4AE0F",
    textColor: "#ffffff",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#5089C6",
    bottomBgFirstClr: "#F4AE0F",
    imageFirst: true,
  },
  {
    id: 10,
    workId: "combinemarketing",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776296/RfTechnologiesWebsite/image_66_sxtpis.png",
    title: "Combine Marketing",
    text: "Find All Good Projects In One Place",
    subtitle: "WordPress Elementor",
    color: "#5089C6",
    textColor: "#ffffff",
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#5089C6",
    bottomBgFirstClr: "#FDF4E6",
    imageFirst: false,
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
    topBgFirstClr: "#f85431",
    topBgSecondClr: "#f85431",
    bottomBgSecondClr: "#e6e6e6",
    bottomBgFirstClr: "#FDF4E6",
    imageFirst: true,
  },
  {
    id: 12,
    title: "Wildflower",
    workId: "whildflower",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721997065/RfTechnologiesWebsite/wearewildflower-300x145.webp_sopxw0.webp",
    text: "We Specialize In Hard Foam Mattresses!",
    subtitle: "WordPress Elementor, Woocommerce",
    color: "#e6e6e6",
    textColor: "#28292D",
    topBgFirstClr: "#000",
    topBgSecondClr: "#000",
    bottomBgSecondClr: "#e6e6e6",
    bottomBgFirstClr: "#e6e6e6",
    imageFirst: true,
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
      "A JavaScript library for building user interfaces. React makes it easy to create interactive UIs by managing state efficiently.",
  },
  {
    id: 2,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402683/RfTechnologiesWebsite/Vector_3_mbvtlf.svg",
    title: "Laravel",
    description:
      "A PHP framework for web artisans, Laravel provides an elegant syntax and tools for building modern web applications.",
  },
  {
    id: 3,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_57_f3m3lj.svg",
    title: "ASP .NET",
    description:
      "A web framework developed by Microsoft, ASP.NET allows developers to build dynamic web sites, applications, and services.",
  },
  {
    id: 4,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402682/RfTechnologiesWebsite/pngwing.com_58_mkdbq4.svg",
    title: "Vue.js",
    description:
      "A progressive JavaScript framework, Vue.js is used for building user interfaces and single-page applications.",
  },
  {
    id: 5,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402678/RfTechnologiesWebsite/pngwing.com_60_xblbl8.svg",
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, Node.js allows for building scalable network applications.",
  },
  {
    id: 6,
    url: "/our-work",
    workId: "big",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_62_nmqazp.svg",
    title: "WordPress",
    description:
      "A popular content management system (CMS), WordPress is used for creating websites and blogs with ease.",
  },
  {
    id: 7,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_63_zlabdz.svg",
    title: "Shopify",
    description:
      "A leading e-commerce platform, Shopify enables businesses to create online stores and manage their sales and inventory.",
  },
  {
    id: 8,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402676/RfTechnologiesWebsite/pngwing.com_64_r2dpz2.svg",
    title: "WooCommerce",
    description:
      "A customizable, open-source e-commerce platform built on WordPress, WooCommerce is ideal for online businesses of all sizes.",
  },
  {
    id: 9,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402675/RfTechnologiesWebsite/pngwing.com_65_nb4rzf.svg",
    title: "UX/UI",
    description:
      "Focusing on the user's experience and interface design, UX/UI involves creating intuitive, aesthetically pleasing digital products.",
  },
  {
    id: 10,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402674/RfTechnologiesWebsite/pngwing.com_66_qofvpi.svg",
    title: "Flutter",
    description:
      "An open-source UI toolkit by Google, Flutter is used for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    id: 11,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/image_103_hjsnhq.svg",
    title: "SEO",
    description:
      "Search Engine Optimization (SEO) involves optimizing websites to rank higher in search engine results, driving more traffic.",
  },
  {
    id: 12,
    url: "/our-work",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721402673/RfTechnologiesWebsite/pngwing.com_67_mkn58v.svg",
    title: "PHP",
    description:
      "A widely-used open-source scripting language, PHP is especially suited for web development and can be embedded into HTML.",
  },
];

/* Home */
export const faq = [
  {
    id: 1,
    question: "What graphic design services do you offer?",
    answer:
      "We offer a full range of graphic design services, including brand identity design, logo creation, marketing materials, web graphics, and custom illustrations. Our goal is to provide cohesive and impactful visual solutions tailored to your needs.",
  },
  {
    id: 2,
    question: "How long does it take to complete a graphic design project?",
    answer:
      "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
  },
  {
    id: 3,
    question: "Can you help with redesigning an existing brand or logo?",
    answer:
      "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
  },
  {
    id: 4,
    question: "What is your process for working on a graphic design project?",
    answer:
      "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
  },
];

/*custom software Development */
export const customSoftwareDevelopmentServiceData = [
  {
    id: 1,
    title: "UX/UI Design & Prototype",
    content:
      "We craft intuitive and visually engaging designs, creating prototypes that ensure a seamless user experience before development.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721477113/RfTechnologiesWebsite/Mask_group_m099ft.svg",
  },
  {
    id: 2,
    title: "Software Consulting Services",
    content:
      "We provide expert guidance to optimize your software strategy, ensuring tailored solutions that align with your business goals and technical requirements.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 3,
    title: "Custom Mobile App Development",
    content:
      "We develop bespoke mobile applications tailored to your specific needs, delivering innovative solutions for both iOS and Android platforms.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638917/RfTechnologiesWebsite/Mask_group_6_ajs3qa.svg",
  },
  {
    id: 4,
    title: "Custom Web Development",
    content:
      "We build tailor-made web solutions that meet your unique requirements, ensuring a seamless, scalable, and engaging online experience.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487828/Mask_group_4_vn0iha.svg",
  },
  {
    id: 5,
    title: "Legacy App Upgradation",
    content:
      "We modernize outdated applications with the latest technologies and features, enhancing performance and ensuring compatibility with current systems.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487832/Mask_group_2_cyrs1o.svg",
  },
  {
    id: 6,
    title: "Enterprise App Development",
    content:
      "We create robust, scalable applications designed to streamline operations, improve efficiency, and meet the complex needs of large organizations.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487834/Mask_group_1_bnef0w.svg",
  },
  {
    id: 7,
    title: "Custom CRM Development",
    content:
      "We design and build tailored CRM systems that enhance customer relationship management, streamline processes, and drive business growth.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487835/Mask_group_jelked.svg",
  },
  {
    id: 8,
    title: "MVP Development",
    content:
      "We develop Minimum Viable Products (MVPs) to validate your ideas with essential features, enabling quick market entry and iterative improvements.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638947/RfTechnologiesWebsite/Mask_group_7_kkk7xr.svg",
  },
];
/*end Custom software Development */

/* WordPress Development */
export const wordPressServiceData = [
  {
    id: 1,
    title: "WordPress API Integration Services",
    content:
      "We integrate API to the WordPress website to improve the website experience and get more from the site.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642883/RfTechnologiesWebsite/Mask_group_xf3txy.svg",
  },
  {
    id: 2,
    title: "Theme Development Services",
    content:
      "Get Your Website More interactive fully functional and responsive with our best theme development experts.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_2_ws5unm.svg",
  },
  {
    id: 3,
    title: "Custom WordPress Development",
    content:
      "We Provide The Best Custom WordPress development solution to improve the user experience.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642882/RfTechnologiesWebsite/Mask_group_1_zwcjkj.svg",
  },
  {
    id: 4,
    title: "WooCommerce Development Services",
    content:
      "Easily convert your site into an e-commerce site with the help of our WooCommerce development service.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 5,
    title: "WordPress Migration Service",
    content:
      "Our Experts will take smooth and secure migration of your site and ensure no loss of data and the website stay functional.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_3_j14sxn.svg",
  },
  {
    id: 6,
    title: "WordPress SEO Service",
    content:
      "Increase your Google ranking and Potential Organic traffic with our best search engine optimization efforts and strategies.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_5_swkmsx.svg",
  },
  {
    id: 7,
    title: "PSD to WordPress",
    content:
      "We convert your PSD file to pixel-perfect, fully responsive, and faultless sites.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 8,
    title: "WordPress Speed Optimization Services",
    content:
      "We make your site fast and highly optimized, which improves user engagement and conversion rate.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_7_qakhfb.svg",
  },
  {
    id: 9,
    title: "Maintenance And Support",
    content:
      "Our Team will Take care of your website and take it bug-free, fixing all flaws and glitches.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_8_ahomn6.svg",
  },
];

export const wordpressCardText = [
  {
    title: "why choose us<span class='text-secondary'>?</span>",
    description: `At RF Tech, we create standout WordPress sites with top-notch design and functionality. Our expert team ensures your website performs seamlessly and meets your business goals.<br/><br/>We also offer ongoing support and optimization, ensuring your site remains effective and up-to-date. Partner with us for personalized service and a commitment to your success.`,
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
    description: `We migrate your Shopify Store to a flexible, stunning  WordPress e-commerce store.<br/><br/>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, which is why we work with you.
`,
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
    question: "What is included in your WordPress development services?",
    answer:
      "Our WordPress development services include custom theme design, plugin integration, site optimization, and responsive design. We also offer ongoing support and maintenance to ensure your site runs smoothly.",
  },
  {
    id: 2,
    question: "How long does it take to develop a WordPress site?",
    answer:
      "The timeline for developing a WordPress site varies based on complexity and requirements. Typically, a standard site can be completed in a few weeks. We provide a detailed timeline after discussing your specific needs.",
  },
  {
    id: 3,
    question: "Can you redesign an existing WordPress site?",
    answer:
      "Yes, we can revamp your existing WordPress site to improve design, functionality, and performance. Our team will work with you to update and enhance your site according to your vision and goals.",
  },
  {
    id: 4,
    question: "Do you provide support and maintenance after the site is live?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your WordPress site stays secure, updated, and fully functional. Our team is available for any updates, troubleshooting, or enhancements you may need.",
  },
];

/* End WordPress Development */

export const madFaqs = [
  {
    id: 1,
    question: "What mobile app development services do you offer?",
    answer:
      "We provide end-to-end mobile app development services, including custom design, development, integration, testing, deployment, and ongoing maintenance for both iOS and Android platforms.",
  },
  {
    id: 2,
    question: "How long does it take to develop a mobile app?",
    answer:
      "The timeline for mobile app development varies based on the project's complexity and requirements. Generally, it can take anywhere from a few weeks to several months. We will provide a detailed timeline after understanding your specific needs.",
  },
  {
    id: 3,
    question: "Why choose RF Technologies mobile app development services?",
    answer:
      "Our team’s great experience ensures high productivity and efficiency. we always keep track of the best market solutions to deliver our best strategy and offer top-class mobile application development services. We will also provide support, maintenance, and updates for your app for its continued success and growth.",
  },
  {
    id: 4,
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive post-launch support and maintenance services to ensure your app remains up-to-date, secure, and fully functional. Our team is always available to assist with updates, troubleshooting, and new feature additions.",
  },
];

export const crmFaqs = [
  {
    id: 1,
    question: "How does CRM software enhance customer relationships?",
    answer:
      "CRM software enhances customer relationships by providing a detailed view of interactions, preferences, and history. This allows you to personalize communication and offer tailored services, improving customer satisfaction and loyalty.",
  },
  {
    id: 2,
    question: "Can CRM software help increase sales?",
    answer:
      "Yes, CRM software boosts sales by streamlining lead management, automating follow-ups, and tracking sales activities. These features help improve conversion rates, optimize sales processes, and ultimately increase revenue.",
  },
  {
    id: 3,
    question: "What types of data can CRM software analyze?",
    answer:
      "CRM software can analyze various types of data, including customer interactions, sales performance, marketing campaign results, and customer feedback. This data helps you identify trends, make informed decisions, and refine your strategies.",
  },
  {
    id: 4,
    question: "How does CRM software improve customer service?",
    answer:
      "CRM software improves customer service by providing quick access to customer information, facilitating timely responses, and streamlining issue resolution. This results in more efficient support and a better overall customer experience.",
  },
];
export const csdFaqs = [
  {
    id: 1,
    question: "What is custom software development?",
    answer:
      "Custom software development involves creating tailor-made software solutions designed to meet your specific business needs and objectives. Unlike off-the-shelf solutions, custom software is built from scratch to address unique challenges and requirements.",
  },
  {
    id: 2,
    question: "How do you ensure the software aligns with my business goals?",
    answer:
      "We start by thoroughly understanding your business needs and objectives through detailed consultations. Our team works closely with you throughout the development process to ensure the final product aligns with your goals and delivers the desired outcomes.",
  },
  {
    id: 3,
    question: "What is the typical timeline for a custom software project?",
    answer:
      "The timeline for custom software development varies depending on the complexity and scope of the project. On average, it can range from a few months to over a year. We provide a detailed project timeline after assessing your specific requirements.",
  },
  {
    id: 4,
    question:
      "Do you offer support and maintenance after the software is delivered?",
    answer:
      "Yes, we provide comprehensive post-launch support and maintenance to ensure your software remains up-to-date, secure, and fully functional. Our team is available to handle any issues, updates, or enhancements as needed.",
  },
];

/* woocomemrce development */

export const wooCommerceKeyFeatures = [
  {
    id: 1,
    bgColor: "#0037B1",
    title: "Open-Source Platform",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648544/RfTechnologiesWebsite/Mask_group_14_x8cunu.svg",
    details:
      "WooCommerce is an open-source platform, providing you with complete control over your online store. This flexibility allows you to customize every aspect of your site to meet your specific business needs.",
  },
  {
    id: 2,
    title: "Easy to Setup",
    bgColor: "#C90764",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729010/RfTechnologiesWebsite/Mask_group_31_ka6ncj.svg",
    details:
      "WooCommerce is designed for easy setup, allowing you to quickly launch your online store with a user-friendly interface and step-by-step guidance, even if you have limited technical expertise.",
  },
  {
    id: 3,
    title: "Offer Payments & Shipping",
    bgColor: "#01AB78",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729053/RfTechnologiesWebsite/Mask_group_32_vwcaes.svg",
    details:
      "WooCommerce integrates with various payment gateways and shipping carriers, providing your customers with flexible payment options and real-time shipping rates for a seamless shopping experience.",
  },
  {
    id: 4,
    title: "Manage Orders On the Go",
    bgColor: "#D09703",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729106/RfTechnologiesWebsite/Mask_group_33_shpkdh.svg",
    details:
      "With the WooCommerce mobile app, you can manage orders, track sales, and stay updated on your store's performance from anywhere, ensuring you never miss a beat.",
  },
  {
    id: 5,
    title: "Sell Anything",
    bgColor: "#710583",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729147/RfTechnologiesWebsite/Mask_group_34_khsfqk.svg",
    details:
      "WooCommerce supports a wide range of product types, from physical goods to digital downloads and subscriptions, giving you the flexibility to sell virtually any product or service.",
  },
  {
    id: 6,
    title: "Extensions Store",
    bgColor: "#F17812",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721729190/RfTechnologiesWebsite/Mask_group_35_id3ako.svg",
    details:
      "WooCommerce’s Extensions Store offers a vast selection of plugins and add-ons, allowing you to enhance your store’s functionality with additional features like advanced analytics, marketing tools, and more.",
  },
];
export const woocomemrceServiceData = [
  {
    id: 1,
    title: "WooCommerce Consultation",
    content:
      "We provide expert WooCommerce consultation to help you plan, design, and implement an effective e-commerce strategy tailored to your business needs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 2,
    title: "WooCommerce Design",
    content:
      "Our experts build a Woo-Commerce store that is unique, effective, engaging and works faultlessly on any device.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647257/RfTechnologiesWebsite/Mask_group_9_mu6pnf.svg",
  },
  {
    id: 3,
    title: "WooCommerce Development",
    content:
      "We develop the entire Woo-Commerce store for you focusing on your success and business growth.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647291/RfTechnologiesWebsite/Mask_group_10_r09khi.svg",
  },
  {
    id: 4,
    title: "WooCommerce Integrations",
    content:
      "Increase your Store power and efficiency with the best Woo-Commerce Integrations.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 5,
    title: "WooCommerce Configuration",
    content:
      "We expertly configure WooCommerce settings to optimize your online store’s performance, ensuring a seamless and efficient shopping experience for your customers.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647342/RfTechnologiesWebsite/Mask_group_12_kcarut.svg",
  },
  {
    id: 6,
    title: "WooCommerce Migration",
    content:
      "We manage the seamless migration of your existing e-commerce store to WooCommerce, ensuring data integrity and minimal downtime during the transition.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 7,
    title: "WooCommerce Extensions",
    content:
      "We integrate and customize WooCommerce extensions to enhance your store's functionality, providing advanced features and tailored solutions to meet your unique business needs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
];

export const woocomemrceCardText = [
  {
    title: "why choose us<span class='text-secondary'>?</span>",
    description:
      "At RF Tech, we deliver tailored WooCommerce solutions that elevate your online store's performance and functionality. Our expert team ensures a seamless setup, customization, and optimization, making your e-commerce vision a reality.<br/><br/>We offer dedicated support and ongoing enhancements to keep your store competitive and efficient. Choose us to experience exceptional service and a commitment to driving your e-commerce success.",
    btnLink: "/about-us ",
    btnTitle: "about us",
    enableImageLeft: true,
    enableImageRight: false,
    cards: [
      {
        icon: <TbVirusSearch className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Effective",
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
    question: "What is included in your WooCommerce development services?",
    answer:
      "Our WooCommerce development services include custom theme design, configuration, extension integration, migration, and ongoing support. We ensure your online store is optimized for performance and meets your specific business needs.",
  },
  {
    id: 2,
    question: "How long does it take to develop a WooCommerce store?",
    answer:
      "The timeline for developing a WooCommerce store depends on the complexity and requirements of your project. Typically, it ranges from a few weeks to a couple of months. We provide a detailed timeline after discussing your specific needs.",
  },
  {
    id: 3,
    question: "Can you help with migrating my existing store to WooCommerce?",
    answer:
      "Yes, we handle the complete migration of your existing e-commerce store to WooCommerce, ensuring data integrity and minimal disruption. Our team manages the transfer of products, orders, and customer data for a smooth transition.",
  },
  {
    id: 4,
    question:
      "What kind of support do you offer after my WooCommerce store is live?",
    answer:
      "We offer comprehensive post-launch support, including troubleshooting, updates, and enhancements. Our team is available to assist with any issues and provide ongoing maintenance to ensure your store continues to run smoothly.",
  },
];
export const seoFaqs = [
  {
    id: 1,
    question: "What SEO services do you offer?",
    answer:
      "We provide a comprehensive range of SEO services, including keyword research, on-page optimization, technical SEO, content creation, link building, and performance tracking, all tailored to enhance your online visibility and drive traffic.",
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy, and results typically start to become visible within 3 to 6 months. However, the timeline can vary depending on your industry, competition, and the current state of your website.",
  },
  {
    id: 3,
    question: "Do you offer ongoing SEO support?",
    answer:
      "Yes, we offer ongoing SEO support and maintenance to continuously optimize your site, adapt to changes in search algorithms, and refine strategies based on performance metrics.",
  },
  {
    id: 4,
    question: "How do you measure the success of an SEO campaign?",
    answer:
      "We measure the success of an SEO campaign through various metrics, including organic traffic, search engine rankings, conversion rates, and overall engagement. Regular reports and analytics provide insights into your campaign's performance and effectiveness.",
  },
];
/* end woocommerce */

/* website design and development */
export const websiteServiceData = [
  {
    id: 1,
    title: "Ecommerce",
    content:
      "We design and develop high-performance e-commerce websites that provide seamless shopping experiences and drive online sales.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648706/RfTechnologiesWebsite/Mask_group_17_nd3l9k.svg",
  },
  {
    id: 2,
    title: "SEO",
    content:
      "We implement effective SEO strategies to optimize your website, improve search engine rankings, and increase organic traffic to drive more qualified leads.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648676/RfTechnologiesWebsite/Mask_group_16_vgjjim.svg",
  },
  {
    id: 3,
    title: "Development",
    content:
      "We create custom, scalable web solutions tailored to your needs, ensuring robust functionality and a seamless user experience across all devices.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647291/RfTechnologiesWebsite/Mask_group_10_r09khi.svg",
  },
  {
    id: 4,
    title: "Web Design",
    content:
      "We craft visually stunning and user-friendly websites that enhance your brand’s identity and engage visitors with intuitive navigation and responsive design.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648596/RfTechnologiesWebsite/Mask_group_15_bgalcf.svg",
  },
  {
    id: 5,
    title: "Open Source Platform",
    content:
      "We leverage open source platforms to build flexible and cost-effective web solutions, providing you with full control and customization to meet your specific needs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648544/RfTechnologiesWebsite/Mask_group_14_x8cunu.svg",
  },
  {
    id: 6,
    title: "CRM",
    content:
      "We integrate CRM systems into your website to streamline customer management, enhance communication, and improve overall efficiency in handling client relationships.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 7,
    title: "Integration",
    content:
      "We seamlessly integrate your website with various tools and platforms, ensuring smooth data flow and enhancing functionality for a cohesive digital experience.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 7,
    title: "Maintenance",
    content:
      "We provide ongoing website maintenance to ensure optimal performance, security updates, and timely troubleshooting, keeping your site running smoothly and efficiently.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642875/RfTechnologiesWebsite/Mask_group_8_ahomn6.svg",
  },
];

export const websiteImageWithText = [
  {
    title: "Great websites grow your business over time",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721649228/RfTechnologiesWebsite/Group_1597883924_lbomti.png",
    description: `We excel in crafting dynamic websites that blend stunning design with top-notch functionality, tailored to meet your business goals. Our focus is on delivering exceptional user experiences and impactful results.<br/><br/> Our team specializes in custom web solutions, ensuring seamless integration, robust performance, and responsive design for optimal results in a competitive market.`,
    btnLink: "/contact-us",
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
    question: "What is included in your web design and development services?",
    answer:
      "Our services encompass everything from initial design concepts to full website development, including responsive design, front-end and back-end development, e-commerce solutions, and ongoing maintenance.",
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website varies depending on its complexity and requirements. Typically, it ranges from a few weeks to a few months. We provide a detailed timeline based on your specific project needs.",
  },
  {
    id: 3,
    question: "Do you offer ongoing website maintenance and support?",
    answer:
      "Yes, we offer comprehensive website maintenance and support services to ensure your site remains secure, up-to-date, and fully functional. This includes regular updates, performance monitoring, and troubleshooting.",
  },
  {
    id: 4,
    question: "Can you help with integrating third-party tools and systems?",
    answer:
      "Absolutely. We specialize in integrating your website with various third-party tools and systems, such as CRM platforms, payment gateways, and marketing automation systems, to enhance functionality and streamline operations.",
  },
];

/* end website desing and development */

/* Digital Marketing */
export const digitalServiceData = [
  {
    id: 1,
    title: "Social Media Marketing",
    content:
      "Boost your sale and revenue with our social media marketing skills which use the latest trends and technology.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651687/RfTechnologiesWebsite/Mask_group_18_kayl71.svg",
  },
  {
    id: 2,
    title: "Email Marketing",
    content:
      "Email marketing helps you to send customized messages, offer discount codes, and campaigns that increase customer lifetime value (CLV).",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651713/RfTechnologiesWebsite/Mask_group_19_otzj8i.svg",
  },
  {
    id: 3,
    title: "Pay Per Click (ad)",
    content:
      "Get an effective PPC strategy that increases potential traffic and the power of your business and drives the revenue.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651747/RfTechnologiesWebsite/Mask_group_20_w2h9oo.svg",
  },
  {
    id: 4,
    title: "Content Marketing",
    content:
      "our content marketing strategy helps you to reach your target audience and provide quality information and increase brand impression.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651809/RfTechnologiesWebsite/Mask_group_22_vgivjd.svg",
  },
  {
    id: 5,
    title: "SEO",
    content:
      "Search Engine Optimization helps you to increase your google ranking and organic traffic which is a necessary part of a growing business.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721648676/RfTechnologiesWebsite/Mask_group_16_vgjjim.svg",
  },
  {
    id: 6,
    title: "Conversion Rate Optimization",
    content:
      "With our experienced performance increase your monthly revenue and business area with the best marketing strategies.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651779/RfTechnologiesWebsite/Mask_group_21_wx4rgo.svg",
  },
];

export const socialAnalysisImageWithText = [
  {
    title: "Social Analysts and Strategists",
    image:
      "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721651869/RfTechnologiesWebsite/Group_1597883924_1_oow9q4.png",
    description: `We understand your business needs and keep in mind the core element of all our campaigns. We make fasten strategies and run campaigns to fulfill your business needs.<br/><br/>We analyze analytics to refine our strategies and help you become a market leader. Our expert team crafts innovative strategies to improve your product and drive results. By embracing new technologies and tactics, we ensure continuous improvement and enhanced marketing outcomes.`,
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
      "We are passionate about delivering exceptional results. Our marketing experts develop tailored strategies to ensure high-class outcomes and drive significant revenue growth for our clients.<br/><br/>With a commitment to excellence, we employ innovative techniques and data-driven approaches to achieve optimal performance. Our goal is to provide impactful solutions that elevate your brand and maximize your success.",
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
    question: "What digital marketing services do you offer?",
    answer:
      "We provide a comprehensive range of digital marketing services, including SEO, PPC advertising, content marketing, social media marketing, email marketing, and analytics. Each service is tailored to drive growth and achieve your specific business goals.",
  },
  {
    id: 2,
    question:
      "How do you develop a digital marketing strategy for my business?",
    answer:
      "We develop customized digital marketing strategies by analyzing your business objectives, target audience, and market trends. Our team conducts thorough research to create a strategy that aligns with your goals and maximizes your marketing impact.",
  },
  {
    id: 4,
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, ROI, and engagement metrics. Detailed reports and analytics provide insights into campaign performance and help refine strategies for better results.",
  },
  {
    id: 5,
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline for seeing results can vary depending on the strategy and goals. Generally, SEO and content marketing may take a few months to show significant impact, while PPC and social media campaigns can yield faster results. We provide regular updates and performance reviews to track progress.",
  },
];

export const digitalMarketingCardText = [
  {
    title: "Change the Way You See Social",
    description:
      "Digital Marketing helps to increase your customers and potential views of your business which increases your business revenue.",
    btnLink: "/about-us ",
    btnTitle: "Social Media Strategy",
    enableImageLeft: true,
    enableImageRight: false,
    childern: "this is child",
    cards: [
      {
        icon: <TbVirusSearch className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "My Blogs",
      },
      {
        icon: <TbSettingsPause className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "My Podcasts",
      },
      {
        icon: (
          <PiProjectorScreenChart className="text-[80px] max-sm:text-[40px]" />
        ),
        cardTitle: "My Videos",
      },
      {
        icon: <BsKanban className="text-[80px] max-sm:text-[40px]" />,
        cardTitle: "Social Media",
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
    content:
      "Our Local SEO services will make you seen by thousands of local customers and beat your competitors.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662845/RfTechnologiesWebsite/Mask_group_23_tx8sdx.svg",
  },
  {
    id: 2,
    title: "On-Page Optimization",
    content:
      "Our On-Page Optimization service helps your individual page to rank higher organically for a specific keyword or multiple keywords.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662845/RfTechnologiesWebsite/Mask_group_24_wf44ci.svg",
  },
  {
    id: 3,
    title: "Technical SEO",
    content:
      "Get your website healthy and properly managed and indexed and rich snippet applicable without any technical issues.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_25_sfg0dc.svg",
  },
  {
    id: 4,
    title: "Speed Optimization",
    content:
      "With our speed optimization service get your web pages fast and speedy on all desktop and mobile devices.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_26_rg2tz8.svg",
  },
  {
    id: 5,
    title: "Keyword Research",
    content:
      "Get the most reliable and less difficult keyword which ranks easily and grows your web page's potential and organic traffic.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662843/RfTechnologiesWebsite/Mask_group_27_fpdmpo.svg",
  },
  {
    id: 6,
    title: "Content Creation",
    content:
      "We provide better quality content for your site that targets the right keywords, attracts visitors, and keeps users engaged with your site.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662843/RfTechnologiesWebsite/Mask_group_28_lazqu5.svg",
  },
  {
    id: 7,
    title: "E-commerce SEO",
    content:
      "E-commerce SEO helps brands attract potential customers and set the stage for increased conversion rates. We take care of technical issues and optimize descriptions and titles.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721662844/RfTechnologiesWebsite/Mask_group_29_bzuvyx.svg",
  },
  {
    id: 8,
    title: "SEO Consulting",
    content:
      "Get a better consultant from your well-experienced SEO analyst which has good marketing and business experience.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 9,
    title: "Analysis and Reporting",
    content:
      "Get a proper analysis and reporting of your all web pages, URLs, keywords and viewers, and conversion rates.s",
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
    title: "Packaging Design",
    content:
      "Whether, it is a pouch or a box requiring design tactics, a pouch, sachets, or a bag with a simple design, we can bring life to your products with our best creative design skills.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721477113/RfTechnologiesWebsite/Mask_group_m099ft.svg",
  },
  {
    id: 2,
    title: "Label Design",
    content:
      "Our experienced designer gives creative designs for all types of labels including full wrap-around labels as well as front and back labels with different 2D or 3D Designs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 3,
    title: "Banners Design",
    content:
      "Creative web banners for driving more organic traffic or for display banners and hoardings, get awesome designs with our great skills.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638917/RfTechnologiesWebsite/Mask_group_6_ajs3qa.svg",
  },
  {
    id: 4,
    title: "Web Design",
    content:
      "We can also design a perfect layout for your website that will sit well with your brand and be user-friendly. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487828/Mask_group_4_vn0iha.svg",
  },
  {
    id: 5,
    title: "Logo and Branding Design",
    content:
      "Your logo is the unique identity of your business or brand. Logo designs need to eye-catching impact on business insight perfectly.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487832/Mask_group_2_cyrs1o.svg",
  },
  {
    id: 6,
    title: "Products and Catalogs",
    content:
      "Get a creative and effective design for your product catalogs. it might need animated GIFs, 2D designs, or 3D Designs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487834/Mask_group_1_bnef0w.svg",
  },
  {
    id: 7,
    title: "Front-end and UX/UI Design",
    content:
      "Front-End and UI/UX design services include gaming apps, e-commerce apps, delivery apps, educational apps, and business service app designs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721487835/Mask_group_jelked.svg",
  },
  {
    id: 8,
    title: "Social Media Design",
    content:
      "Make impactful social media profiles, campaigns, and ads customized and personalized through our social media design expertise.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638947/RfTechnologiesWebsite/Mask_group_7_kkk7xr.svg",
  },
  {
    id: 9,
    title: "InfoGraphics",
    content:
      "Get the best layouts, color schemes, icons, and fonts that make a strong attractive impact on your landing pages, brochure, or product guides.",
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
    content:
      "We offer expert guidance to help you select and implement the right CRM system, optimizing your processes and enhancing customer relationships.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721638848/RfTechnologiesWebsite/Mask_group_5_dstriz.svg",
  },
  {
    id: 2,
    title: "CRM Solution Development",
    content:
      "We design and develop customized CRM solutions tailored to your specific business needs, streamlining operations and improving customer management.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721737918/RfTechnologiesWebsite/Mask_group_36_gyikae.svg",
  },
  {
    id: 3,
    title: "CRM Implementation",
    content:
      "We ensure a smooth and effective deployment of your CRM system, handling integration, data migration, and user training for optimal performance.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647342/RfTechnologiesWebsite/Mask_group_12_kcarut.svg",
  },
  {
    id: 4,
    title: "Mobile CRM Solutions",
    content:
      "We create mobile-optimized CRM applications that provide seamless access and management of customer data from any device, enhancing flexibility and productivity. ",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721737960/RfTechnologiesWebsite/Mask_group_37_oogaqw.svg",
  },
  {
    id: 5,
    title: "CRM Integration",
    content:
      "We integrate your CRM system with existing tools and platforms, ensuring seamless data flow and unified operations across your business.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721647317/RfTechnologiesWebsite/Mask_group_11_zby2m5.svg",
  },
  {
    id: 6,
    title: "CRM Migration",
    content:
      "We manage the secure and efficient transfer of your CRM data to a new system, ensuring minimal disruption and preserving data integrity.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642877/RfTechnologiesWebsite/Mask_group_4_suj206.svg",
  },
  {
    id: 7,
    title: "CRM Platform Customization",
    content:
      "We tailor CRM platforms to fit your unique business processes, enhancing functionality and user experience to meet your specific needs.",
    icon: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721642876/RfTechnologiesWebsite/Mask_group_6_fnjjdx.svg",
  },
  {
    id: 8,
    title: "CRM Software Maintenance",
    content:
      "We provide ongoing maintenance to ensure your CRM software remains up-to-date, secure, and fully functional, addressing any issues promptly.",
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
      "CRM software provides deep insights into customer behavior, preferences, and interactions, enabling you to better understand their needs and tailor your strategies for more personalized and effective engagement.",
  },
  {
    id: 2,
    title: "Boost Sales",
    bgColor: "#C90764",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738285/RfTechnologiesWebsite/Mask_group_39_b5btme.svg",
    details:
      "CRM software enhances your sales efforts by streamlining lead management, tracking sales activities, and automating follow-ups, ultimately driving higher conversion rates and increased revenue.",
  },
  {
    id: 3,
    title: "Improve Communication",
    bgColor: "#01AB78",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738319/RfTechnologiesWebsite/Mask_group_40_kyr5os.svg",
    details:
      "CRM software centralizes customer interactions and provides tools for streamlined communication, ensuring timely and effective exchanges between your team and customers for enhanced relationship management.",
  },
  {
    id: 4,
    title: "Make Data-Driven Decisions",
    bgColor: "#D09703",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738349/RfTechnologiesWebsite/Mask_group_41_thfnjv.svg",
    details:
      "CRM software offers powerful analytics and reporting tools that provide valuable insights into customer trends and business performance, enabling you to make informed, strategic decisions for better outcomes.",
  },
  {
    id: 5,
    title: "Enhance Customer Service",
    bgColor: "#710583",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738382/RfTechnologiesWebsite/Mask_group_42_j5fxq0.svg",
    details:
      "CRM software improves customer service by providing quick access to customer history, enabling prompt responses and personalized support, and streamlining issue resolution for a superior customer experience.",
  },
  {
    id: 6,
    title: "Automate Everyday Tasks",
    bgColor: "#F17812",
    src: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721738407/RfTechnologiesWebsite/Mask_group_43_popba4.svg",
    details:
      "CRM software automates routine tasks such as data entry, follow-up reminders, and workflow management, freeing up your team’s time to focus on more strategic activities and improving overall productivity.",
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
    answer:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 6,
    question: "Porem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
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
      "Partnering with experts gives you access to specialized knowledge and tailored strategies designed to drive your success. You gain a strategic ally committed to achieving your goals and overcoming challenges.<br/><br/>A strong partnership offers more than just services; it provides enhanced support and streamlined processes, ensuring measurable results and long-term growth.",
    btnLink: "",
    btnTitle: "",
    ctaLink: "",
    ctaTitle: "",
    imageFirst: false,
    enableImageleft: true,
    enableImageCenter: false,
    enableImageRight: false,
  },
];

export const becomePartnersTabs: Tabs[] = [
  {
    label: "Our Priorities",
    content:
      "Our priority is to build partnerships grounded in trust, collaboration, and a shared vision for success. By aligning our expertise with your business goals, we craft synergistic solutions that deliver exceptional results and foster long-term growth. Together, we transform challenges into opportunities, achieving extraordinary outcomes.",
    icon: <TbBulb className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Beginners Partnership",
    content:
      "Starting a partnership with RF Technologies means entering into a world of guidance and growth. We understand that the beginning of any partnership requires careful nurturing. We provide tailored support and strategic insights to ensure that even those new to collaboration with us find a clear path to success. Our approach is focused on meeting the unique needs of beginners, ensuring they feel confident and supported every step of the way.",
    icon: <PiHandshakeLight className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Modified Developers",
    content:
      "At RF Technologies, we continuously evolve our development practices to stay ahead of the curve. Our team of modified developers is equipped with the latest tools and methodologies, enabling us to offer innovative solutions tailored to your specific needs. By choosing us, you partner with a team that is not only skilled but also adaptable, ensuring that your projects benefit from cutting-edge techniques and forward-thinking strategies.",
    icon: <VscTerminalUbuntu className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "Trustworthy Companionship",
    content:
      "Trust is the cornerstone of every successful partnership. At RF Technologies, we pride ourselves on being reliable partners who stand by our commitments. Our trustworthy companionship means that you can count on us to deliver what we promise, when we promise. We build relationships based on integrity and mutual respect, ensuring that your experience with us is both positive and productive.",
    icon: <BiCheckShield className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
  {
    label: "24/7 Availability",
    content:
      "In today's fast-paced world, availability is crucial. That's why we offer round-the-clock support to our partners. Whether you need assistance during the day or in the middle of the night, our team is always ready to help. This 24/7 availability ensures that your business runs smoothly without any interruptions, giving you the peace of mind that we're always here when you need us.",
    icon: <SiFireship className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
  },
];

/* end become a password */

//  Benefits Section data here............
export const shopifyBenefits = [
  {
    id: 1,
    title: "Hosted Solution",
    content: `Shopify is a cloud-based setup and hosted solution where you no
                need to worry about servers or databases. You can access your
                store from anywhere with admin login details & an internet
                connection without any setup.`,
    bgClr: "#F8E0E0",
    titleClr: "#CC3232",
  },
  {
    id: 2,
    title: "Security, and Reliability",
    content: `Shopify Offers the Best Services In terms of Security and
                provides the best data protection.`,
    bgClr: "#CAEBFF",
    titleClr: "#1270AA",
  },
  {
    id: 3,
    title: "SEO Friendly",
    content: `Shopify has the Best built-in SEO Features that are easy to use
                and the best to rank higher on the SERPs.`,
    bgClr: "#bbf7d0",
    titleClr: "#0E975E",
  },
  {
    id: 4,
    title: "Built-In Marketing Tools",
    content: `Shopify has built-in marketing tools which make it lower the
                cast on start-ups. It allows us to edit page meta title, meta
                description, meta URL, make pages visible and invisible, and
                redirect to any URL.`,
    bgClr: "#F9D1F0",
    titleClr: "#B7419B",
  },
];

export const wordPressBenefits = [
  {
    id: 1,
    title: "User-friendly Content Management",
    content: `WordPress provides easy features for quick editing and a good user experience.`,
    bgClr: "#F8E0E0",
    titleClr: "#CC3232",
  },
  {
    id: 2,
    title: "Plugins and Integrations",
    content: `WordPress is compatible with plug-ins that provide advanced functions and complete your needs completely.`,
    bgClr: "#CAEBFF",
    titleClr: "#1270AA",
  },
  {
    id: 3,
    title: "Flexible and Customizable Design",
    content: `WordPress provides a very easy drag and drop functionality to customize your site for a better experience.`,
    bgClr: "#BCF2DB",
    titleClr: "#0E975E",
  },
  {
    id: 4,
    title: "WordPress Community",
    content: `WordPress provides a very easy drag and drop functionality to customize your site for a better experience.`,
    bgClr: "#F9D1F0",
    titleClr: "#B7419B",
  },
];
