import { createClient } from "microcms-js-sdk";
import { MicroCMSCategory } from "@/types/microCms";

class EnvironmentVariablesError extends Error {
  static {
    this.prototype.name = "EnvironmentVariablesError";
  }
}

class FetchCategoriesError extends Error {
  static {
    this.prototype.name = "FetchBlogsError";
  }
}

class FetchedCategoriesTypeError extends Error {
  static {
    this.prototype.name = "FetchedBlogsTypeError";
  }
}

export async function GET() {
  if (!process.env.MICRO_CMS_DOMAIN || !process.env.MICRO_CMS_API_KEY)
    throw new EnvironmentVariablesError("No environment variables");

  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
  });

  const res = await client.get({
    endpoint: "categories",
  });
  if (!res) {
    throw new FetchCategoriesError("Failed to fetch data");
  }

  const responseBody = res.contents.map((element: unknown) => {
    if (!isMicroCMSCategory(element))
      throw new FetchedCategoriesTypeError(
        "GET categories APIのレスポンスの型が間違っています"
      );

    return {
      id: element.id,
      name: element.name,
    };
  });

  return Response.json(responseBody);
}

/**
 * microCMS APIから返却されたコンテンツデータの型ガードを行う
 * @param content コンテンツデータ
 * @returns microCMS APIから返却されたコンテンツデータかどうか
 */
const isMicroCMSCategory = (content: unknown): content is MicroCMSCategory => {
  if (!content) return false;
  return (
    content.hasOwnProperty("id") &&
    content.hasOwnProperty("createdAt") &&
    content.hasOwnProperty("updatedAt") &&
    content.hasOwnProperty("publishedAt") &&
    content.hasOwnProperty("revisedAt") &&
    content.hasOwnProperty("name")
  );
};
