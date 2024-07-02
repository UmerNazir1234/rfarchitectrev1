import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div
        className=" py-[180px] flex items-center justify-center bg-cover mx-auto "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg")`,
        }}
      >
        <p className=" text-white text-[50px] md:text-[120px] text-center">
          WHO WE ARE{" "}
          <span className="text-[50px] md:text-[120px] text-[#EDAC18]">?</span>
        </p>
      </div>

      <div
        className=" flex flex-row items-center justify-center bg-cover py-[180px] "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719835637/RfTechnologiesWebsite/Vector_10_xzgp4k.jpg")`,
        }}
      >
        <div>
          <h1 className="text-[#EDAC18] pl-6 text-[50px] mb-8 border-r-4 border-l-4 border-[#EDAC18] inline-block rounded-3xl ">
            About RF Technologies
          </h1>
          <p className=" text-white text-justify pl-6 pr-6 ">
            We are a team of endless innovators striving to connect dots and
            people. A true leading company with sustained commitments to
            your business goals. We are always searching for an experienced
            approach to help brands understand the digital role of solving real
            business problems, finding opportunities, and giving them intangible
            results. In our environment, you will get to learn, earn, grow and
            discover.  When everything gets blurry our vision helps us to stay
            focused. Our staff contains all types of thinkers and innovators
            that are coming from all walks of life. Our success formula drives
            all possible approaches to make a drastic inclusion. We as a team
            serve and deliver the best to our customers.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center items-center m-auto md:max-w-[1240px] h-[580px]">
        <h1 className="text-[#002577] text-justify md:text-nowrap mr-5 ">
          WE ARE RF TECH
        </h1>
        <p className="text-[#333333]  text-center bg-blue-50 border rounded-full ">
          Our company was established in late 2018. Our main office is situated
          in Rawalpindi where our staff is available 24 hours a day. We work as
          a team there and provide them with our maximum efforts. A friendly
          environment enables our clients to completely speak their minds. So we
          can have an idea about what type of work they expected from us. And we
          are always so on with their expectations..
        </p>
      </div>
      <div>
        <h1 className="text-[#EDAC18] text-center mb-8">EXPERIENCE TALK</h1>
        In the era of the 20th century, our lives are dependent on technologies
        and we are bound to these gadgets. These robotic machines have turned
        our lives into survival mode. What would be the success definition in
        our words? Or how we interrupt failures in our lives? Yes, we called
        success to a well-settled business, air-conditioned offices with
        well-furnished furniture. We give importance to materialistic things but
        not to life’s moral and ethical values.  Why do people clap on other
        successes and feel sad about their failures? We have fed our minds that
        success brings prosperity to lives. That is just a stubborn statement
        made by ourselves.
      </div>
      <div className="flex justify-between gap-5">
        <div>
          <h1 className="text-[#002577] text-center mb-8">OUR VISION</h1>
          We wanted to master the world with our latest technologies and
          techniques. Through advancement, in digital means, we aspire to be
          leaders. Satisfaction, innovation, teamwork, and dedication are the
          prime values of our company and these values define who we are, how we
          work, and what we strive for. These core values and modulation reflect
          the internal theme of our company.
        </div>
        <div>
          <h1 className="text-[#002577] text-center mb-8">OUR MISSION</h1>
          How many times have you been changing channels and eventually seen an
          entrepreneur giving advice or what was your feeling when the last time
          you held a magazine and again a successful man gave his intellectual
          ideas? That time you held your breath and wanted to be one of them.
          Our goal is to take advantage of technology for our welfare as well as
          those who are connected with us. We have a whole different perception
          of seeing the world. We consider your values and ethics and try to
          convince you according to them. We have also brought revolutionary
          change to many of our clients’ lives.
        </div>
      </div>
      <div>
        <h1 className="text-[#002577] text-center">WHAT MAKES US <span className="text-[#EDAC18]">UNIQUE</span>?</h1>
        The question that every business holder thinks about at least once is
        why we choose this company over others. Several factors that make us
        unique among other competitors in the industry are :
        {/* icons */}
         As they say,
        knowledge is power. We completely agree with this statement. Not only
        knowledge is power but delivering knowledge at the right time to the
        right people is a superpower. We have a bunch of workers who are
        diverting people’s attention by providing them with the quality they
        want. Our brand speciality is that we are not appealing to everyone but
        only holds on to the target audience. Our brand identity is to promote
        ourselves in the language they want to hear. This adaptation cuts all
        the voices of other competitive companies.
      </div>
      
    </div>
  );
};

export default AboutHero;

