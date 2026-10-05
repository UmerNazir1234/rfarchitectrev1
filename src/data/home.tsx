import IconDigitalMarketing from "@/components/Icons/IconDigitalMarketing";
import IconGrapic from "@/components/Icons/IconGrapic";
import IconSeo from "@/components/Icons/IconSeo";
import IconWebDev from "@/components/Icons/IconWebDev";
import IconWoocommerce from "@/components/Icons/IconWoocommerce";
import IconWordpress from "@/components/Icons/IconWordpress";
import { FiCode, FiLayers, FiLink, FiShoppingBag } from "react-icons/fi";

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
        "TECHNOLOGY PARTNER FOR <span class='text-secondary'>DIGITAL PRODUCTS & COMMERCE</span>",
      url: "/contact-us",
      description:
        "We solve business problems using technology, from the first discovery conversation through launch, ongoing support, and growth.",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722243811/RfTechnologiesWebsite/Desktop_-_9_lcv48g.png",
    },
    {
      id: 2,
      title: "BUSINESS PROBLEMS, <span class='text-secondary'>SOLVED WITH TECHNOLOGY</span>",
      url: "/contact-us",
      description:
        "We understand your business, recommend the right solution, and stay alongside your team as the product or commerce experience grows.",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png",
    },
  ],
  ourServices: {
    roundCta: "BUSINESS CHALLENGES",
    title: "Solve the business problem behind the brief",
    content: `We solve business problems using technology. We start with your business context, then align Shopify engineering, product and SaaS development, custom software, or ongoing technical partnership to the need.
`,
    btnText: "Discuss Your Project",
    btnLink: "/contact-us",
    cards: [
      {
        id: 1,
        iconBg: "#FFF6EE",
        icon: <FiLayers className="w-16 h-16" aria-hidden="true" />,
        title: "Product & SaaS Development",
        content:
          "Take a digital product from idea and prototype through MVP, launch, and scale.",
        btnText: "Read More",
        btnLink: "/solutions/product-saas-development",
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
        icon: <FiLink className="w-16 h-16" aria-hidden="true" />,
        title: "Technology Partnership",
        content: "Long-term engineering support that stays aligned with business and product priorities.",
        btnText: "Read More",
        btnLink: "/solutions/technology-partnership",
      },
      {
        id: 6,
        iconBg: "#EBF6D3",
        icon: <FiShoppingBag className="w-16 h-16" aria-hidden="true" />,
        title: "Shopify Engineering",
        content:
          "We engineer across the Shopify ecosystem, connecting commerce experiences, integrations, and operations.",

        btnText: "Read More",
        btnLink: "/solutions/shopify-engineering",
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
        icon: <FiCode className="w-16 h-16" aria-hidden="true" />,
        title: "Custom Software",
        content:
          "Connect workflows and systems with software designed around your business operations.",

        btnText: "Read More",
        btnLink: "/solutions/custom-software",
      },
    ],
  },
faqs: [
    {
      id: 1,
      question: "Who does RF Technologies help?",
      answer:
        "We work with businesses building or improving digital products and commerce experiences, as well as teams that need custom software or ongoing engineering support.",
    },
    {
      id: 2,
      question: "What services does RF Technologies offer?",
      answer:
        "Our core work is Shopify engineering, product and SaaS development, custom software, and long-term technology partnership. We recommend an approach based on your business needs.",
    },
    {
      id: 3,
      question: "How do you approach a technology project?",
      answer:
        "We understand the business problem, learn how your operations and customers are affected, and recommend the right technology approach before work begins.",
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
