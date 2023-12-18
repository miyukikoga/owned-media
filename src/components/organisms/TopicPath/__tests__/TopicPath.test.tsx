import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TopicPath } from "@/components/organisms/TopicPath";

describe("<TopicPath />", () => {
  const pathList = [
    { name: "ホーム", href: "/" },
    {
      name: "アニマル",
      href: "/categories/hpzd5iyz7h",
    },
  ];

  it("リンクテキストから対象のTopicPathを取得できる", () => {
    render(<TopicPath pathList={pathList} />);
    const linkHome = screen.getByRole("link", { name: "ホーム" });
    expect(linkHome).toBeInTheDocument();

    const linkCategory = screen.getByRole("link", { name: "アニマル" });
    expect(linkCategory).toBeInTheDocument();
  });
});
