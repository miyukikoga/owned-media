import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ArticleCard, formatArticleCreatedAt } from "../ArticleCard";
import { Article } from "../../../../types/articles";

const content = {
  id: "o5gu6ibjvb",
  title: "ねことたけのこ",
  content: "ねこがたけのこを食べる",
  category: "グルメ",
  createdAt: "2023-04-05T09:23:31.664Z",
  eyeCatch:
    "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
} as Article;

describe("<ArticleCard />", () => {
  it("表示する", () => {
    render(<ArticleCard article={content} />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(screen.getByText(content.title)).toBeInTheDocument();
    expect(screen.getByText(content.content)).toBeInTheDocument();
    expect(screen.getByText(content.category)).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/article/${content.id}`);
    }

    const formattedDate = formatArticleCreatedAt(new Date(content.createdAt));
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it("いいねをクリックする", async () => {
    render(<ArticleCard article={content} />);
    await userEvent.click(screen.getByText("BsHandThumbsUp"));
    expect(screen.getByText("BsHandThumbsUpFill")).toBeInTheDocument();
  });
});

describe("formatArticleCreatedAt()", () => {
  it("", () => {
    const date = new Date("2023-04-05T09:23:31.664Z");
    expect(formatArticleCreatedAt(date)).toBe("2023-04-05");
  });
});
