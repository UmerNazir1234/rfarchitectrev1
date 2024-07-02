import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg")`,
      }}
    >
      <div className="flex items-center justify-center bg-cover bg-center mx-auto min-h-[80vh] max-sm:min-h-[70vh] page-width">
        <h1 className="text-white drop-shadow-lg">
          WHO WE ARE <span className="text-[#EDAC18]">?</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
