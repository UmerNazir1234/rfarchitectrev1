'use client';
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/caseStudies";
import Truncate from "@/helpers/Truncate";

type newProject = {
    project: Project
}
const ServicesCaseStudyCard = ({ project }: newProject) => {
    return (
        <Link href={`/case-studies/${project.tech}/${project.slug}`}>
            <div className="w-full bg-white rounded-[10px] relative overflow-hidden">
                <div className="space-y-2">
                    <div className="relative w-full h-52">
                        <Image src={project.image} className="object-cover object-center" alt="image" fill loading="lazy" />
                    </div>
                    <div className="p-4 !m-0">
                        <h4 className="text-primary  font-bold mb-2">{project.title}</h4>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Problem:</h3>
                            <p className="text-[14px] text-gray-600">
                                <Truncate problem={project.problem} />
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Solution:</h3>
                            <p className="text-[14px] text-gray-600"><Truncate problem={project.solution} /></p>
                        </div>
                    </div>
                </div>
                {/* <div>
               <Link
                    href={`/case-studies/${project.tech}/${project.slug}`}
                    className="btn btn--secondary text-lg py-2 w-full max-w-full rounded-sm hover:!bg-red"
                >
                    View Details
                </Link>
            </div> */}
            </div>
        </Link>
    );
};

export default ServicesCaseStudyCard;
