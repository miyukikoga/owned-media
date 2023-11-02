import { Articles } from "../types/articles";

export async function fetchArticles(host: string): Promise<Articles> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/articles`);
  return await response.json();
}