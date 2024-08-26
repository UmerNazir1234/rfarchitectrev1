import PageError from "@/components/PageError";
import Index from "./_components/Index";
import fetchClient from "@/helpers/fetchClient";

export const runtime = "edge";
export const revalidate = 0;

const page = async () => {
  const response = await fetchClient(`/article/all`);
  //console.log(response);
  if(!response) return <PageError/>;
  return <Index blogs={response?.articles} />;
};

export default page;
