import React from "react";
import { ArticleCard } from "../../molecules/ArticleCard";
import { Articles } from "../../../types/articles";
import styles from "./articleCards.module.css";

type ArticleCardsProps = {
  articles: Articles;
};

export const ArticleCards = ({ articles }: ArticleCardsProps) => {
  return (
    <div className={styles.articleCards}>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};
