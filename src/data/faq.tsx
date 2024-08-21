interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface Section {
  title: string;
  items: FAQItem[];
}

interface Content {
  faq: Section;
  shopify: Section;
  wordpress: Section;
  grapicDesigning: Section;
  mobileApp: Section;
  webdevelopment: Section;
  digitalmarketing: Section;
  seo: Section;
  crm: Section;
  csd: Section;
}

const content: Content = {
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "What is RF Technologies?",
        answer:
          "RF Technologies is a software company which provides custom software development, e-commerce development, digital marketing and Shopify/web development services.",
      },
      {
        id: 2,
        question: "What services does RF Technologies offer?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "What makes your web development services stand out?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "How can I become a partner with RF Technologies?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  shopify: {
    title: "Shopify Services",
    items: [
      {
        id: 1,
        question: "What type of Shopify services do you provide?",
        answer:
          "We provide the following services: store setup, customization, custom theme, private app development, maintenance, and updates.",
      },
      {
        id: 2,
        question: "Can you customize my existing Shopify store?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Do you provide support after the Shopify store is live?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "Can you help with Shopify app integrations?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  wordpress: {
    title: "Wordpress",
    items: [
      {
        id: 1,
        question: "What is included in your WordPress development services?",
        answer: "What is included in your WordPress development services?",
      },
      {
        id: 2,
        question: "How long does it take to develop a WordPress site?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Can you redesign an existing WordPress site?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question:
          "Do you provide support and maintenance after the site is live?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  grapicDesigning: {
    title: "Grapic Designing",
    items: [
      {
        id: 1,
        question: "What graphic design services do you offer?",
        answer:
          "We offer a full range of graphic design services, including brand identity design, logo creation, marketing materials, web graphics, and custom illustrations. Our goal is to provide cohesive and impactful visual solutions tailored to your needs.",
      },
      {
        id: 2,
        question: "How long does it take to complete a graphic design project?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Can you help with redesigning an existing brand or logo?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question:
          "What is your process for working on a graphic design project?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  mobileApp: {
    title: "Mobile App",
    items: [
      {
        id: 1,
        question: "What mobile app development services do you offer?",
        answer:
          "We provide end-to-end mobile app development services, including custom design, development, integration, testing, deployment, and ongoing maintenance for both iOS and Android platforms.",
      },
      {
        id: 2,
        question: "How long does it take to develop a mobile app?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Why choose RF Technologies mobile app development services?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  webdevelopment: {
    title: "Web Development",
    items: [
      {
        id: 1,
        question: "What mobile app development services do you offer?",
        answer:
          "We provide end-to-end mobile app development services, including custom design, development, integration, testing, deployment, and ongoing maintenance for both iOS and Android platforms.",
      },
      {
        id: 2,
        question: "How long does it take to develop a mobile app?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Why choose RF Technologies mobile app development services?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  digitalmarketing: {
    title: "Digital Marketing",
    items: [
      {
        id: 1,
        question: "What digital marketing services do you offer?",
        answer:
          "We provide a comprehensive range of digital marketing services, including SEO, PPC advertising, content marketing, social media marketing, email marketing, and analytics. Each service is tailored to drive growth and achieve your specific business goals.",
      },
      {
        id: 2,
        question:
          "How do you develop a digital marketing strategy for my business?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question:
          "How do you measure the success of digital marketing campaigns?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question:
          "How long does it take to see results from digital marketing efforts?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  seo: {
    title: "Search Engine Optimization",
    items: [
      {
        id: 1,
        question: "What SEO services do you offer?",
        answer:
          "We provide a comprehensive range of SEO services, including keyword research, on-page optimization, technical SEO, content creation, link building, and performance tracking, all tailored to enhance your online visibility and drive traffic.",
      },
      {
        id: 2,
        question: "How long does it take to see results from SEO?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "Do you offer ongoing SEO support?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "How do you measure the success of an SEO campaign?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  crm: {
    title: "CRM",
    items: [
      {
        id: 1,
        question: "How does CRM software enhance customer relationships?",
        answer:
          "CRM software enhances customer relationships by providing a detailed view of interactions, preferences, and history. This allows you to personalize communication and offer tailored services, improving customer satisfaction and loyalty.",
      },
      {
        id: 2,
        question: "Can CRM software help increase sales?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "What types of data can CRM software analyze?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question: "How does CRM software improve customer service?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
  csd: {
    title: "custom software development",
    items: [
      {
        id: 1,
        question: "What is custom software development?",
        answer:
          "Custom software development involves creating tailor-made software solutions designed to meet your specific business needs and objectives. Unlike off-the-shelf solutions, custom software is built from scratch to address unique challenges and requirements.",
      },
      {
        id: 2,
        question:
          "How do you ensure the software aligns with my business goals?",
        answer:
          "The timeline for a graphic design project varies based on its complexity and scope. Typically, projects can take from a few days to several weeks. We provide a detailed timeline after discussing your specific requirements.",
      },
      {
        id: 3,
        question: "What is the typical timeline for a custom software project?",
        answer:
          "Yes, we specialize in redesigning existing brands and logos to refresh their look and better align with your current business goals and market trends. Our team will work closely with you to update and enhance your brand’s visual identity.",
      },
      {
        id: 4,
        question:
          "Do you offer support and maintenance after the software is delivered?",
        answer:
          "Our process includes understanding your needs, developing initial concepts, refining designs based on your feedback, and delivering the final product. We ensure clear communication and collaboration throughout the project to achieve the best results.",
      },
    ],
  },
};

export { content };
