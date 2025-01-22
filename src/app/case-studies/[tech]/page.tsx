import { redirect } from "next/navigation";
export const runtime = "edge";
const page = () => {
  return redirect("/");
};

export default page;
