import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../Logo";

describe("<Text />", () => {
  it("表示する", () => {
    render(<Logo>テスト</Logo>);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});
