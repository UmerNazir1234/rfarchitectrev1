import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

type faqProps = {
  question?: string;
  awnser?: string;
};
type props = {
  data: faqProps[];
  classes?: string;
};
const Faq = ({ data, classes }: props) => {
  return (
    <div className={`${classes ? classes : "py-12"}  relative`}>
      <div className="page-width relative z-50">
        <div className="flex items-center justify-center">
          <Button
            title="have a question"
            classes="bg-secondary"
            icon={true}
            enableIcons={true}
          />
        </div>
        <h3 className="text-center text-primary mt-8 ">
          Frequently Ask Questions
        </h3>
        <div className="mt-14">
          <Accordion type="single" collapsible>
            {data?.map((data, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{data?.question}</AccordionTrigger>
                <AccordionContent>{data?.awnser}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex items-center justify-center mt-10">
            <Button
              title="Read More"
              classes="btn--outline"
              icon={<GoArrowUpRight className="h-7 w-7" />}
            />
          </div>
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
