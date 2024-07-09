import React from "react";

type HeroProps = {
  image?: string;
  title?: string;
  colorTitle?: string;
};

const Hero = ({ image, title, colorTitle }: HeroProps) => {
  return (
    <>
      {image && (
        <section
          className="bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="flex items-center justify-center bg-cover bg-center mx-auto min-h-[80vh] max-sm:min-h-[70vh] page-width">
            <h1 className="text-white drop-shadow-lg">
              {title} <span className="text-[#EDAC18]">{colorTitle}</span>
            </h1>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
