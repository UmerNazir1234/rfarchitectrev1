import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { FiPackage, FiStar } from "react-icons/fi";

const title = "Products";
const description =
  "Explore products developed by RF Technologies, including BlueTicks and the upcoming Spotlyy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title: `${title} | RF Technologies`, description, url: "/products" },
  twitter: { title: `${title} | RF Technologies`, description },
};

const products = [
  {
    id: 1,
    icon: <FiPackage className="h-16 w-16" aria-hidden="true" />,
    title: "BlueTicks",
    content:
      "An e-ticketing product for organizations to manage and promote events, ticket sales, pricing, and their branded experience.",
    btnText: "Explore BlueTicks",
    btnLink: "/products/blueticks",
  },
  {
    id: 2,
    icon: <FiStar className="h-16 w-16" aria-hidden="true" />,
    title: "Spotlyy — Coming Soon",
    content:
      "A product from RF Technologies. Further product details will be shared when available.",
    btnText: "Coming Soon",
    btnLink: "/spotlyy",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Products by <span class='text-secondary'>RF Technologies</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
      />
      <section className="bg-white section py-12">
        <div className="!max-w-screen-2xl px-4 m-auto">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="xl:basis-[22%] md:basis-[30%] sm:basis-[45%] basis-full"
              >
                <ServiceCard card={{ ...product, iconBg: "#EDE2F8" }} />
              </div>
            ))}
          </div>
          <div id="future-products" className="mt-12 text-center">
            <h2>Future Products</h2>
            <p className="mt-3 text-lg">
              Further product information will be shared when it is ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
