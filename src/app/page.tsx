import { headers } from "next/headers";
import { ArticleCards } from "../components/organisms/ArticleCards";
import { Header } from "../components/organisms/Header";
import { Articles } from "../types/articles";
import { mediaName } from "../constants/media";
import style from "./page.module.css";

async function fetchArticles(host: string): Promise<Articles> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/articles`);
  return await response.json();
}

export default async function Page() {
  const host = headers().get("host");
  if (!host) throw new Error("Failed to get host");

  const articles = await fetchArticles(host);

  return (
    <div className={style.page}>
      <Header>{mediaName}</Header>
      <ArticleCards articles={articles} />
    </div>
  );
}
