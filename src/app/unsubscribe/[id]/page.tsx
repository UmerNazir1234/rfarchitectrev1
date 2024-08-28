import Newsletter from "@/components/Newsletter";
import PageError from "@/components/PageError";
import fetchClient from "@/helpers/fetchClient";
import React from "react";
export const runtime = "edge";
export const revalidate = 0;
const getData = async (id: any) => {
  try {
    const response = await fetchClient("/api/unsubscribe/" + id);
    if (response && response?.status == "Success") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const page = async ({ params }: { params: { id: string } }) => {
  const response = await getData(params?.id);
  return (
    <div className="py-8">
      {response ? (
        <>
          <div
            className="min-h-[50vh] flex items-center justify-center flex-col py-6 px-3"
            data-section="error"
          >
            <div className="flex items-center justify-center flex-col text-center">
              <div className="img-wrap mb-5">
                <img
                  src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1724838405/RfTechnologiesWebsite/sad_1_vbjy7c.png"
                  alt="404 Page Banner - Eazyticks"
                  loading="lazy"
                />
              </div>
              <h2 className="mb-5 h3">{`You’ve Been Unsubscribed`}</h2>
              <p className="text-gray-600 text-xl max-w-screen-lg mx-auto">{`We're sorry to see you go. You've successfully unsubscribed from our mailing list. If you ever change your mind, you're always welcome to rejoin. Thank you for being with us!`}</p>
            </div>
          </div>
          <Newsletter />
        </>
      ) : (
        <PageError />
      )}
    </div>
  );
};

export default page;
