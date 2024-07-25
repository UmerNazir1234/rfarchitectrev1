import React from "react";
import Search from "./Search";
import BlogCategory from "./BlogCategory";

const data = [
  {
    id: 1,
    title: "For You",
  },
  {
    id: 2,
    title: "Software Development",
  },
  {
    id: 3,
    title: "Design",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
  },
  {
    id: 5,
    title: "Mental Health",
  },
  {
    id: 6,
    title: "Technology",
  },
  {
    id: 7,
    title: "Self Improvement",
  },
];

const BlogHeader = () => {
  return (
    <section className="">
      <div className="page-width ">
        <div className="md:!ps-6">
          <Search />
          <BlogCategory data={data} />
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
