import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { NewsItem } from "@/types/news";

export default async function Home() {
  const data = await fetch("https://news-api-next-js-kappa.vercel.app/api/news");
  const response = await data.json();
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="my-12">
        <h2 className="font-bold text-2xl text-gray-900">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
          {response.slice(0,3).map((item:NewsItem)=>(
          <NewsCard key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <NewsLetter/>
      </div>
    </>
  );
}
