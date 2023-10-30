import React from "react";
import { ArticleCard } from "../../molecules/Article";
import { Articles } from "../../../types/articles";
import styles from "./articles.module.css";

type ArticleCardsProps = {
  articles: Articles;
};

export const ArticleCards = ({ articles }: ArticleCardsProps) => {
  return (
    <div className={styles.articles}>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};
