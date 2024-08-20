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
          <p className="p-lg text-center">Choosing us as your partner means gaining a dedicated team committed to your success. We bring expert insights, innovative solutions, and personalized support to drive your business forward and achieve outstanding results together.</p>
        </div>
        <Tabs tabs={becomePartnersTabs} />
      </div>
    </section>
  );
};

export default Benefits;
