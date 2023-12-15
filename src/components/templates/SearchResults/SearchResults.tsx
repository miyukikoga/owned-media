import { Text } from "@/components/atoms/Text";
import { ArticleCards } from "@/components/organisms/ArticleCards";
import { TopicPath } from "@/components/organisms/TopicPath";
import { Articles } from "@/types/articles";

type Props = {
  articles: Articles;
};

export const SearchResults = ({ articles }: Props): JSX.Element => {
  if (articles.length === 0) {
    return (
      <div>
        <Text>該当する記事がありませんでした。</Text>
      </div>
    );
  }

  const pathList = [
    { name: "ホーム", href: "/" },
    {
      name: articles[0].category.name,
      href: `/categories/${articles[0].category.id}`,
    },
  ];
  return (
    <div className="mx-1">
      <TopicPath pathList={pathList} />
      <ArticleCards articles={articles} />
    </div>
  );
};
