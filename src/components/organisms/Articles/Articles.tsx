import React from "react";
import { Article } from "../../molecules/Article";
import { ArticlesType } from "../../../types/articles";
import styles from "./articles.module.scss";

type ArticlesProps = {
  articles: ArticlesType;
};

export const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className={styles.articles}>
      {articles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </div>
  );
};
