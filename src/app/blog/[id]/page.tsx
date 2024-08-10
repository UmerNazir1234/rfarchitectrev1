import Image from "next/image";
import React from "react";
import CommentForm from "./_components/CommentForm";

const Page = ({ params }:any) => {
  
  return (
    <section className="relative">
      <div className="max-w-4xl m-auto sm:py-24 py-12 xl:px-6 px-3">
        <div>
          <h1 className="h2 font-bold mb-6">
            UI & UX micro tips: best of the best
          </h1>
          <div className="flex items-center justify-start gap-3">
            <Image
              src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png`}
              alt="Admin"
              width={50}
              height={50}
            />
            <p className="text-2xl font-medium">Jacob</p>
          </div>
          <div>
            <p className="text-[#8C8C8C] my-4 text-lg">July 19, 2024</p>
          </div>
          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906512/RfTechnologiesWebsite/5757453_1_dnrpij.png"
              }
              alt="Article Image"
              loading="lazy"
              width={900}
              height={600}
              className="object-cover object-center relative z-50"
            />
          </div>
          <div className="mt-10">
            <p className="text-xl text-center">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
              <br />
              <br /> Curabitur vel bibendum lorem. Morbi convallis convallis
              diam sit amet lacinia. Aliquam in elementum tellus. Nam pulvinar
              blandit velit, id condimentum diam faucibus at. Aliquam lacus
              nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque
              mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed
              vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra
              ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
              tincidunt tempor laoreet, nibh elit sollicitudin felis, eget
              feugiat sapien diam nec nisl. Aenean gravida turpis nisi,
              consequat dictum risus dapibus a. Duis felis ante, varius in neque
              eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet
              cursus. Etiam pulvinar purus vitae justo pharetra consequat.
              Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id
              tempus aliquet
              <br />
              <br />
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
              felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
              Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
              magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
              nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
              varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
              eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
              venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            </p>
          </div>
          <CommentForm />
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721909694/RfTechnologiesWebsite/Trade_Mark-02_2_ppmsma.svg`}
        alt="Rf Icon"
        loading="lazy"
        width={417}
        height={374}
        className="absolute top-8 right-0 max-md:!w-48 max-sm:!h-36"
      />
    </section>
  );
};

export default Page;
