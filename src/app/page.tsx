import { headers } from "next/headers";
import { ArticleCards } from "@/features/articles/components/ArticleCards";
import { fetchArticles } from "@/features/articles/functions/articles";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticles(host);

  return (
    <div className="mx-3">
      <ArticleCards articles={articles} />
    </div>
  );
}
