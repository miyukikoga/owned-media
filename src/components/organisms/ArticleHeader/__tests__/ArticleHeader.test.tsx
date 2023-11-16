import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleHeader } from "@/components/organisms/ArticleHeader";
import { Article } from "@/types/articles";
import { formatArticleCreatedAt } from "@/features/article";

const content = {
  id: "o5gu6ibjvb",
  title: "ねことたけのこ",
  content: "ねこがたけのこを食べる",
  category: { id: "q2r8qu6t-l", name: "グルメ" },
  createdAt: "2023-04-04T09:23:31.664Z",
  updatedAt: "2023-10-10T09:23:31.664Z",
  eyeCatch:
    "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
} as Article;

describe("<ArticleHeader />", () => {
  it("テキストから対象のArticleHeaderを取得できる", () => {
    render(<ArticleHeader article={content} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const formattedCreatedAt = formatArticleCreatedAt(
      new Date(content.createdAt)
    );
    console.log({ formattedCreatedAt });
    expect(
      screen.getByText(`投稿日 ${formattedCreatedAt}`)
    ).toBeInTheDocument();

    const formattedUpdatedAt = formatArticleCreatedAt(
      new Date(content.updatedAt)
    );
    expect(
      screen.getByText(`最終更新日 ${formattedUpdatedAt}`)
    ).toBeInTheDocument();
  });
});
