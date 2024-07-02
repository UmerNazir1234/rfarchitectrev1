
import ServiceCard from "./_components/ServiceCard";
import FaqSection from "./faq/FaqSection";
import NewsLetter from "./faq/NewsLetter";

export default function Home() {
  return (
    <>
    <h1 className="flex justify-center items-center font-bold">
      IT SOLUTIONS & SERVICES
    </h1>
    <ServiceCard />
    <FaqSection />
    <NewsLetter />
    
    </>
  );
}
