import { ArticleCards } from "@/components/organisms/ArticleCards";
import { Articles } from "@/types/articles";

type Props = {
  articles: Articles;
};

export const Home = ({ articles }: Props) => {
  return (
    <div className="mx-3">
      <ArticleCards articles={articles} />
    </div>
  );
};
