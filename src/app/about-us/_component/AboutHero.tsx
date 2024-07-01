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
          WHO WE ARE
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
      <h1 className="text-[#002577] text-justify text-center md:text-nowrap mr-5 ">WE ARE RF TECH</h1>
      <p className="text-[#333333]  text-center bg-blue-50 border rounded-full ">
        Our company was established in late 2018. Our main office is situated in
        Rawalpindi where our staff is available 24 hours a day. We work as a
        team there and provide them with our maximum efforts. A friendly
        environment enables our clients to completely speak their minds. So we
        can have an idea about what type of work they expected from us. And we
        are always so on with their expectations..
      </p>
      </div>
    </div>
  );
};

export default AboutHero;
