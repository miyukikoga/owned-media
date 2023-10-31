import { ArticleCard } from "../../molecules/ArticleCard";
import { Articles } from "../../../types/articles";
import styles from "./articleCards.module.css";

type Props = {
  articles: Articles;
};

export const ArticleCards = ({ articles }: Props): JSX.Element => {
  return (
    <div className={styles.articleCards}>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};
