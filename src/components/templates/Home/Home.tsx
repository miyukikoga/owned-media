import { ArticleCards } from "../../organisms/ArticleCards";
import { Articles } from "../../../types/articles";

type Props = {
  articles: Articles;
};

export const Home = ({ articles }: Props): JSX.Element => {
  return (
    <div className="mx-10">
      <ArticleCards articles={articles} />
    </div>
  );
};
