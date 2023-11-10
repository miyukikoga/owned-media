import { headers } from "next/headers";
import { Home } from "../components/templates/Home";
import { fetchArticles } from "../features/articles";
import { fetchCategories } from "@/features/categories";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

export default async function Page(): Promise<JSX.Element> {
  const host = headers().get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticles(host);
  const categories = await fetchCategories(host);

  return <Home articles={articles} categories={categories} />;
}
