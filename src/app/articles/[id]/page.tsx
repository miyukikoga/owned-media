import { headers } from "next/headers";
import { ArticleDetail } from "@/components/templates/ArticleDetail";
import { fetchArticle } from "@/features/article";

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

  const article = await fetchArticle(host, id);

  return <ArticleDetail article={article} />;
}
