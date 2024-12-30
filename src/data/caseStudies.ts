export type Project = {
  id: number;
  title: string;
  problem: string;
  solution: string;
  slug: string;
  url: string;
  tech: string;
  image: string;
};
export type caseStudies = {
  shopify: Project[];
  wordpress: Project[]
};
export const caseStudies: caseStudies = {
  shopify: [
    {
      id: 1,
      title: "Elite ECW",
      problem:
        "Elite ECW faced challenges in streamlining communication between teams and clients, resulting in inefficiencies.",
      solution:
        "We developed a user-friendly platform with integrated tools for seamless collaboration and real-time updates.",
      slug: "elite-ecw",
      url: "https://www.eliteecw.com/",
      tech: "shopify",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1733495124/RfTechnologiesWebsite/iceboxsneakers-12-06-2024_07_24_PM_gewdec.png",
    },
    {
      id: 2,
      title: "Elite ECW 2",
      problem:
        "Elite ECW faced challenges in streamlining communication between teams and clients, resulting in inefficiencies.",
      solution:
        "We developed a user-friendly platform with integrated tools for seamless collaboration and real-time updates.",
      slug: "elite-ecw",
      url: "https://www.eliteecw.com/",
      tech: "shopify",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1733495124/RfTechnologiesWebsite/iceboxsneakers-12-06-2024_07_24_PM_gewdec.png",
    },
  ],
  wordpress: [
    {
      id: 1,
      title: "Elite ECW",
      problem:
        "Elite ECW faced challenges in streamlining communication between teams and clients, resulting in inefficiencies.",
      solution:
        "We developed a user-friendly platform with integrated tools for seamless collaboration and real-time updates.",
      slug: "elite-ecw",
      url: "https://www.eliteecw.com/",
      tech: "wordpress",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1733495124/RfTechnologiesWebsite/iceboxsneakers-12-06-2024_07_24_PM_gewdec.png",
    },
    {
      id: 2,
      title: "Elite ECW 2",
      problem:
        "Elite ECW faced challenges in streamlining communication between teams and clients, resulting in inefficiencies.",
      solution:
        "We developed a user-friendly platform with integrated tools for seamless collaboration and real-time updates.",
      slug: "elite-ecw",
      url: "https://www.eliteecw.com/",
      tech: "wordpress",
      image:
        "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1733495124/RfTechnologiesWebsite/iceboxsneakers-12-06-2024_07_24_PM_gewdec.png",
    },
  ],
};
