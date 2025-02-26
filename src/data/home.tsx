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
        "Turning an idea into a successful digital product requires a well-defined process that blends product development with strategic marketing. ",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png",
    },
  ],
  ourServices: {
    roundCta: "OUR SERVICES",
    title: "We Provide Leading Solutions In",
    content: ` At RF Tech, we deliver top-quality services in Graphic Designing, Website Development, CRM Development, App Development, SEO, Digital Marketing. Our expert team is dedicated to helping your business thrive with innovative and effective digital solutions. Partner with us to achieve unparalleled success.
`,
    btnText: "Get Started",
    btnLink: "/contact-us",
    cards: [
      {
        id: 1,
        iconBg: "#FFF6EE",
        icon: <IconApplicationDev classes="w-16 h-16" />,
        title: "Application Development",
        content:
          "Build a successful iOS or Android app that optimize your processes.",
        btnText: "Read More",
        btnLink: "/mobile-app-development",
      },
      {
        id: 2,
        iconBg: "#FEF3F3",
        icon: <IconWebDev classes="w-16 h-16" />,
        title: "Website Development",
        content:
          "Creating stunning, user-friendly websites that captivate and convert.",

        btnText: "Read More",
        btnLink: "/web-development",
      },
      {
        id: 3,
        iconBg: "#EBF4FA",
        icon: <IconDigitalMarketing classes="w-16 h-16" />,
        title: "Digital Marketing",
        content:
          "Crafting campaigns that engage, convert, and retain customers",

        btnText: "Read More",
        btnLink: "/digital-marketing",
      },
      {
        id: 4,
        iconBg: "#FDECF3",
        icon: <IconGrapic classes="w-16 h-16" />,
        title: "Graphic Design & UX/UI",
        content:
          "Crafting visually stunning graphics that enhance your brand identity.",

        btnText: "Read More",
        btnLink: "/graphic-design",
      },
      {
        id: 5,
        iconBg: "#E9F3D3",
        icon: <IconCrm classes="w-16 h-16" />,
        title: "CRM Development",
        content: "Enhancing customer relationships with tailored CRM systems.",
        btnText: "Read More",
        btnLink: "/crm-development",
      },
      {
        id: 6,
        iconBg: "#EBF6D3",
        icon: <IconShopify classes="w-16 h-16" />,
        title: "Shopify Development",
        content:
          "Building robust, scalable e-commerce stores for online success.",

        btnText: "Read More",
        btnLink: "/shopify-development",
      },
      {
        id: 7,
        iconBg: "#EDE2F8",
        icon: <IconWoocommerce classes="w-16 h-16" />,
        title: "Woocommerce Development",
        content:
          "Designing and developing high-performance e-commerce stores on WooCommerce.",

        btnText: "Read More",
        btnLink: "/woocommerce-development",
      },
      {
        id: 8,
        iconBg: "#EAFCF3",
        icon: <IconWordpress classes="w-16 h-16" />,
        title: "Wordpress Development",
        content:
          "Building versatile and scalable WordPress sites tailored to your needs.",

        btnText: "Read More",
        btnLink: "/wordPress-development",
      },
      {
        id: 9,
        iconBg: "#FEF3F3",
        icon: <IconCustomSoftDev classes="w-16 h-16" />,
        title: "Custom Software Development",
        content:
          "Delivering bespoke software solutions that drive business innovation.",

        btnText: "Read More",
        btnLink: "/custom-software-development",
      },
    ],
  },
  
  faqs: [
    {
      id: 1,
      question: "What is RF Technologies?",
      answer:
        "RF Technologies is a software company which provides custom software development, e-commerce development, digital marketing and Shopify development services.",
    },
    {
      id: 2,
      question: "What services does RF Technologies offer?",
      answer:
        "At RF Tech, we provide a comprehensive range of digital solutions including SEO, digital marketing, web development, Shopify and WooCommerce development, WordPress development, custom software development, CRM development, and graphic design. Our goal is to tailor these services to meet the unique needs of your business and drive measurable results.",
    },
    {
      id: 3,
      question: "What makes your web development services stand out?",
      answer:
        "Our web development services are distinguished by our commitment to creating user-centric, high-performance websites. We focus on delivering responsive designs, seamless functionality, and a robust user experience. Whether you need a new site or a revamp, our team ensures that your website aligns with your brand and business objectives.",
    },
    {
      id: 4,
      question:
        "How do you ensure the success of custom software development projects?",
      answer:
        "We ensure the success of custom software development projects through a structured approach that includes comprehensive requirements gathering, iterative development, and rigorous testing. Our team works closely with you throughout the process to ensure the final product meets your specifications, enhances operational efficiency, and delivers tangible benefits.",
    },
    {
      id: 5,
      question: "How can I become a partner with RF Technologies?",
      answer:
        "You can contact us to become a partner or you can visit our office or manage a meeting with us.",
    },
  ],
};

export { homeContent };
