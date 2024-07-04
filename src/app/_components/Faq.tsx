import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/Button";
import { GoArrowUpRight } from "react-icons/go";

const Faq = ({ classes }: any) => {
  return (
    <div className={` py-12 ${classes || ""}`}>
      <div className="page-width">
        <h3 className="text-center text-primary ">Frequently Ask Questions</h3>
        <div className="mt-14">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Porem ipsum dolor sit amet, consectetur adipiscing elit?
              </AccordionTrigger>
              <AccordionContent>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Porem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Porem ipsum dolor sit amet, consectetur adipiscing elit?
              </AccordionTrigger>
              <AccordionContent>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Porem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Porem ipsum dolor sit amet, consectetur adipiscing elit?
              </AccordionTrigger>
              <AccordionContent>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Porem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Porem ipsum dolor sit amet, consectetur adipiscing elit?
              </AccordionTrigger>
              <AccordionContent>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Porem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </AccordionContent>
            </AccordionItem>
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
    </div>
  );
};

export default Faq;
