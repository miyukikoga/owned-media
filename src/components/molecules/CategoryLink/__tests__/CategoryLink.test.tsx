import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoryLink } from "../CategoryLink";
import { Category } from "../../../../types/categories";

const category = {
  id: "hu7ctlsefzq",
  name: "グルメ",
} as Category;

describe("<CategoryLink />", () => {
  it("テキストリンクから対象のカテゴリーを取得できる", () => {
    render(<CategoryLink category={category} />);
    const link = screen.getByRole("link", { name: "グルメ" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/categories/${category.id}`);
  });
});
