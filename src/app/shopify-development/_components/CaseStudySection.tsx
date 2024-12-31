import ServicesCaseStudyCard from '@/app/_components/ServicesCaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const CaseStudySection = () => {
    const { shopify } = caseStudies;
    return (
        <section className='px-5 py-24'>
            <h2 className='text-primary mb-6 uppercase text-center'>Case Studies</h2>
            <div className='pt-9'>
                <div className='flex items-center justify-center flex-wrap gap-4 relative'>
                    {shopify.map((project) => (
                        <div className='lg:basis-[24%] md:basis-[49%] ' key={project.id}>
                            <ServicesCaseStudyCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
