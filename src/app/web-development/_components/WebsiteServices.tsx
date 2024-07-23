import React from "react";
import WebServiceCard from "./WebServiceCard";

const WebsiteServices = () => {
  return (
    <section>
      <div className="page-width sm:pt-32 max-sm:py-12">
        <div className="flex items-center gap-3 justify-center max-lg:flex-wrap ">
          <WebServiceCard
            title="Front End development"
            details="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
            classes="bg-[#D98200]"
          />
          <WebServiceCard
            title="Back End development"
            details="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
            classes="bg-[#710583]"
          />
          <WebServiceCard
            title="Responsive Website Design"
            details="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
            classes="bg-[#00923A]"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteServices;
