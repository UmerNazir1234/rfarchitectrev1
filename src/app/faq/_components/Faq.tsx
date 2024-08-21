import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type faqProps = {
  question?: string;
  answer?: string;
  id: number;
};
type props = {
  title: string;
  data: faqProps[];
  classes?: string;
};
const Faq = ({ data, classes, title }: props) => {
  return (
    <div className={`${classes ? classes : "py-12"}  relative`}>
      <div className="page-width relative z-50">
        <h3 className="text-center text-primary mt-8 ">{title}</h3>
        <div className="mt-14">
          <Accordion type="single" collapsible>
            {data?.map((data, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{data?.question}</AccordionTrigger>
                <AccordionContent>{data?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721468220/RfTechnologiesWebsite/Vector_5_n2dv40.svg"
        }
        alt="Background Image"
        loading="lazy"
        width={450}
        height={400}
        className="absolute left-0 top-0 max-md:w-[300px] max-md:[280px]"
      />
    </div>
  );
};

export default Faq;
