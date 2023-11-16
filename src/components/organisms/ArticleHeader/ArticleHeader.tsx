import { Text } from "@/components/atoms/Text";
import { Time } from "@/components/atoms/Time";
import { AppLink } from "@/components/atoms/AppLink";
import { Article } from "@/types/articles";
import { formatArticleCreatedAt } from "@/features/article";

type Props = {
  article: Article;
};

export const ArticleHeader = ({ article }: Props): JSX.Element => {
  const formattedCreatedAt = formatArticleCreatedAt(
    new Date(article.createdAt)
  );
  const formattedUpdatedAt = formatArticleCreatedAt(
    new Date(article.updatedAt)
  );

  return (
    <div>
      <h1>
        <Text size="large" weight="bold">
          {article.title}
        </Text>
      </h1>
      <div className="m-2">
        <div className="mt-2">
          <AppLink href={`/categories/${article.category.id}`}>
            <span className="bg-gray-400 rounded">
              <Text size="small">{article.category.name}</Text>
            </span>
          </AppLink>
        </div>
        <div>
          <Time size="small" dateTime={article.createdAt}>
            最終更新日 {formattedUpdatedAt}
          </Time>
        </div>
        <div>
          <Time size="small" dateTime={article.createdAt}>
            投稿日 {formattedCreatedAt}
          </Time>
        </div>
      </div>
    </div>
  );
};
