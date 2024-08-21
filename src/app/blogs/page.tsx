import Index from "./_components/Index";
import fetchClient from "@/helpers/fetchClient";

export const runtime = "edge";

const page = async () => {
  const response = await fetchClient(`/article/all`);
 console.log(response)
  return <Index blogs={response?.data} />;
};

export default page;
