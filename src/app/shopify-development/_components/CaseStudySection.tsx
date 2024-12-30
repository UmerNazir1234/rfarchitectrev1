import ServicesCaseStudyCard from '@/app/_components/ServicesCaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const CaseStudySection = () => {
    const { shopify } = caseStudies;
    return (
        <section className='page-width py-24'>
            <h2 className='text-primary mb-6 uppercase text-center'>Case Study</h2>
            <div className='pt-9'>
                <div className='flex items-center justify-center flex-wrap gap-4 relative'>
                    {shopify.map((project) => (
                        <div className='lg:basis-[32%] md:basis-[49%] p-1' key={project.id}>
                            <ServicesCaseStudyCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
