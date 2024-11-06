import { Text } from "@/app/components/elements/Text";
import { ArticleCards } from "@/features/articles/components/ArticleCards";
import { TopicPath } from "@/features/articles/components/TopicPath";
import { Articles } from "@/features/articles/types/articleTypes";

type Props = {
  articles: Articles;
};

export const SearchResults = ({ articles }: Props) => {
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
