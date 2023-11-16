import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../Home";
import { Articles } from "../../../../types/articles";

const contents = [
  {
    id: "o5gu6ibjvb",
    title: "ねことたけのこ",
    content: "ねこがたけのこを食べる",
    category: { id: "q2r8qu6t-l", name: "グルメ" },
    createdAt: "2023-04-04T09:23:31.664Z",
    updatedAt: "2023-10-10T09:23:31.664Z",
    eyeCatch:
      "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
  },
  {
    id: "m2gu6ibjvb",
    title: "いぬとさといも",
    content: "いぬがさといもを食べる",
    category: { id: "e3r8qu6t-l", name: "アニマル" },
    createdAt: "2023-05-05T09:23:31.664Z",
    updatedAt: "2023-10-10T09:23:31.664Z",
    eyeCatch:
      "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
  },
] as Articles;

describe("<Home />", () => {
  it("対象のHomeを取得できる", () => {
    render(<Home articles={contents} />);
    const articles = screen.getAllByRole("article");
    for (const [index, article] of Object.entries(articles)) {
      expect(article).toBeInTheDocument();

      const content = contents[Number(index)];
      expect(screen.getByText(content.title)).toBeInTheDocument();
      expect(screen.getByText(content.content)).toBeInTheDocument();
      expect(screen.getByText(content.category.name)).toBeInTheDocument();
    }
  });
});
