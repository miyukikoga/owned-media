import { headers } from "next/headers";
import { ArticleDetail } from "@/components/templates/ArticleDetail";
import { fetchArticle } from "@/features/article";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const articleId = params.id;
  const host = headers().get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const article = await fetchArticle(host, articleId);

  return <ArticleDetail article={article} />;
}
