import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";

const title = "Technology Partnership";
const description =
  "Long-term engineering support aligned with your business, product, and commerce priorities.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions/technology-partnership" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/solutions/technology-partnership",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function TechnologyPartnershipPage() {
  return (
    <>
      <Hero
        title="Long-term <span class='text-secondary'>Technology Partnership</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
      />
      <section className="page-width py-12">
        <h2 className="mb-4">Engineering support that stays connected</h2>
        <p className="sm:text-xl text-lg">
          We work with your team to understand priorities, discuss practical
          options, and keep technical decisions connected to changing business
          needs. The partnership can continue as your products and operations
          evolve.
        </p>
      </section>
      <ProjectSubmission
        title="Discuss Your Project"
        description="Share the technical challenge or ongoing support your team needs."
        btnTitle="Discuss Your Project"
        btnUrl="/contact-us"
      />
    </>
  );
}
