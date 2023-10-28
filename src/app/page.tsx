import { createClient } from "microcms-js-sdk";
import { Articles } from "../components/organisms/Articles";
import { Header } from "../components/organisms/Header";
import { ArticlesType } from "../types/articles";
import { mediaName } from "../constants/blog";
import style from "./page.module.scss";

async function fetchArticles(): Promise<ArticlesType> {
  if (
    !process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN ||
    !process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY
  )
    throw new Error("No environment variables");

  const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY,
  });

  const res = await client.get({
    endpoint: "blogs",
  });

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.contents.map((element: any) => {
    // HTMLのタグを削除する
    const regex = /(<([^>]+)>)/gi;
    const content = element.content.replace(regex, "");

    return {
      id: element.id,
      title: element.title,
      content: content,
      category: element.category.name,
      createdAt: new Date(element.createdAt),
      eyeCatch: element.eyecatch.url,
    };
  });
}

export default async function Page() {
  const articles = await fetchArticles();

  return (
    <div className={style.page}>
      <Header>{mediaName}</Header>
      <Articles articles={articles} />
    </div>
  );
}
