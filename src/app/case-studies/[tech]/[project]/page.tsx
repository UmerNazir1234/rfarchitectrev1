import ProjectSubmission from "@/components/ProjectSubmission";
import { caseStudies, techKeys } from "@/data/caseStudies";
import Image from "next/image";
import Link from "next/link";
export const runtime = "edge";

const page = ({ params }: { params: { tech: techKeys; project: string } }) => {

  const tech = caseStudies[params?.tech];
  if (!tech) {
    return <>No technology found.</>;
  }
  const project = tech.find((p) => p.slug === params?.project);
  if (!project) {
    return <>No project found. </>;
  } 

  return (
    <>
      <div
        className="sm:h-dvh h-[80vh]  bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="bg-overlay bg-black bg-opacity-[60%] absolute inset-0"></div>
        <div className="flex items-center justify-center flex-col absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 text-white h-fit w-full px-3">
          {project?.title && (
            <h1 className="text-center leading-tight">{project?.title}</h1>
          )}
          {project?.subTitle && (
            <p className="text-center sm:text-2xl text-xl">
              {project?.subTitle}
            </p>
          )}
          {project?.url && (
            <Link
              href={project?.url}
              className="btn btn--secondary mt-6"
              target="_blank"
            >
              Visit Website
            </Link>
          )}
        </div>
      </div>
      <div className="bg-white py-24 flex items-center justify-center flex-col">
        <div className="page-width flex items-center sm:justify-between justify-center gap-4 w-full flex-wrap">
          {project?.logo && (
            <Link
              href={project?.url}
              className="flex items-center justify-center"
              target="_blank"
            >
              <Image src={project?.logo} alt="logo" width={160} height={160} />
            </Link>
          )}
          <div className="flex items-end justify-end gap-2 flex-col">
            {project?.email && (
              <div className="lowercase sm:text-5xl text-3xl font-bold">
                {project.email}
              </div>
            )}
            {project?.contactNumber && <h5>{project.contactNumber}</h5>}
            {project?.social && (
              <div className="flex items-center justify-end gap-4">
                {project.social.map(
                  (social, index) =>
                    social.url && (
                      <Link
                        className="hover:scale-110"
                        href={social.url}
                        target="_blank"
                        key={index}
                      >
                        {social.icon}
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {project?.projectImages.length > 0 && (
        <div className="page-width py-24">
          <div className="text-center mb-10 text-primary">
            <h2>Website Design</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {project?.projectImages.map((img, index) => {
              return (
                <div
                  className="relative  w-full lg:h-[450px] md:h-[400px] sm:h-[350px] h-[200px]"
                  key={index}
                >
                  <Image
                    fill
                    loading="lazy"
                    className="absolute inset-0 h-auto max-w-full rounded-lg object-cover object-center "
                    src={img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {project?.problem && (
        <div className="bg-primary py-24">
          <div className="page-width">
            <div className="basis-full">
              <h2 className="mb-2 text-secondary text-white">The Problem</h2>
              <p className=" sm:text-xl text-lg text-white">
                {project?.problem}
              </p>
            </div>
          </div>
        </div>
      )}

      {project?.solution && (
        <div className="bg-white py-24">
          <div className="page-width">
            <h2 className="mb-2 ">The Solution</h2>
            <p className="  sm:text-xl text-lg">{project?.solution}</p>
          </div>
        </div>
      )}
      <ProjectSubmission
        title="Build Your Vision with Us"
        description="RF Technologies creates cutting-edge, user-centric websites and digital solutions. Contact us today to bring your vision to life"
        btnTitle="Contact us"
        btnUrl="/contact-us"
      />
    </>
  );
};

export default page;
