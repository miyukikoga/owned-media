import { headers } from "next/headers";
import { ArticleCards } from "../components/organisms/ArticleCards";
import { Header } from "../components/organisms/Header";
import { fetchArticles } from "../features/articles";
import { mediaName } from "../constants/media";
import style from "./page.module.css";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

export default async function Page(): Promise<JSX.Element> {
  const host = headers().get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticles(host);

  return (
    <div className={style.page}>
      <Header>{mediaName}</Header>
      <ArticleCards articles={articles} />
    </div>
  );
}
