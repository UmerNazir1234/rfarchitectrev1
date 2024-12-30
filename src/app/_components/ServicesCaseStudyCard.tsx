'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/caseStudies";

type newProject = {
    project: Project
}
const ServicesCaseStudyCard = ({ project }: newProject) => {
    return (
        <Card className="w-full bg-light rounded-[10px] relative">
            <CardHeader>
                <CardTitle className="text-primary sm:text-2xl text-xl font-bold">{project.title}</CardTitle>
                <span className="text-xs uppercase font-bold inline-block !w-fit bg-secondary text-white rounded-full px-2 py-0.5 absolute top-2 right-2 m-0">Case Study</span>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="relative w-full h-52">
                    <Image src={project.image} className="object-cover object-center" alt="image" fill loading="lazy" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Problem:</h3>
                    <p className="text-[14px] text-gray-600">{project.problem}</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Solution:</h3>
                    <p className="text-[14px] text-gray-600">{project.solution}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href={`/case-studies/${project.tech}/${project.slug}`}
                    className="btn btn--secondary text-lg py-2 w-full max-w-full rounded-sm hover:!bg-red"
                >
                    View Details
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ServicesCaseStudyCard;
