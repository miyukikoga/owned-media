import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../Logo";

describe("<Logo />", () => {
  it("テキストから対象のLogoを取得できる", () => {
    render(<Logo>メディアタイトル</Logo>);
    expect(screen.getByText("メディアタイトル")).toBeInTheDocument();
  });
});
