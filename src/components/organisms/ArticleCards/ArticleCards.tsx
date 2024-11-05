import { ArticleCard } from "@/components/molecules/ArticleCard";
import { Articles } from "@/types/articles";

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
