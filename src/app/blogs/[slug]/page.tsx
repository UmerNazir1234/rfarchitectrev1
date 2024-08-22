import Image from "next/image";
import React from "react";
import CommentForm from "./_components/CommentForm";
import { baseURL, formatDate } from "@/lib/utils";
import fetchClient from "@/helpers/fetchClient";
import { BlogPost } from "@/lib/type";

export const runtime = "edge";


const page = async ({ params }: any) => {
  const response = await fetchClient(`/article/${params?.slug}`);
  const { data } = response;
  const article: BlogPost = data;
  return (
    <section className="relative">
      <div className="max-w-4xl m-auto sm:py-24 py-12 xl:px-6 px-3">
        <h1 className="h2 font-bold mb-6">{article?.title}</h1>
        <div className="flex items-center justify-start gap-3">
          <Image
            src={`${
              article?.author?.image
                ? article?.author?.image
                : "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721904405/RfTechnologiesWebsite/Ellipse_59_rz7akd.png"
            }`}
            alt={article?.author?.name}
            width={50}
            height={50}
            className="w-10 h-10 rounded-full"
          />
          <p className="text-xl font-medium text-gray-600">{article?.author?.name}</p>
        </div>
        <div>
          <p className="text-[#8C8C8C] my-4 text-lg">{formatDate(article?.createdAt)}</p>
        </div>
        <div className="">
          <Image
            src={
              article?.feature_image
                ? article?.feature_image
                : "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721906512/RfTechnologiesWebsite/5757453_1_dnrpij.png"
            }
            alt="Article Image"
            loading="lazy"
            width={900}
            height={600}
            className="object-cover object-center relative z-1"
          />
        </div>
        <div className="mt-10">
          <div
            className="text-left text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: article?.content }}
          />
        </div>
        <CommentForm />
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

export default page;
