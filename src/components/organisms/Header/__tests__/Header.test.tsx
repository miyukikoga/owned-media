import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/organisms/Header";

const categories = [
  { id: "q2r8qu6t-l", name: "グルメ" },
  { id: "hpzd5iyz7h", name: "アニマル" },
];

describe("<Header />", () => {
  it("対象のHeaderを取得できる", () => {
    render(<Header categories={categories}>タイトル</Header>);
    expect(screen.getByText("タイトル")).toBeInTheDocument();
  });
});
