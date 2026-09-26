import IconApplicationDev from "@/components/Icons/IconApplicationDev";
import IconCircle from "@/components/Icons/IconCircle";
import IconCrm from "@/components/Icons/IconCrm";
import IconCustomSoftDev from "@/components/Icons/IconCustomSoftDev";
import IconDigitalMarketing from "@/components/Icons/IconDigitalMarketing";
import IconGrapic from "@/components/Icons/IconGrapic";
import IconSeo from "@/components/Icons/IconSeo";
import IconShopify from "@/components/Icons/IconShopify";
import IconWebDev from "@/components/Icons/IconWebDev";
import IconWoocommerce from "@/components/Icons/IconWoocommerce";
import IconWordpress from "@/components/Icons/IconWordpress";

interface BannerItem {
  id: number;
  title: string;
  url: string;
  description: string;
  image: string;
}

interface ServiceCard {
  id: number;
  icon: React.ReactElement;
  iconBg?: string;
  title: string;
  content: string;
  btnText: string;
  btnLink: string;
}

interface OurServices {
  roundCta: string;
  title: string;
  content: string;
  btnText: string;
  btnLink: string;
  cards: ServiceCard[];
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface HomeContent {
  banner: BannerItem[];
  ourServices: OurServices;
  faqs: Faq[];
}

const homeContent: HomeContent = {
  banner: [
    {
      id: 1,
      title:
        "A BUSINESS PARTNER FOR <span class='text-secondary'>CHANGE THAT LASTS</span>",
      url: "/contact-us",
      description:
        "For growing businesses facing operational bottlenecks or customer-growth challenges. One accountable partner aligns the right strategy, delivery, and ongoing support, trusted by 200+ clients.",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722243811/RfTechnologiesWebsite/Desktop_-_9_lcv48g.png",
    },
    {
      id: 2,
      title: "YOUR BUSINESS GOALS, <span class='text-secondary'>FIRST</span>",
      url: "/contact-us",
      description:
        "We help growing teams solve real business challenges with practical digital solutions, from the first conversation through launch and continued improvement.",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png",
    },
  ],
  ourServices: {
    roundCta: "BUSINESS CHALLENGES",
    title: "Solve the business problem behind the brief",
    content: `From attracting customers and improving digital experiences to removing operational friction, we match the right service to the work in front of you. Our team can deliver one focused improvement or support connected needs across your business.
`,
    btnText: "Discuss Your Priorities",
    btnLink: "/contact-us",
    cards: [
      {
        id: 1,
        iconBg: "#FFF6EE",
        icon: <IconApplicationDev classes="w-16 h-16" />,
        title: "Help customers get things done on the move",
        content:
          "Mobile application development makes key services and workflows easier to use wherever customers or staff need them.",
        btnText: "Read More",
        btnLink: "/mobile-app-development",
      },
      {
        id: 2,
        iconBg: "#FEF3F3",
        icon: <IconWebDev classes="w-16 h-16" />,
        title: "Turn more visits into customer action",
        content:
          "Web development creates clear, dependable journeys that help visitors understand your offer and take the next step.",

        btnText: "Read More",
        btnLink: "/web-development",
      },
      {
        id: 3,
        iconBg: "#EBF4FA",
        icon: <IconDigitalMarketing classes="w-16 h-16" />,
        title: "Reach the right buyers and build demand",
        content:
          "Digital marketing connects relevant audiences with campaigns built to generate qualified interest and repeat engagement.",

        btnText: "Read More",
        btnLink: "/digital-marketing",
      },
      {
        id: 4,
        iconBg: "#FDECF3",
        icon: <IconGrapic classes="w-16 h-16" />,
        title: "Make your offer clear and memorable",
        content:
          "Graphic design and UX/UI make your brand easier to recognize, your offer easier to understand, and your experience easier to use.",

        btnText: "Read More",
        btnLink: "/graphic-design",
      },
      {
        id: 5,
        iconBg: "#E9F3D3",
        icon: <IconCrm classes="w-16 h-16" />,
        title: "Keep leads and customer follow-up moving",
        content: "CRM development organizes customer records, sales activity, and follow-ups around how your team works.",
        btnText: "Read More",
        btnLink: "/crm-development",
      },
      {
        id: 6,
        iconBg: "#EBF6D3",
        icon: <IconShopify classes="w-16 h-16" />,
        title: "Make online buying easier to complete",
        content:
          "Shopify development improves product discovery, checkout, and the day-to-day work of running your online store.",

        btnText: "Read More",
        btnLink: "/shopify-development",
      },
      {
        id: 7,
        iconBg: "#EDE2F8",
        icon: <IconWoocommerce classes="w-16 h-16" />,
        title: "Make store operations fit your business",
        content:
          "WooCommerce development tailors product, checkout, and order workflows to the needs of your customers and team.",

        btnText: "Read More",
        btnLink: "/woocommerce-development",
      },
      {
        id: 8,
        iconBg: "#EAFCF3",
        icon: <IconWordpress classes="w-16 h-16" />,
        title: "Keep your website content easy to manage",
        content:
          "WordPress development gives your team an adaptable site for publishing useful content and growing your online presence.",

        btnText: "Read More",
        btnLink: "/wordPress-development",
      },
      {
        id: 9,
        iconBg: "#FEF3F3",
        icon: <IconCustomSoftDev classes="w-16 h-16" />,
        title: "Remove repetitive work and process gaps",
        content:
          "Custom software connects workflows and replaces manual tasks with tools designed around your operation.",

        btnText: "Read More",
        btnLink: "/custom-software-development",
      },
    ],
  },
faqs: [
    {
      id: 1,
      question: "Who does RF Technologies help?",
      answer:
        "We partner with growing businesses that need to improve operations, customer experience, or digital growth. We align the right expertise to each business goal and stay involved beyond delivery.",
    },
    {
      id: 2,
      question: "What services does RF Technologies offer?",
      answer:
        "Our work includes business websites and e-commerce, custom software, CRM, mobile applications, design, SEO, and digital marketing. We recommend the services that fit your priorities rather than a fixed package.",
    },
    {
      id: 3,
      question: "What makes your web development services stand out?",
      answer:
        "We start with your customers and business goals, then shape the site structure, content, and functionality around them. The result is designed to support real journeys such as generating leads, completing purchases, or finding support.",
    },
    {
      id: 4,
      question:
        "How do you keep a project aligned with our business goals?",
      answer:
        "We clarify the desired outcomes and constraints up front, review progress with your team as work moves forward, and test against agreed requirements. This keeps decisions connected to the operational improvement the project is meant to deliver.",
    },
    {
      id: 5,
      question: "How can I become a partner with RF Technologies?",
      answer:
        "Share the business challenge or opportunity you are working on through our contact page. We will arrange a conversation to understand your goals and recommend a practical next step.",
    },
  ],
};

export { homeContent };
