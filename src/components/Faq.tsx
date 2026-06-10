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
  answer?: string;
  id: number;
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
            classes="bg-secondary cursor-default"
            icon={true}
            enableIcons={true}
          />
        </div>
        <h3 className="text-center text-primary mt-8 ">
          Frequently Asked Questions
        </h3>
        <div className="mt-14">
          <Accordion type="single" collapsible>
            {data?.map((data, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{data?.question}</AccordionTrigger>
                <AccordionContent>{data?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex items-center justify-center mt-10">
            <Button
              title="Read More"
              href="/faq"
              classes="btn--outline"
              icon={<GoArrowUpRight className="h-7 w-7" />}
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="526"
        height="560"
        viewBox="0 0 526 698"
        fill="none"
        className="absolute left-0 top-0 max-md:!w-[300px] max-md:!h-[280px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M245.974 36.5117C318.874 42.4184 407.134 -1.54124 460.622 48.3434C516.098 100.084 482.072 193.896 494.892 268.665C503.897 321.189 528.867 369.293 524.76 422.425C520.461 478.051 502.536 531.312 471.033 577.357C436.842 627.333 396.893 681.738 337.927 695.505C279.459 709.155 226.092 663.037 167.933 648.123C107.046 632.509 41.3896 639.122 -11.9057 605.796C-76.3788 565.479 -141.633 514.113 -163.052 441.151C-185.299 365.371 -156.771 285.13 -127.588 211.742C-97.2192 135.374 -66.6617 46.5515 7.74394 11.6493C81.522 -22.9586 164.748 29.9304 245.974 36.5117Z"
          fill="#EDAC18"
          fillOpacity="0.18"
        />
      </svg>
    </div>
  );
};

export default Faq;
