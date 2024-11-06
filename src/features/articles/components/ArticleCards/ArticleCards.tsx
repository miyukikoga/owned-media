import { ArticleCard } from "@/features/articles/components/ArticleCard";
import { Articles } from "@/features/articles/types/articleTypes";

type Props = {
  articles: Articles;
};

export const ArticleCards = ({ articles }: Props) => {
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};
