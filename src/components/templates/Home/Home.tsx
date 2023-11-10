import { ArticleCards } from "../../organisms/ArticleCards";
import { Header } from "../../organisms/Header";
import { mediaName } from "../../../constants/media";
import { Articles } from "../../../types/articles";
import { Categories } from "@/types/categories";

type Props = {
  articles: Articles;
  categories: Categories;
};

export const Home = ({ articles, categories }: Props): JSX.Element => {
  return (
    <div className="mx-3">
      <Header categories={categories}>{mediaName}</Header>
      <ArticleCards articles={articles} />
    </div>
  );
};
