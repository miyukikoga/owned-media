import parse from "html-react-parser";
import { Text } from "@/app/components/elements/Text";
import { AppImage } from "@/app/components/elements/AppImage";
import { Article } from "@/features/articles/types/articleTypes";

type Props = {
  article: Article;
};

export const ArticleContent = ({ article }: Props) => {
  return (
    <section>
      <div className="col-span-1 flex justify-center items-center m-5">
        <AppImage alt="article" src={article.eyeCatch} />
      </div>
      <Text>{parse(article.content)}</Text>
    </section>
  );
};
