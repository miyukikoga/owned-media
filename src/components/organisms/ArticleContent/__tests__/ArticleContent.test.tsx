import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ArticleContent } from "../ArticleContent";
import { Article } from "../../../../types/articles";

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

describe("<ArticleContent />", () => {
  it("テキストから対象のArticleContentを取得できる", () => {
    render(<ArticleContent article={content} />);
    expect(screen.getByText(content.content)).toBeInTheDocument();
  });

  it("altテキストから対象のArticleContentを取得できる", () => {
    render(<ArticleContent article={content} />);
    const img = screen.getByRole("img", { name: "article" });
    expect(img).toBeInTheDocument();
  });
});
