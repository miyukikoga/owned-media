import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../Logo";

describe("<Text />", () => {
  it("表示する", () => {
    render(<Logo>すみっコ</Logo>);
    expect(screen.getByText("すみっコ")).toBeInTheDocument();
  });
});
