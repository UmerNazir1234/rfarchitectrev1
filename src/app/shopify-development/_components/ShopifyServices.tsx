import React from "react";
import ShopifyServiceCards from "./WebServiceCards";

const ShopifyServices = () => {
  return (
    <section>
      <div className="page-width sm:pt-32 max-sm:py-12">
        <div className="flex items-stretch gap-3 justify-center max-lg:flex-wrap ">
          <ShopifyServiceCards
            title="In-Depth Analysis"
            details="Our Shopify Seo Experts take an extensive analysis of your Shopify store to increase conversion rate optimization and average order value to increase sales of your store."
            classes="border-[#C96885] border bg-[#EFE2F2]"
          />
          <ShopifyServiceCards
            title="Domain Knowledge"
            details="Our Shopify Experts are deeply knowledgeable about all situations of Shopify architecture and language structure."
            classes="border-[#C96885] border bg-[#EFE2F2]"
          />
          <ShopifyServiceCards
            title="Effective Solutions"
            details="We combine Shopify's powerful ability with our creativity to build your online store with a beautiful and delightful customer experience."
            classes="border-[#C96885] border bg-[#EFE2F2]"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopifyServices;
