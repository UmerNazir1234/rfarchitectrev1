import Search from "./Search";
import BlogCategory from "./BlogCategory";
import fetchClient from "@/helpers/fetchClient";
export const runtime = "edge";

const BlogHeader = async () => {
  const response = await fetchClient(`/blog/all`);
  const { data } = response;

  return (
    <div className="relative">
      <div className="page-width">
        <div className="md:!ps-6">
          <Search />
          <BlogCategory data={data} />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
