import { type ReactNode } from "react";
import { ArticleCards } from "../../organisms/ArticleCards";
import { Header } from "../../organisms/Header";
import { mediaName } from "../../../constants/media";
import { Articles } from "../../../types/articles";
import style from "./home.module.css";

type Props = {
  articles: Articles;
};

export const Home = ({ articles }: Props): JSX.Element => {
  return (
    <div className={style.home}>
      <Header>{mediaName}</Header>
      <ArticleCards articles={articles} />
    </div>
  );
};
