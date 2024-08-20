import { baseURL } from "@/lib/utils";
import Index from "./_components/Index";

export const runtime = "edge";

const getData = async () => {
  try {
    const res = await fetch(
      "https://rftechnologies-ajd6pr9pi-rf-technologies-projects.vercel.app/" +
        "/article/all"
    );

    if (!res?.ok) {
      return null;
    } else {
      const result = await res?.json();

      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const page = async () => {
  const response = await getData();
  // console.log(response);
  return <Index blogs={response?.data} />;
};

export default page;
