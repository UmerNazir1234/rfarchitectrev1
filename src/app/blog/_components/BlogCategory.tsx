import React from "react";
type categoryProps = {
  title?: string;
  id?: number;
};
type props = {
  data: categoryProps[];
};
const BlogCategory = ({ data }: props) => {
  return (
    <div className="">
      <div className="flex items-center justify-start flex-wrap lg:gap-16 md:gap-8 gap-6 py-6">
        {data?.map((item) => (
          <p key={item?.id} className="md:text-xl text-sm text-medium">
            {item?.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
