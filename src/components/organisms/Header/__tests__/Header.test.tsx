import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/organisms/Header";

describe("<Header />", () => {
  it("対象のHeaderを取得できる", () => {
    render(<Header>タイトル</Header>);
    expect(screen.getByText("タイトル")).toBeInTheDocument();
  });
});
