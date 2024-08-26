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
    title: `WHO WE ARE <span class="text-secondary">?</span>`,
    image: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg`,
  },
  about: {
    title: "about rf technologies",
    description: `We are a team of endless innovators striving to connect dots and
            people. A <span class="!italic text-secondary">true leading company </span>
            with sustained commitments to your
            <span class='!italic text-secondary'>business goals </span>. We are always
            searching for an experienced approach to help brands understand the
            digital role of solving real business problems,
            <span class="!italic text-secondary">finding opportunities </span>, and
            giving them intangible results. In our environment, you will get to
            learn, earn, grow and discover. When everything gets blurry our vision
            helps us to <span class="!italic text-secondary">stay focused</span>. Our
            staff contains all types of thinkers and innovators that are coming
            from all walks of life. Our success formula drives all possible
            approaches to make a drastic inclusion. We as a team serve and
            <span class="!italic text-secondary">deliver the best</span> to our
            customers.`,
    dotsImage: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719912842/RfTechnologiesWebsite/Group_1597883856_r26khq.png`,
    rfLogo: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png`,
    letsItImage: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719913174/RfTechnologiesWebsite/Let_s_get_IT_done_isjw4p.png`,
  },
  wearerf: {
    title: "we are rf tech",
    description:
      "Our company was established in late 2018. Our main office is situated in Rawalpindi where our staff is available 24 hours a day. We work as a team there and provide them with our maximum efforts. A friendly environment enables our clients to completely speak their minds. So we can have an idea about what type of work they expected from us. And we are always so on with their expectations.",
  },
  experience: {
    title: "Experience Talk",
    description: `In the era of the 20th century, our lives are dependent on technologies and we are bound to these gadgets. These robotic machines have turned our lives into survival mode.</br></br>
    What would be the success definition in our words? Or how we interrupt failures in our lives? Yes, we called success to a well-settled business, air-conditioned offices with well-furnished furniture. We give importance to materialistic things but not to life's moral and ethical values.
    </br></br>
    Why do people clap on other successes and feel sad about their failures? We have fed our minds that success brings prosperity to lives. That is just a stubborn statement made by ourselves.`,
  },
  vision: {
    ourvision: {
      id: 1,
      title: "our vision",
      detials:
        "We wanted to master the world with our latest technologies and techniques. Through advancement, in digital means, we aspire to be leaders. Satisfaction, innovation, teamwork, and dedication are the prime values of our company and these values define who we are, how we work, and what we strive for. These core values and modulation reflect the internal theme of our company.",
    },
    ourmission: {
      id: 1,
      title: "our mission",
      detials:
        "How many times have you been changing channels and eventually seen an entrepreneur giving advice or what was your feeling when the last time you held a magazine and again a successful man gave his intellectual ideas? That time you held your breath and wanted to be one of them. Our goal is to take advantage of technology for our welfare as well as those who are connected with us. We have a whole different perception of seeing the world. We consider your values and ethics and try to convince you according to them. We have also brought revolutionary change to many of our clients’ lives.",
    },
    image: `https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720612053/Vector_2_ds4oyb.png`,
  },
  projectSubmission: {
    title: "Submit Your Project",
    details:
      "Let us know your requirements and we’ll get back to you as soon as possible.",
    email: "info@rftechnologies.com",
    number: "00 000 0000",
    btnurl: "/contact-us",
    btntitle: "submit your project",
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
