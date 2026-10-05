import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import {
  FiBriefcase,
  FiHome,
  FiShoppingCart,
  FiZap,
  FiUsers,
} from "react-icons/fi";

const title = "Industries";
const description =
  "Explore technology support for eCommerce businesses, startups, SMEs, and agencies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/industries",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

const industries = [
  {
    id: 1,
    icon: <FiShoppingCart className="h-16 w-16" aria-hidden="true" />,
    title: "eCommerce",
    content:
      "Shopify engineering, commerce software, and technology support for commerce experiences and operations.",
    btnText: "Explore eCommerce",
    btnLink: "/industries/ecommerce",
  },
  {
    id: 2,
    icon: <FiZap className="h-16 w-16" aria-hidden="true" />,
    title: "Startups",
    content:
      "Product engineering and practical software decisions for teams building digital products.",
    btnText: "Explore Startups",
    btnLink: "/industries/startups",
  },
  {
    id: 3,
    icon: <FiHome className="h-16 w-16" aria-hidden="true" />,
    title: "SMEs",
    content:
      "Technology shaped around customer experiences, operations, and business workflows.",
    btnText: "Explore SMEs",
    btnLink: "/industries/smes",
  },
  {
    id: 4,
    icon: <FiUsers className="h-16 w-16" aria-hidden="true" />,
    title: "Agencies",
    content:
      "Engineering support for agency teams with project and delivery needs.",
    btnText: "Explore Agencies",
    btnLink: "/industries/agencies",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Industries <span class='text-secondary'>We Support</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png"
      />
      <section className="bg-white section py-12">
        <div className="!max-w-screen-2xl px-4 m-auto">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="xl:basis-[22%] md:basis-[30%] sm:basis-[45%] basis-full"
              >
                <ServiceCard card={{ ...industry, iconBg: "#EBF6D3" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
