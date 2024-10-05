import { NewsItem } from "@/types/news";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const news: NewsItem[] = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news`
  ).then((res) => res.json());
  return news.map((item) => ({
    id: String(item._id),
  }));
}
const NewsDetailsPage = async({ params }: { params: { id: string } }) => {
	const news = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news/${params.id}`).then(
    (res) => res.json()
  )
  return <section className="py-12">
		<article className="max-w-4xl mx-auto p-6 shadow-sm border rounded-lg">
{
	news?.imageUrl&&(
	<div>
		<Image src={news?.imageUrl} alt={news?.title} width={800} height={450} className="rounded-md object-cover" />
	</div>
	)
}
<div className="my-5">
	<h2 className="text-xl my-3 font-semibold">{news?.title}</h2>
	<div className="flex justify-between font-semibold items-center">
		<p>{new Date (news?.published_at).toLocaleDateString() }</p>
		<p>{news?.source}</p>
	</div>
	<p className="my-3 md:text-lg">{news?.description}</p>
</div>
		</article>

	</section>;
};

export default NewsDetailsPage;
