import Tabs from "@/components/Tabs";
import React from "react";
import { becomePartnersTabs, tabs } from "@/dummyData/data";
import Heading from "@/components/Heading";
const Benefits = () => {
  return (
    <section className="">
      <div className="page-width py-16">
        <div className="flex items-center justify-center flex-col mb-16">
          <Heading
            title="Benefits of Choosing Us for Partnership"
            classes="text-primary"
            iconStyle="text-primary"
            icon={true}
          />
          <p className="p-lg text-center">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
        <Tabs tabs={becomePartnersTabs} />
      </div>
    </section>
  );
};

export default Benefits;
