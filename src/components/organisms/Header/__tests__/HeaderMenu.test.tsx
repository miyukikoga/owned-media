import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Categories } from "@/types/categories";

const categories = [
  { id: "q2r8qu6t-l", name: "グルメ" },
  { id: "hpzd5iyz7h", name: "アニマル" },
] as Categories;

describe("<HeaderMenu />", () => {
  it("対象のHeaderMenuを取得できる", () => {
    render(<Header categories={categories}>テスト</Header>);
    expect(screen.getByText("テスト")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/profile`);
  });
});
