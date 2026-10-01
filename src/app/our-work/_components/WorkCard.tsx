import Image from "next/image";
import React from "react";
import { Work } from "@/lib/type";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

type WorkProps = {
  work: Work[];
};

const WorkCard = ({ work }: WorkProps) => {
  return (
    <section className="md:!-mt-20">
      <div>
        {work?.map((item) => {
          return (
            <div
              key={item?.id}
              className={`w-full block  ${item?.id == 1 ? "-mt-14 relative z-10" : "-mt-[2px]"
                }`}
            >

              {item?.id === 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 53"
                  fill="none"
                  className="w-full block -mb-1 top-svg"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1766_1337)" className="w-full">
                    <path
                      d="M667 0H0V53H762.5C754.1 53 746.333 49 743.5 47C728.333 36 696.1 12.6 688.5 7C680.9 1.4 671 0 667 0Z"
                      fill={item?.topBgFirstClr || ""}
                    />
                    <path
                      d="M762.5 53L1440 53.5V0.5L667.034 2.28882e-05C675.421 0.0108719 683.171 4.00272 686 6C701.167 17 733.4 40.4 741 46C748.6 51.6 758.5 53 762.5 53Z"
                      fill={item?.topBgSecondClr || ""}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1766_1337">
                      <rect width="1440" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              <div
                key={item?.id}
                id={`${item?.workId}`}
                className={`md:flex gap-6  px-12 max-md:px-4 max-md:pb-6 items-center justify-evenly max-md:flex-wrap w-full ${item?.imageFirst ? "flex-row" : "flex-row-reverse"
                  }`}
                style={{
                  color: item?.textColor || "white", // Default to white
                  backgroundColor: item?.color || "#28292D", // Default background
                }}
              >
                <div className="basis-full md:basis-1/2 flex-grow">
                  <div className="relative xl:h-[650px] lg:h-[500px] md:h-[450px] h-[250px] w-auto">
                    <Image
                      src={item?.image}
                      loading="lazy"
                      fill
                      alt={`${item?.title} image`}
                      className="object-contain max-w-full block object-center"
                    />
                  </div>
                </div>
                <div className="flex basis-full md:basis-1/2 page-width items-start gap-4 justify-start flex-col max-md:items-center ">
                  <h2 className="text-4xl md:text-6xl">{item?.title}</h2>
                  <p className="font-nunito max-md:text-center !leading-normal text-lg md:text-xl">
                    {item?.text}
                    {item?.caseStudy && (
                      <>
                        <br />
                        <strong>Problem:</strong> {item.caseStudy.problem}
                        <br />
                        <strong>Approach:</strong> {item.caseStudy.approach}
                        <br />
                        <strong>Solution:</strong> {item.caseStudy.solution}
                        <br />
                        <strong>Business impact:</strong> {item.caseStudy.businessImpact}
                      </>
                    )}
                  </p>
                  <h4 className=" text-lg md:text-xl max-sm:text-center font-nunito">
                    {item?.subtitle}
                  </h4>
                  {item?.link && (
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-lg md:text-xl max-sm:text-center font-nunito text-secondary font-bold border-b-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 py-2 px-4 mb-5">
                      View Case Study <GoArrowUpRight />
                    </Link>
                  )}
                </div>
              </div>

              {item?.imageFirst ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 53"
                  fill="none"
                  className="w-full block -mt-1 bottom-svg"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1766_1348)">
                    <path
                      d="M667 53.5H0V0.5H762.5C754.1 0.5 746.333 4.5 743.5 6.5C728.333 17.5 696.1 40.9 688.5 46.5C680.9 52.1 671 53.5 667 53.5Z"
                      fill={item?.bottomBgFirstClr || "#28292D"}
                    />
                    <path
                      d="M762.5 0.5L1440 0V53L667.034 53.5C675.421 53.4891 683.171 49.4973 686 47.5C701.167 36.5 733.4 13.1 741 7.5C748.6 1.9 758.5 0.5 762.5 0.5Z"
                      fill={item?.bottomBgSecondClr || "#f85431"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1766_1348">
                      <rect width="1440" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 53"
                  fill="none"
                  className="w-full block -mt-1 bottom-svg"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1766_1337)" className="w-full">
                    <path
                      d="M667 0H0V53H762.5C754.1 53 746.333 49 743.5 47C728.333 36 696.1 12.6 688.5 7C680.9 1.4 671 0 667 0Z"
                      fill={item?.bottomBgFirstClr || ""}
                    />
                    <path
                      d="M762.5 53L1440 53.5V0.5L667.034 2.28882e-05C675.421 0.0108719 683.171 4.00272 686 6C701.167 17 733.4 40.4 741 46C748.6 51.6 758.5 53 762.5 53Z"
                      fill={item?.bottomBgSecondClr || ""}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1766_1337">
                      <rect width="1440" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default WorkCard;
