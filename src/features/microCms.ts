import { MicroCMSContent } from "@/types/microCms";

/**
 * microCMS APIから返却されたコンテンツデータの型ガードを行う
 * @param content コンテンツデータ
 * @returns microCMS APIから返却されたコンテンツデータかどうか
 */
export const isMicroCMSContent = (
  content: unknown
): content is MicroCMSContent => {
  if (!content) return false;
  return (
    content.hasOwnProperty("id") &&
    content.hasOwnProperty("createdAt") &&
    content.hasOwnProperty("updatedAt") &&
    content.hasOwnProperty("publishedAt") &&
    content.hasOwnProperty("revisedAt") &&
    content.hasOwnProperty("title") &&
    content.hasOwnProperty("content") &&
    content.hasOwnProperty("eyecatch") &&
    content.hasOwnProperty("category")
  );
};
