import { format } from "date-fns";
import { Article } from "@/types/articles";

export async function fetchArticle(
  host: string,
  articleId: string
): Promise<Article> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(
    `${protocol}://${host}/articles/${articleId}/api/`,
    {
      next: { revalidate: 1800 },
    }
  );
  return await response.json();
}

/**
 * 作成日をフォーマットする
 * @param date 日付
 * @returns フォーマットされた日付
 */
export const formatArticleCreatedAt = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};
