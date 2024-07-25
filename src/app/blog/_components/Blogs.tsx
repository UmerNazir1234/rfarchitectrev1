import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="page-width py-12">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
