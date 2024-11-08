import { BsHandThumbsUpFill } from "react-icons/bs";
import { ArticleHeader } from "@/features/articles/components/ArticleHeader";
import { ArticleContent } from "@/features/articles/components/ArticleContent";
import { Article } from "@/features/articles/types/articleTypes";

type Props = {
  article: Article;
};

export const ArticleDetail = ({ article }: Props) => {
  return (
    <article className="md:grid grid-cols-4 mx-5">
      <div className="col-span-1" />
      <div className="col-span-2">
        <div className="my-5 mb-10">
          <ArticleHeader article={article} />
        </div>
        <div className="mb-20">
          <ArticleContent article={article} />
        </div>
        <div className="border-transparent bg-white shadow rounded-full p-3 fixed right-10 bottom-10">
          <BsHandThumbsUpFill
            color="#06B6D4"
            size="2em"
            title="BsHandThumbsUpFill"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="col-span-1" />
    </article>
  );
};
