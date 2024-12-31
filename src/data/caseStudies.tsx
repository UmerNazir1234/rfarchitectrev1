import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";

export type Project = {
  id: number;
  title: string;
  subTitle: string;
  problem: string;
  solution: string;
  slug: string;
  url: string;
  tech: string;
  image: string;
  logo: string;
  email: string;
  social?: social[];
  contactNumber?: string;
  projectImages: string[];
};
type social = {
  icon: React.ReactElement;
  url: string;
};

export type techKeys = "shopify" | "wordpress";
export type caseStudies = {
  [key in techKeys]: Project[];
};
export const caseStudies: caseStudies = {
  shopify: [
    {
      id: 1,
      title: "Elite ECW",
      subTitle:
        "Our moto is to make sure you Look Great Feel Great Ready To Preform",
      social: [
        {
          icon: <FaInstagram className="w-6 h-6 " />,
          url: "https://www.instagram.com/elite_ecw?igshid=1294cxqeqpv0j",
        },
        {
          icon: <FaFacebook className="w-6 h-6 " />,
          url: "https://www.facebook.com/elitecustomwear2/",
        },
        {
          icon: <FaYoutube className="w-6 h-6 " />,
          url: " https://www.youtube.com/@elitebyecw3123",
        },

        {
          icon: <FaTwitter className="w-6 h-6 " />,
          url: "https://mobile.twitter.com/EcwElite",
        }
      ],
      projectImages: [
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735564145/RfTechnologiesWebsite/IMG-20230606-WA0040_6c74822e-fefa-4797-a99f-5c27f0acef0e_zai2sb.jpg",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735563579/RfTechnologiesWebsite/Shoes-_-ELITE-BY-ECW-Team-Sports-12-30-2024_05_59_PM_yrtvjn.png",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735558680/RfTechnologiesWebsite/IMG-20230606-WA0015_523420ef-c3b9-4e8c-8c7b-2d07067fffb6_nofs9p.jpg",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735558680/RfTechnologiesWebsite/IMG-20230606-WA0015_523420ef-c3b9-4e8c-8c7b-2d07067fffb6_nofs9p.jpg",
      ],


      email: "info@eliteecw.com",
      contactNumber: "225.256.7597",
      logo: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735562356/RfTechnologiesWebsite/Christmas_Hat_PNG_upytax.png",
      problem: `Elite ECW tackles common e-commerce challenges by offering practical and effective solutions to boost your online business. To reduce cart abandonment, streamline the checkout process by minimizing steps, displaying all costs upfront, and sending timely email reminders to customers who leave items in their cart. Additionally, providing multiple payment options and guest checkout features can further reduce abandonment rates.

              Building customer trust is crucial for retaining long-term clients. A professional, easy-to-navigate website design, clear product descriptions, customer reviews, and testimonials all contribute to credibility. Offering secure payment gateways and clear return policies enhances trustworthiness, encouraging shoppers to complete their purchases with confidence.

              Driving traffic to your e-commerce site requires a combination of strategies. Start with SEO optimization to increase visibility in search engine results. Leverage social media platforms to reach your target audience through ads, influencer collaborations, and engaging posts. Consistently producing high-quality, informative, and entertaining content keeps customers coming back and enhances brand loyalty. Additionally, integrating email marketing campaigns and running promotions or seasonal sales can further drive traffic and increase conversions.`,
      solution:
        " Elite ECW addresses common e-commerce challenges with proven, actionable solutions. By streamlining the checkout process, displaying transparent pricing, and sending timely email reminders, cart abandonment rates are minimized. A professional website design, customer reviews, and secure payment options help build trust with customers. To boost traffic, we optimize SEO, run targeted social media ads, and create engaging content that drives conversions and increases customer loyalty. These solutions work together to enhance the overall customer experience and improve business performance.",
      slug: "elite-ecw",
      url: "https://www.eliteecw.com/",
      tech: "shopify",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735558680/RfTechnologiesWebsite/IMG-20230606-WA0015_523420ef-c3b9-4e8c-8c7b-2d07067fffb6_nofs9p.jpg",
    },
    {
      id: 2,
      title: "Icebox Sneakers",
      subTitle:
        "Our moto is to make sure you Look Great Feel Great Ready To Preform",
      projectImages: [
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735564145/RfTechnologiesWebsite/IMG-20230606-WA0040_6c74822e-fefa-4797-a99f-5c27f0acef0e_zai2sb.jpg",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735563579/RfTechnologiesWebsite/Shoes-_-ELITE-BY-ECW-Team-Sports-12-30-2024_05_59_PM_yrtvjn.png",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735558680/RfTechnologiesWebsite/IMG-20230606-WA0015_523420ef-c3b9-4e8c-8c7b-2d07067fffb6_nofs9p.jpg",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735558680/RfTechnologiesWebsite/IMG-20230606-WA0015_523420ef-c3b9-4e8c-8c7b-2d07067fffb6_nofs9p.jpg",
      ],
      social: [
        {
          icon: <FaFacebook className="w-6 h-6 " />,
          url: "https://www.facebook.com/ice.boxsneakers",
        },
        {
          icon: <FaInstagram className="w-6 h-6 " />,
          url: "https://www.instagram.com/ice_boxsneakers/",
        },

        {
          icon: <FaTiktok className="w-6 h-6 " />,
          url: "https://www.tiktok.com/@ice_boxsneakers?_t=8rYxGYrFJZg&_r=1",
        }
      ],

      email: "icebox@gmail.com",
      contactNumber: "052-7505354",
      logo: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735637886/RfTechnologiesWebsite/Untitled_design_koqbag.webp",
      problem: `Elite ECW tackles common e-commerce challenges by offering practical and effective solutions to boost your online business. To reduce cart abandonment, streamline the checkout process by minimizing steps, displaying all costs upfront, and sending timely email reminders to customers who leave items in their cart. Additionally, providing multiple payment options and guest checkout features can further reduce abandonment rates.

              Building customer trust is crucial for retaining long-term clients. A professional, easy-to-navigate website design, clear product descriptions, customer reviews, and testimonials all contribute to credibility. Offering secure payment gateways and clear return policies enhances trustworthiness, encouraging shoppers to complete their purchases with confidence.

              Driving traffic to your e-commerce site requires a combination of strategies. Start with SEO optimization to increase visibility in search engine results. Leverage social media platforms to reach your target audience through ads, influencer collaborations, and engaging posts. Consistently producing high-quality, informative, and entertaining content keeps customers coming back and enhances brand loyalty. Additionally, integrating email marketing campaigns and running promotions or seasonal sales can further drive traffic and increase conversions.`,
      solution:
        " Elite ECW addresses common e-commerce challenges with proven, actionable solutions. By streamlining the checkout process, displaying transparent pricing, and sending timely email reminders, cart abandonment rates are minimized. A professional website design, customer reviews, and secure payment options help build trust with customers. To boost traffic, we optimize SEO, run targeted social media ads, and create engaging content that drives conversions and increases customer loyalty. These solutions work together to enhance the overall customer experience and improve business performance.",
      slug: "icebox-sneakers",
      url: "https://iceboxsneakers.co.il/",
      tech: "shopify",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1733495124/RfTechnologiesWebsite/iceboxsneakers-12-06-2024_07_24_PM_gewdec.png",
    },
    {
      id: 3,
      title: "Bruno Apperal",
      subTitle:
        "Where Quality Meets Conscience",
      projectImages: [
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735642585/RfTechnologiesWebsite/Bruno-Premium-Clothing-Brand-USA-12-31-2024_03_56_PM_ibaigl.png",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735642654/RfTechnologiesWebsite/Products-_-Bruno-12-31-2024_03_57_PM_tkzdup.png",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735642784/RfTechnologiesWebsite/Screenshot_2024-12-31_155935_jrcc2k.png",
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735642879/RfTechnologiesWebsite/Bruno-Premium-Clothing-Brand-USA-12-31-2024_04_00_PM_mknnoe.png",
      ],
      social: [

        {
          icon: <FaInstagram className="w-6 h-6 " />,
          url: "https://www.instagram.com/bruno__apparel?igsh=cWFqeHFid2o2M3cx",
        },

      ],

      email: "",
      contactNumber: "052-7505354",
      logo: "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735642238/RfTechnologiesWebsite/logo_zzct6s.webp",
      problem: `In the apparel industry, many garments lack durability and contribute to fast fashion, leading to significant environmental waste. Consumers often struggle to find high-quality, long-lasting clothing that offers both comfort and style. Additionally, the negative impact of unethical manufacturing practices on labor and the environment is a growing concern for conscientious consumers.`,
      solution:
        " Brunu is committed to providing high-quality, long-lasting apparel that minimizes environmental impact. By focusing on durable materials, ethical manufacturing practices, and timeless designs, Brunu offers products like the Heavy Faded Tee, which combines superior fit, fabric, and finish. Our approach not only ensures lasting comfort and style but also promotes sustainability and conscientious consumer behavior by reducing waste and supporting ethical labor practices throughout the supply chain.",
      slug: "brunoapparel",
      url: "https://brunoapparel.com/",
      tech: "shopify",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1735641789/RfTechnologiesWebsite/Screenshot_2024-12-31_154236_rgcyzd.png",
    },

  ],
  wordpress: [],
};
