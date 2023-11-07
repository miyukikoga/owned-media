import { headers } from "next/headers";
import { ArticleCards } from "../components/organisms/ArticleCards";
import { Header } from "../components/organisms/Header";
import {
  GoogleTagManager,
  GoogleTagManagerId,
} from "../components/atoms/GoogleTagManager";
import { googleTagManagerId } from "../features/gtm";
import { Articles } from "../types/articles";
import { mediaName } from "../constants/media";
import style from "./page.module.css";

class ExtractHostNameError extends Error {
  static {
    this.prototype.name = "ExtractHostNameError";
  }
}

async function fetchArticles(host: string): Promise<Articles> {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/articles`);
  return await response.json();
}

export default async function Page(): Promise<JSX.Element> {
  const host = headers().get("host");
  if (!host) throw new ExtractHostNameError("Failed to get host");

  const articles = await fetchArticles(host);

  return (
    <div className={style.page}>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Header>{mediaName}</Header>
      <ArticleCards articles={articles} />
    </div>
  );
}
