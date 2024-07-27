import React from "react";
import Button from "./Button";

type HeroProps = {
  image?: string;
  title?: string;
  btnTitle?: string;
  btnIcon?: React.ReactElement;
  href?: string;
  classes?: string;
};

const Hero = ({
  image,
  title,
  btnTitle,
  btnIcon,
  href,
  classes,
}: HeroProps) => {
  return (
    <>
      {image && (
        <section
          className="bg-no-repeat bg-cover bg-center relative z-10"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="flex items-center justify-center flex-col bg-cover bg-center mx-auto min-h-[80vh] max-sm:min-h-[70vh] max-w-6xl">
            {title && (
              <h1
                className={`${
                  (href && "md:mb-16 mb-8") || ""
                } text-white drop-shadow-lg !font-bold text-center text-balance`}
                dangerouslySetInnerHTML={{ __html: title || "" }}
              />
            )}
            {href && (
              <Button
                title={btnTitle}
                icon={btnIcon}
                href={href}
                classes={classes}
              />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
