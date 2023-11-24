import { Categories } from "../types/categories";

export async function fetchCategories(host: string): Promise<Categories> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/categories`, {
    next: { revalidate: 1800 },
  });
  return await response.json();
}
