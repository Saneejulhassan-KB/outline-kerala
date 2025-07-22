import NewsClientPage from "./NewsClientPage";
import { GET_CATEGORIES_WITH_NEWS } from "../../../../../queries/getCategoriesWithNews";
import { getServerClient } from "@/lib/apolloServerClient"; // <-- use this!

export async function generateMetadata({ params }) {
  const { slug } = params;
  const gqlClient = getServerClient(); // <-- use this!
  const { data } = await gqlClient.query({
    query: GET_CATEGORIES_WITH_NEWS,
  });

  const newsItems = data?.categories?.flatMap((category) =>
    category.subcategories?.flatMap((subcategory) =>
      (subcategory.news || []).map((newsItem) => ({
        ...newsItem,
        categoryName: category.name,
        subcategoryName: subcategory.name,
      }))
    )
  );
  const post = newsItems?.find((news) => String(news.slug) === String(slug));

  if (!post) return {};

  return {
    title: post.title,
    description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150) || "",
    openGraph: {
      title: post.title,
      description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150) || "",
      images: [
        {
          url: `https://backend.outlinekerala.com/media/${post.image}`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content?.replace(/<[^>]+>/g, "").slice(0, 150) || "",
      images: [`https://backend.outlinekerala.com/media/${post.image}`],
    },
  };
}

export default function Page() {
  return <NewsClientPage />;
}
