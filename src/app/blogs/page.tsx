import { baseURL } from "@/lib/utils";
import Index from "./_components/Index";

const getData = async () => {
  try {
    const res = await fetch(baseURL + '/api/articles');
    if(!res?.ok){
      return null;
    }else{
      const result = await res?.json();
      //console.log(result);
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

const page = async () => {
  const response = await getData();
  //console.log(response);
  return <Index blogs={response?.data}/>;
};

export default page;
