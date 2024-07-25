import React from "react";
import Button from "@/components/Button";
import { GoArrowUpRight } from "react-icons/go";
import Faq from "@/components/Faq";
import { faq } from "@/dummyData/data";

const HomeFaq = ({ classes }: any) => {
  console.log(faq);
  return (
    <div className={` py-12 ${classes || ""}`}>
      <div className="page-width">
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
          <Faq data={faq} />
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

export default HomeFaq;
