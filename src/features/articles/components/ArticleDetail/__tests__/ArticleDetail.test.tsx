import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleDetail } from "@/features/articles/components/ArticleDetail";
import { Article } from "@/features/articles/types/articleTypes";

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

describe("<ArticleDetail />", () => {
  it("対象のArticleDetailを取得できる", () => {
    render(<ArticleDetail article={content} />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();

    expect(screen.getByText(content.title)).toBeInTheDocument();
    expect(screen.getByText(content.content)).toBeInTheDocument();
    expect(screen.getByText(content.category.name)).toBeInTheDocument();
  });
});
