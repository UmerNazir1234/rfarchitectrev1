import type { imageWithText } from "@/lib/type";

export type IndustryPageContent = {
  title: string;
  description: string;
  canonical: string;
  heroTitle: string;
  ctaDescription: string;
  sections: imageWithText[];
};

const heroImage =
  "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png";

export const industryPages: Record<string, IndustryPageContent> = {
  ecommerce: {
    title: "eCommerce Technology Partner",
    description:
      "Shopify engineering, commerce software, and long-term technology support for eCommerce businesses.",
    canonical: "/industries/ecommerce",
    heroTitle: "Technology for <span class='text-secondary'>eCommerce</span> Businesses",
    ctaDescription:
      "Tell us where your commerce experience or operations need to go next.",
    sections: [
      {
        title: "THE ECOMMERCE CHALLENGE",
        subtitle: "A connected experience from storefront to operations",
        description:
          "Commerce teams need shopping and checkout experiences customers can rely on, while keeping shipping, integrations, and daily operations moving together.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
        imageFirst: true,
      },
      {
        title: "HOW WE SUPPORT COMMERCE",
        subtitle: "The right engineering for your business priorities",
        description:
          "Shopify Engineering supports stores, integrations, and commerce operations. Product & SaaS Development helps build tailored customer or merchant platforms. Custom Software connects workflows and systems. Technology Partnership provides ongoing engineering support as your needs change.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_52_zznfko.png",
        imageFirst: false,
      },
      {
        title: "RELEVANT WORK",
        subtitle: "Commerce implementations",
        description:
          "Jenson Bike Shipping includes a Shopify store with a UPS API integration. Other commerce examples include Elite ECW and Pump Apparel. The available case notes do not report measured business outcomes.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776300/RfTechnologiesWebsite/image_61_bbvb27.png",
        imageFirst: true,
        ctaLink: "/our-work#jensonbikeshipping",
        ctaTitle: "View Case Studies",
      },
    ],
  },
  startups: {
    title: "Startup Product Engineering",
    description:
      "Product and SaaS engineering, custom software, and technology partnership for startups building and growing digital products.",
    canonical: "/industries/startups",
    heroTitle: "From <span class='text-secondary'>Idea to Scale</span>",
    ctaDescription:
      "Share the product you are building and the next milestone you need to reach.",
    sections: [
      {
        title: "THE STARTUP CHALLENGE",
        subtitle: "Make focused product decisions with limited time",
        description:
          "Early product teams need to validate ideas, choose what belongs in an MVP, and build a reliable path to launch without overcommitting time and resources.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1742048278/Coach-Corner-Communication-Strategies-Platform-for-Coaches-Players-03-15-2025_07_09_PM_mlkots.png",
        imageFirst: true,
      },
      {
        title: "HOW WE SUPPORT STARTUPS",
        subtitle: "Engineering aligned to your stage and goals",
        description:
          "Product & SaaS Development supports the journey from idea and prototype through MVP, launch, and scale. Custom Software addresses product-specific workflows. Technology Partnership provides continuity as the team grows. Shopify Engineering supports commerce-led products and businesses.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_62_ci28zj.png",
        imageFirst: false,
      },
      {
        title: "RELEVANT WORK",
        subtitle: "Digital platform examples",
        description:
          "Eazyticks, EZFUNDRAZR, and The Coach Corner are examples of platform work. Their client stage and startup status are not documented, so they are presented as product examples rather than verified startup engagements.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776305/RfTechnologiesWebsite/image_62_ci28zj.png",
        imageFirst: true,
        ctaLink: "/our-work#ezticks",
        ctaTitle: "View Case Studies",
      },
    ],
  },
  smes: {
    title: "Technology Partner for SMEs",
    description:
      "Custom software, Shopify engineering, product development, and ongoing technology partnership for growing businesses.",
    canonical: "/industries/smes",
    heroTitle: "Technology for <span class='text-secondary'>Growing Businesses</span>",
    ctaDescription:
      "Discuss the business workflow, customer experience, or product you want to improve.",
    sections: [
      {
        title: "THE SME CHALLENGE",
        subtitle: "Technology that fits the way your business works",
        description:
          "Growing businesses often need to improve customer experiences and internal workflows while keeping everyday operations running. Off-the-shelf tools may not cover every business requirement.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
        imageFirst: true,
      },
      {
        title: "HOW WE SUPPORT GROWING BUSINESSES",
        subtitle: "Practical solutions, built around your priorities",
        description:
          "Shopify Engineering supports commerce operations. Custom Software addresses specific processes and integrations. Product & SaaS Development helps turn a business idea into a digital product. Technology Partnership keeps engineering support connected to your changing priorities.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776301/RfTechnologiesWebsite/image_57_nuez5n.png",
        imageFirst: false,
      },
      {
        title: "RELEVANT WORK",
        subtitle: "Examples across commerce and digital services",
        description:
          "Ozelu Studio brings photo studio services online, while Jenson Bike Shipping combines Shopify with a UPS API integration. The available notes do not verify client company size or measured outcomes.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720776302/RfTechnologiesWebsite/image_56_i69zku.png",
        imageFirst: true,
        ctaLink: "/our-work#ozelu",
        ctaTitle: "View Case Studies",
      },
    ],
  },
  agencies: {
    title: "Embedded Technology Partner for Agencies",
    description:
      "Extend agency delivery with embedded engineering for Shopify, digital products, SaaS, and custom software.",
    canonical: "/industries/agencies",
    heroTitle: "An Embedded <span class='text-secondary'>Engineering Partner</span>",
    ctaDescription:
      "Tell us about your delivery needs and the engineering skills your team needs to extend.",
    sections: [
      {
        title: "THE AGENCY CHALLENGE",
        subtitle: "Add engineering capacity when delivery needs it",
        description:
          "Agency teams may need specialist engineering capacity to deliver client work, manage changing project demand, and support implementations alongside their core services.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png",
        imageFirst: true,
      },
      {
        title: "HOW WE SUPPORT AGENCY TEAMS",
        subtitle: "Long-term partnership or focused delivery support",
        description:
          "Technology Partnership can extend your team with ongoing engineering support. Shopify Engineering, Product & SaaS Development, and Custom Software provide implementation capability for commerce, digital products, and tailored client workflows.",
        image:
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1742048278/Coach-Corner-Communication-Strategies-Platform-for-Coaches-Players-03-15-2025_07_09_PM_mlkots.png",
        imageFirst: false,
      },
      {
        title: "WORK EXAMPLES",
        subtitle: "No agency-specific case study is documented yet",
        description:
          "The current Work section includes product and engineering examples, but does not identify an agency partnership. We can discuss relevant delivery experience in the context of your project.",
        imageFirst: true,
        ctaLink: "/our-work",
        ctaTitle: "Explore Work",
      },
    ],
  },
};