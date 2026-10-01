import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import { IndustryPageContent } from "@/data/industries";

type Props = {
  industry: IndustryPageContent;
};

const IndustryPage = ({ industry }: Props) => (
  <>
    <Hero
      image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png"
      title={industry.heroTitle}
    />
    <ImageWithText content={industry.sections} />
    <ProjectSubmission
      title="Discuss Your Project"
      description={industry.ctaDescription}
      btnTitle="Discuss Your Project"
      btnUrl="/contact-us"
    />
  </>
);

export default IndustryPage;