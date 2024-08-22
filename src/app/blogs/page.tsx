import Index from "./_components/Index";
import fetchClient from "@/helpers/fetchClient";

export const runtime = "edge";
export const revalidate = 0;

const page = async () => {
  const response = await fetchClient(`/article/all`);
  //console.log(response?.data)
  return <Index blogs={response?.data} />;
};

export default page;
