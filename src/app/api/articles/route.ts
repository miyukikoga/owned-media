import { createClient } from "microcms-js-sdk";
import { isMicroCMSContent } from "@/libs/microCms";

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

export async function GET(req: Request) {
  if (!process.env.MICRO_CMS_DOMAIN || !process.env.MICRO_CMS_API_KEY)
    throw new EnvironmentVariablesError("No environment variables");

  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
  });

  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("category");

  const endpoint = categoryId
    ? `blogs?filters=category[equals]${categoryId}`
    : "blogs";

  const res = await client.get({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: endpoint,
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
      category: { id: element.category.id, name: element.category.name },
      createdAt: element.publishedAt,
      updatedAt: element.updatedAt,
      eyeCatch: element.eyecatch.url,
    };
  });

  return Response.json(responseBody);
}
