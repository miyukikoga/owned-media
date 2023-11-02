import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppLink } from "../AppLink";

describe("<MyLink />", () => {
  it("表示する", () => {
    render(<AppLink href="/">テスト</AppLink>);
    const a = screen.getByRole("link", { name: "テスト" });
    expect(a).toBeInTheDocument();
  });
});