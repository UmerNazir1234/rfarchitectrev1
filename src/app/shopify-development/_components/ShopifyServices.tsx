import React from "react";
import ShopifyServiceCards from "./ShopifyServiceCards";
import Button from "@/components/Button";
type props = {
  data: {
    roundCta: string;
    cards: {
      id: number;
      icon: string;
      title: string;
      content: string;
    }[];
  };
};
const ShopifyServices = ({ data }: props) => {
  return (
    <section>
      <div className="page-width sm:pt-32 max-sm:py-12">
        <div className="flex items-center justify-center mb-16">
          <Button
            title={data?.roundCta}
            href="/about-us"
            classes="bg-secondary"
            enableIcons={true}
          />
        </div>
        <div className="flex items-stretch gap-3 justify-center max-lg:flex-wrap ">
          <ShopifyServiceCards
            title="In-Depth Analysis"
            image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721809181/RfTechnologiesWebsite/Mask_group_54_xnciip.svg"
            details="Our Shopify Seo Experts take an extensive analysis of your Shopify store to increase conversion rate optimization and average order value to increase sales of your store."
            classes="border-[#C96885] border bg-[#EFE2F2]"
          />
          <ShopifyServiceCards
            image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721809164/RfTechnologiesWebsite/Mask_group_53_vu95k4.svg"
            title="Domain Knowledge"
            details="Our Shopify Experts are deeply knowledgeable about all situations of Shopify architecture and language structure."
            classes="border-[#C96885] border bg-[#EFE2F2]"
          />
          <ShopifyServiceCards
            image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721749995/RfTechnologiesWebsite/Mask_group_1_yt5ra8.png"
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
