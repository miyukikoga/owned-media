import parse from "html-react-parser";
import { Text } from "@/components/atoms/Text";
import { AppImage } from "@/components/atoms/AppImage";
import { Article } from "@/types/articles";

type Props = {
  article: Article;
};

export const ArticleContent = ({ article }: Props): JSX.Element => {
  return (
    <section>
      <div className="col-span-1 flex justify-center items-center m-5">
        <AppImage alt="article" src={article.eyeCatch} />
      </div>
      <Text>{parse(article.content)}</Text>
    </section>
  );
};
