import { Articles } from "@/features/articles/types/articleTypes";

export async function fetchArticles(host: string): Promise<Articles> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/articles`, {
    next: { revalidate: 1800 },
  });
  return await response.json();
}

export async function fetchArticlesByCategory(
  host: string,
  categoryId: string
): Promise<Articles> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(
    `${protocol}://${host}/api/articles?category=${categoryId}`,
    {
      next: { revalidate: 1 },
    }
  );
  return await response.json();
}
