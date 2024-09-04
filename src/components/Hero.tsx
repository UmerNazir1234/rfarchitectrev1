import React from "react";
import Button from "./Button";
import Image from "next/image";

type HeroProps = {
  image?: string;
  title?: string;
  btnTitle?: string;
  btnIcon?: React.ReactElement;
  href?: string;
  classes?: string;
  logo?: boolean;
};

const Hero = ({
  image,
  title,
  btnTitle,
  btnIcon,
  href,
  logo = false,
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
          <div className="flex items-center md:pt-32 pt-24 px-3 flex-col bg-cover bg-center mx-auto min-h-[80vh] max-sm:min-h-[70vh] max-w-8xl">
            {title && (
              <>
                <h1
                  className={`${
                    (href && "md:mb-10 mb-8") || ""
                  } text-white drop-shadow-lg !font-bold text-center text-balance`}
                  dangerouslySetInnerHTML={{ __html: title || "" }}
                />
                <div>
                  {logo && (
                    <Image
                      src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722248970/RfTechnologiesWebsite/pexels-sora-shimazaki-5673488_2_lptkta.svg`}
                      alt="Rf Technologies Logo"
                      width={419}
                      height={167}
                      loading="lazy"
                    />
                  )}
                </div>
              </>
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
