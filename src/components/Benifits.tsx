import React from "react";
import Heading from "./Heading";
import Button from "./Button";
type props = {
  data: {
    id: number;
    title: string;
    content: string;
    bgClr: string;
    titleClr: string;
  }[];
};
const Benifits = ({ data }: props) => {
  return (
    <section>
      <div className="page-width sm:pt-16 sm:pb-32 max-sm:py-8">
        <div className="flex items-center justify-center sm:mb-16 mb-8">
          <Button
            title="Care features"
            enableIcons={true}
            iconStyle="stroke-primary"
          />
        </div>
   

        <div className="flex relative z-50 items-stretch justify-center flex-wrap shadow-lg max-sm:rounded-xl border border-[#404040] rounded-xl">
          {data?.map((item) => {
            return (
              <div
                key={item?.id}
                style={{ backgroundColor: item?.bgClr }}
                className={`sm:basis-1/2 relative z-1 basis-full flex  bg-[${
                  item?.bgClr
                }] border xl:px-24 lg:px-12 px-8 xl:py-24 lg:py-12 py-6 overflow-hidden border-[#404040] max-sm:min-h-48 ${
                  item?.id == 1 && " sm:rounded-tl-xl max-sm:rounded-t-xl "
                }${item?.id == 2 && " sm:rounded-tr-xl "}${
                  item?.id == 3 && " sm:rounded-bl-xl "
                }${item?.id == 4 && " sm:rounded-br-xl max-sm:rounded-b-xl "}`}
              >
                <div className="flex items-start justify-start flex-col gap-4">
                  <h4
                    className={`text-[${item?.titleClr}] !capitalize`}
                    style={{ color: item?.titleClr }}
                  >
                    {item?.title}
                  </h4>
                  <p className="sm:text-xl text-lg text-black">
                    {item?.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
