import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CategoryLink } from "@/features/categories/components/CategoryLink";
import { Category } from "@/features/categories/types/categoryTypes";

const category = {
  id: "hu7ctlsefzq",
  name: "グルメ",
} as Category;

const onClickHandler = () => {
  console.log("onClickHandler");
};

describe("<CategoryLink />", () => {
  it("テキストリンクから対象のカテゴリーを取得できる", () => {
    render(<CategoryLink category={category} handleClick={onClickHandler} />);
    const link = screen.getByRole("link", { name: "グルメ" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/categories/${category.id}`);
  });
});
