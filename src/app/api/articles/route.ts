import { createClient } from "microcms-js-sdk";

export async function GET() {
  if (!process.env.MICRO_CMS_DOMAIN || !process.env.MICRO_CMS_API_KEY)
    throw new Error("No environment variables");

  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
  });

  const res = await client.get({
    endpoint: "blogs",
  });

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  const data = res.contents.map((element: any) => {
    // HTMLのタグを削除する
    const regex = /(<([^>]+)>)/gi;
    const content = element.content.replace(regex, "");

    return {
      id: element.id,
      title: element.title,
      content: content,
      category: element.category.name,
      createdAt: element.createdAt,
      eyeCatch: element.eyecatch.url,
    };
  });

  return Response.json(data);
}
