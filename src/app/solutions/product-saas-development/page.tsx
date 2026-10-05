import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";

const title = "Product & SaaS Development";
const description =
  "Product engineering from idea and prototype through MVP and launch, guided by your users and business needs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions/product-saas-development" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/solutions/product-saas-development",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function ProductSaasDevelopmentPage() {
  return (
    <>
      <Hero
        title="Product &amp; SaaS <span class='text-secondary'>Development</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
      />
      <section className="page-width py-12">
        <h2 className="mb-4">From idea to a useful product</h2>
        <p className="sm:text-xl text-lg">
          We understand the business problem, shape a practical product
          direction, and engineer the agreed solution through prototype, MVP,
          and launch. The next step is guided by real user and business needs.
        </p>
      </section>
      <ProjectSubmission
        title="Discuss Your Product"
        description="Tell us what you are building, who it is for, and what you need to learn or deliver next."
        btnTitle="Discuss Your Project"
        btnUrl="/contact-us"
      />
    </>
  );
}
