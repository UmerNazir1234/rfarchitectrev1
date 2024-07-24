import React from "react";

const Benifits = () => {
  return (
    <section>
      <div className="page-width py-16">
        <div className="flex items-center justify-center flex-wrap">
          <div className="basis-1/2 flex min-h-80 bg-[#F8E0E0] border overflow-hidden border-[#404040] rounded-tl-lg">
            <div className="flex items-start justify-center flex-col gap-4 px-24">
              <h4 className="text-[#CC3232]">Hosted Solution</h4>
              <p className="text-xl text-black">
                Shopify is a cloud-based setup and hosted solution where you no
                need to worry about servers or databases. You can access your
                store from anywhere with admin login details & an internet
                connection without any setup.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex min-h-80 bg-[#CAEBFF] border overflow-hidden border-[#404040] rounded-tr-lg">
            <div className="flex items-start justify-center flex-col gap-4 px-24">
              <h4 className="text-[#1270AA]">Security, and Reliability</h4>
              <p className="text-xl text-black">
                Shopify Offers the Best Services In terms of Security and
                provides the best data protection.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex min-h-80 bg-green-200 border overflow-hidden border-[#404040] rounded-bl-lg">
            <div className="flex items-start justify-center flex-col gap-4 px-24">
              <h4>SEO Friendly</h4>
              <p className="text-xl">
                Shopify has the Best built-in SEO Features that are easy to use
                and the best to rank higher on the SERPs.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex min-h-80 bg-[#F9D1F0] border overflow-hidden border-[#404040] rounded-br-lg">
            <div className="flex items-start justify-center flex-col gap-4 px-24">
              <h4 className="text-[#B7419B]">Built-In Marketing Tools</h4>
              <p className="text-xl text-black">
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
