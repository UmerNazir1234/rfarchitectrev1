import React from "react";
import Heading from "./Heading";
import Button from "./Button";

const Benifits = () => {
  return (
    <section>
      <div className="page-width sm:pt-16 sm:pb-32 max-sm:py-16">
        <div className="flex items-center justify-center mb-16">
          <Button
            title="Care features"
            enableIcons={true}
            iconStyle="stroke-primary"
          />
        </div>
        {/* <div className="flex items-center justify-center mb-8">
          <Heading
            title="Why Shopify"
            classes="text-primary"
            icon={true}
            iconStyle="stroke-primary"
          />
        </div> */}
        <div className="flex relative z-50 items-stretch justify-center flex-wrap shadow-lg max-sm:rounded-xl border border-[#404040] rounded-xl">
          <div className="sm:basis-1/2 relative z-1 basis-full flex  bg-[#F8E0E0] border xl:px-24 lg:px-12 px-8 xl:py-24 lg:py-12 py-6  overflow-hidden border-[#404040] max-sm:min-h-48 sm:rounded-tl-xl max-sm:rounded-t-xl">
            <div className="flex items-start justify-start flex-col gap-4">
              <h4 className="text-[#CC3232]">Hosted Solution</h4>
              <p className="sm:text-xl text-lg text-black">
                Shopify is a cloud-based setup and hosted solution where you no
                need to worry about servers or databases. You can access your
                store from anywhere with admin login details & an internet
                connection without any setup.
              </p>
            </div>
          </div>
          <div className="sm:basis-1/2 relative z-0 basis-full flex  bg-[#CAEBFF] border xl:px-24 lg:px-12 px-8 xl:py-24 lg:py-12 py-6  overflow-hidden border-[#404040] max-sm:min-h-48 sm:rounded-tr-xl">
            <div className="flex items-start justify-start flex-col gap-4">
              <h4 className="text-[#1270AA]">Security, and Reliability</h4>
              <p className="sm:text-xl text-lg text-black">
                Shopify Offers the Best Services In terms of Security and
                provides the best data protection.
              </p>
            </div>
          </div>
          <div className="sm:basis-1/2 relative z-0 basis-full flex  bg-green-200 border  xl:px-24 lg:px-12 px-8 xl:py-24 lg:py-12 py-6 overflow-hidden border-[#404040] max-sm:min-h-48 sm:rounded-bl-xl">
            <div className="flex items-start justify-start flex-col gap-4">
              <h4 className="text-[#0E975E]">SEO Friendly</h4>
              <p className="sm:text-xl text-lg text-black ">
                Shopify has the Best built-in SEO Features that are easy to use
                and the best to rank higher on the SERPs.
              </p>
            </div>
          </div>
          <div className="sm:basis-1/2 relative z-0 basis-full flex bg-[#F9D1F0] border xl:px-24 lg:px-12 px-8 xl:py-24 lg:py-12 py-6  overflow-hidden border-[#404040] max-sm:min-h-48 sm:rounded-br-xl max-sm:rounded-b-xl">
            <div className="flex items-start justify-start flex-col gap-4">
              <h4 className="text-[#B7419B]">Built-In Marketing Tools</h4>
              <p className="sm:text-xl text-lg text-black">
                Shopify has built-in marketing tools which make it lower the
                cast on start-ups. It allows us to edit page meta title, meta
                description, meta URL, make pages visible and invisible, and
                redirect to any URL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
