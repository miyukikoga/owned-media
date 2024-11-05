import { headers } from "next/headers";
import { Home } from "@/components/templates/Home";
import { fetchArticles } from "@/features/articles";

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

  return <Home articles={articles} />;
}
