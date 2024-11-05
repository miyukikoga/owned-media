import { headers } from "next/headers";
import { SearchResults } from "@/components/templates/SearchResults";
import { fetchArticlesByCategory } from "@/features/articles";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const headersList = await headers();
  const host = headersList.get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticlesByCategory(host, id);

  return <SearchResults articles={articles} />;
}
