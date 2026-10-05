import Hero from "@/components/Hero";
import React from "react";
import AboutSection from "./AboutSection";
import Heading from "@/components/Heading";
import OurVision from "./OurVision";
import WhatMakesUnique from "./WhatMakesUnique";
import ProjectSubmission from "@/components/ProjectSubmission";
import content from "@/data/about";
import Image from "next/image";
import Link from "next/link";
import { work } from "@/dummyData/data";
import Button from "@/components/Button";

const values = [
  {
    title: "We understand before we build",
    description: "We learn how your business works and what outcome matters before recommending an approach.",
  },
  {
    title: "We challenge assumptions",
    description: "We question the brief when a different path may better address the underlying need.",
  },
  {
    title: "We communicate openly",
    description: "We keep decisions, progress, and constraints clear throughout the work.",
  },
  {
    title: "We think long term",
    description: "We consider what your team and product will need beyond the initial launch.",
  },
  {
    title: "We treat every project like our own",
    description: "We take responsibility for the details and the outcomes we agree to deliver.",
  },
];

const featuredWork = work.filter((project) => [1, 3].includes(project.id));
const projectSummaries = {
  1: {
    challenge:
      "Address cart abandonment, strengthen shopper trust, and improve the store's ability to attract traffic.",
    solution:
      "A Shopify implementation with a React extension, including work on checkout, product information, trust, and acquisition.",
  },
  3: {
    challenge: "Bring traditional photo studio services online.",
    solution: "A Next.js experience for accessing photo studio services online.",
  },
};

const AboutUs = () => {
  const { banner, about, vision, projectSubmission } = content;

  return (
    <div className="overflow-x-clip">
      <Hero image={banner?.image} title={banner?.title} />

      <div id="who-we-are">
        <AboutSection data={about} />
      </div>

      <OurVision data={vision} />
      <WhatMakesUnique />

      <section id="experience-capabilities" className="page-width py-12">
        <div className="text-center">
          <Heading title="Business Understanding Comes First" classes="text-primary" />
        </div>
        <p className="p-lg mx-auto mt-4 max-w-4xl text-center">
          We start by understanding how your business works and what outcome
          matters. Then we recommend the right technology approach, build what
          is needed, and stay involved as priorities evolve.
        </p>
        <div className="mt-8 flex justify-center">
          <Button title="Explore Solutions" href="/solutions" />
        </div>
      </section>

      <section id="selected-work" className="bg-primary py-12">
        <div className="page-width">
          <div className="text-center">
            <Heading title="Selected Case Studies" classes="text-white" />
          </div>
          <div className="mt-8">
            {featuredWork.map((project) => (
              <article
                key={project.id}
                className="md:flex items-center gap-8 border-b border-white/30 py-8 last:border-b-0"
              >
                <div className="relative w-full md:basis-2/5 h-64 md:h-80">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <div className="md:basis-3/5 text-white max-md:pt-5">
                  <h3 className="h4">{project.title}</h3>
                  <p className="p-lg mt-3">
                    <strong>Challenge:</strong> {projectSummaries[project.id as keyof typeof projectSummaries].challenge}
                  </p>
                  <p className="p-lg mt-3">
                    <strong>Solution:</strong> {projectSummaries[project.id as keyof typeof projectSummaries].solution}
                  </p>
                  <p className="mt-3">
                    <strong>Technologies:</strong> {project.subtitle}
                  </p>
                  <Link
                    href={project.link || `/our-work#${project.workId}`}
                    className="inline-block text-secondary font-bold mt-4 border-b border-secondary"
                    aria-label={`View full case study for ${project.title}`}
                  >
                    View full case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="page-width py-12">
        <div className="text-center">
          <Heading title="How We Work &amp; Our Values" classes="text-primary" />
        </div>
        <ul className="grid md:grid-cols-2 gap-x-10">
          {values.map((value) => (
            <li key={value.title} className="border-b border-primary py-5">
              <h3 className="h4 text-primary">{value.title}</h3>
              <p className="p-lg mt-2">{value.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <div id="contact-cta">
        <ProjectSubmission
          title={projectSubmission?.title}
          description={projectSubmission?.details}
          btnTitle={projectSubmission?.btntitle}
          btnUrl={projectSubmission?.btnurl}
        />
      </div>
    </div>
  );
};

export default AboutUs;
