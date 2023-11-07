import { createClient } from "microcms-js-sdk";
import { MicroCMSContent } from "../../../types/microCms";

class EnvironmentVariablesError extends Error {
  static {
    this.prototype.name = "EnvironmentVariablesError";
  }
}

class FetchBlogsError extends Error {
  static {
    this.prototype.name = "FetchBlogsError";
  }
}

class FetchedBlogsTypeError extends Error {
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
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
  });

  if (!res) {
    throw new FetchBlogsError("Failed to fetch data");
  }

  const responseBody = res.contents.map((element: unknown) => {
    if (!isMicroCMSContent(element))
      throw new FetchedBlogsTypeError(
        "GET blogs APIのレスポンスの型が間違っています"
      );

    // HTMLのタグを削除する
    const regex = /(<([^>]+)>)/gi;
    const content = element.content.replace(regex, "");

    return {
      id: element.id,
      title: element.title,
      content: content,
      category: element.category.name,
      createdAt: element.publishedAt,
      eyeCatch: element.eyecatch.url,
    };
  });

  return Response.json(responseBody);
}

/**
 * microCMS APIから返却されたコンテンツデータの型ガードを行う
 * @param content コンテンツデータ
 * @returns microCMS APIから返却されたコンテンツデータかどうか
 */
const isMicroCMSContent = (content: unknown): content is MicroCMSContent => {
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
