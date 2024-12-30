
import shopifyCaseStudies from '@/data/shopify';
import { ShopifyCaseStudy } from '@/lib/type';

export async function generateStaticParams() {
    return shopifyCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
    const caseStudy = shopifyCaseStudies.find((cs) => cs.slug === params.slug);

    if (!caseStudy) {
        return <div className="text-center text-red-500 text-lg">Case Study Not Found</div>;
    }

    return (
        <div className="page-width py-24">
            <h1 className="text-primary text-3xl font-bold text-center mb-6">{caseStudy.title}</h1>
            <div className="flex flex-col items-center space-y-4">
                <div className="relative w-full max-w-4xl h-80">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="object-cover object-center w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-full max-w-4xl">
                    <h2 className="text-xl font-semibold text-primary">Problem</h2>
                    <p className="text-gray-600 text-lg">{caseStudy.problem}</p>
                    <h2 className="text-xl font-semibold text-primary mt-4">Solution</h2>
                    <p className="text-gray-600 text-lg">{caseStudy.solution}</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
