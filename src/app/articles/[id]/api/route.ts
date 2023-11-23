import { createClient } from "microcms-js-sdk";
import { isMicroCMSContent } from "@/features/microCms";

class EnvironmentVariablesError extends Error {
  static {
    this.prototype.name = "EnvironmentVariablesError";
  }
}

class FetchBlogsDetailError extends Error {
  static {
    this.prototype.name = "FetchBlogsError";
  }
}

class FetchedBlogsDetailTypeError extends Error {
  static {
    this.prototype.name = "FetchedBlogsTypeError";
  }
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!process.env.MICRO_CMS_DOMAIN || !process.env.MICRO_CMS_API_KEY)
    throw new EnvironmentVariablesError("No environment variables");

  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
  });

  const articleId = params.id;
  const res = await client.get({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: `blogs/${articleId}`,
  });

  if (!res) {
    throw new FetchBlogsDetailError(`Failed to fetch data blogs/${articleId}`);
  }

  if (!isMicroCMSContent(res))
    throw new FetchedBlogsDetailTypeError(
      `GET blogs/${articleId} APIのレスポンスの型が間違っています`
    );

  const responseBody = {
    id: res.id,
    title: res.title,
    content: res.content,
    category: { id: res.category.id, name: res.category.name },
    createdAt: res.publishedAt,
    updatedAt: res.updatedAt,
    eyeCatch: res.eyecatch.url,
  };

  return Response.json(responseBody);
}
