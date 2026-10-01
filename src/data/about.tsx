import { BiCheckShield } from "react-icons/bi";
import { FcProcess } from "react-icons/fc";
import { PiHandshakeLight } from "react-icons/pi";
import { SiFireship } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import { ReactNode } from "react";

// Define types for the content structure
interface Banner {
  title: string;
  image: string;
}

interface About {
  title: string;
  description: string;
  dotsImage: string;
  rfLogo: string;
  letsItImage: string;
}

interface Wearerf {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  description: string;
}

interface VisionDetails {
  id: number;
  title: string;
  details: string;
}

interface Vision {
  ourvision: VisionDetails;
  ourmission: VisionDetails;
  image: string;
}

interface ProjectSubmission {
  title: string;
  details: string;
  email: string;
  number: string;
  btnurl: string;
  btntitle: string;
}

interface Tab {
  label: string;
  content: string;
  icon: ReactNode;
}

interface Tabs {
  [key: number]: Tab;
}

interface Content {
  banner: Banner;
  about: About;
  wearerf: Wearerf;
  experience: Experience;
  vision: Vision;
  projectSubmission: ProjectSubmission;
  tabs: Tabs;
}

const content = {
  banner: {
    title: `TECHNOLOGY PARTNER FOR <span class="text-secondary">DIGITAL PRODUCTS & COMMERCE</span>`,
    image: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg`,
  },
  about: {
      title: "technology partner for digital products and commerce",
      description: `We do not start with a software brief and assume the answer. <span class="!italic text-secondary">We solve business problems using technology.</span> That starts with understanding how your business works, what your customers need, and what progress should look like.
        <br/><br/>This understanding guides our work across the Shopify ecosystem, beyond storefronts; product engineering from idea and prototype through MVP, launch, and scale; and long-term partnerships where our engineers work alongside your team. We recommend the right solution for the challenge, then stay involved as it is built, launched, supported, and grown.`,
    dotsImage: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719912842/RfTechnologiesWebsite/Group_1597883856_r26khq.png`,
    rfLogo: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png`,
    letsItImage: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719913174/RfTechnologiesWebsite/Let_s_get_IT_done_isjw4p.png`,
  },
  wearerf: {
    title: "we are rf technologies",
    description:
      "Founded in 2018, RF Technologies brings product thinking and engineering together. We work closely with clients to understand their business, align on the outcome they need, and build a partnership that can continue beyond launch.",
  },
  experience: {
    title: "Business understanding comes first",
    description: `Building software is not the goal by itself. The goal is to solve a real business problem using technology.</br></br>
    Before recommending an approach, we learn how the business operates, where customers or teams encounter friction, and what a useful result would mean. That context helps us choose what to build, what to integrate, and what not to overcomplicate.</br></br>
    We bring the same business-first thinking to commerce engineering and digital products, and stay accountable through delivery and ongoing support.`,
  },
  vision: {
    ourvision: {
      id: 1,
      title: "our vision",
      detials:
        "To be a trusted technology partner for digital products and commerce, helping organizations turn business challenges into useful, lasting digital experiences.",
    },
    ourmission: {
      id: 1,
      title: "our mission",
      detials:
        "To understand each business before recommending a solution, then bring the right engineering to build, launch, and support it. From Shopify ecosystem work to products developed from idea through scale, we aim to solve the problem at hand and grow with the teams we serve.",
    },
    image: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720612053/Vector_2_ds4oyb.png`,
  },
  projectSubmission: {
    title: "Discuss Your Project",
    details:
      "Tell us about the business challenge, digital product, or commerce opportunity you want to move forward.",
    email: "info@rftechnologies.com",
    number: "00 000 0000",
    btnurl: "/contact-us",
    btntitle: "Discuss Your Project",
  },
  tabs: {
    1: {
      label: "Knowledge",
      content:
        "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
      icon: <TbBulb className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
    },
    2: {
      label: "Promise",
      content:
        "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
      icon: <PiHandshakeLight className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
    },
    3: {
      label: "Consistency",
      content:
        "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
      icon: <FcProcess className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
    },
    4: {
      label: "Authenticity",
      content:
        "As they say, knowledge is power. We completely agree with this statement. Not only knowledge is power but delivering knowledge at the right time to the right people is a superpower. We have a bunch of workers who are diverting people’s attention by providing them with the quality they want. Our brand speciality is that we are not appealing to everyone but only holds on to the target audience. Our brand identity is to promote ourselves in the language they want to hear. This adaptation cuts all the voices of other competitive companies.",
      icon: <BiCheckShield className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
    },
    5: {
      label: "Passion",
      content: "As they.",
      icon: <SiFireship className="lg:!w-12 lg:!h-12 !w-10 !h-10" />,
    },
  },
};

export default content;
