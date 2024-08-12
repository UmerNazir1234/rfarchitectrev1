import Index from "./_components/Index";

const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/articles');
    console.log(res)
    if(!res?.ok){
      return null;
    }else{
      const result = await res?.json();
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const response = await getData();
  console.log(response)
  return <Index />;
};

export default page;
