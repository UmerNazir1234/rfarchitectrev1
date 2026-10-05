import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { FiCode, FiLayers, FiLink, FiShoppingBag } from "react-icons/fi";

const title = "Technology Solutions";
const description =
  "Explore Shopify engineering, product and SaaS development, custom software, and long-term technology partnership.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title: `${title} | RF Technologies`, description, url: "/solutions" },
  twitter: { title: `${title} | RF Technologies`, description },
};

const solutions = [
  {
    id: 1,
    icon: <FiShoppingBag className="h-16 w-16" aria-hidden="true" />,
    title: "Shopify Engineering",
    content:
      "Engineering across the Shopify ecosystem, including commerce experiences, integrations, and operations.",
    btnText: "Explore Shopify Engineering",
    btnLink: "/solutions/shopify-engineering",
  },
  {
    id: 2,
    icon: <FiLayers className="h-16 w-16" aria-hidden="true" />,
    title: "Product & SaaS Development",
    content:
      "Move a digital product from idea and prototype through MVP, launch, and future growth.",
    btnText: "Explore Product Engineering",
    btnLink: "/solutions/product-saas-development",
  },
  {
    id: 3,
    icon: <FiCode className="h-16 w-16" aria-hidden="true" />,
    title: "Custom Software",
    content:
      "Connect workflows and systems, reduce manual work, and support ongoing technical needs with software shaped around your business.",
    btnText: "Explore Custom Software",
    btnLink: "/solutions/custom-software",
  },
  {
    id: 4,
    icon: <FiLink className="h-16 w-16" aria-hidden="true" />,
    title: "Technology Partnership",
    content:
      "Keep engineering support connected to your priorities through long-term collaboration.",
    btnText: "Explore Technology Partnership",
    btnLink: "/solutions/technology-partnership",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Technology <span class='text-secondary'>Solutions</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
      />
      <section className="bg-white section py-12">
        <div className="!max-w-screen-2xl px-4 m-auto">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="xl:basis-[22%] md:basis-[30%] sm:basis-[45%] basis-full"
              >
                <ServiceCard card={{ ...solution, iconBg: "#EBF6D3" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
