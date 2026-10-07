import type { Metadata } from "next";
import Hero from "@/components/Hero";

const title = "Spotlyy — Coming Soon";
const description =
  "Spotlyy is an upcoming RF Technologies product. More information will be shared when it is ready.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/spotlyy" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/spotlyy",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function SpotlyyPage() {
  return (
    <>
      <Hero
        title="Spotlyy <span class='text-secondary'>Coming Soon</span>"
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
      />
      <section className="page-width py-12">
        <p className="sm:text-xl text-lg">
          Spotlyy is an upcoming RF Technologies product. More information will
          be shared when it is ready.
        </p>
      </section>
    </>
  );
}
