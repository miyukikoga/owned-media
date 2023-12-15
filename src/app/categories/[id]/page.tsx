import { headers } from "next/headers";
import { SearchResults } from "@/components/templates/SearchResults";
import { fetchArticlesByCategory } from "@/features/articles";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const categoryId = params.id;
  const host = headers().get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticlesByCategory(host, categoryId);

  return <SearchResults articles={articles} />;
}
