import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppLink } from "../AppLink";

describe("<AppLink />", () => {
  it("リンクテキストから対象のAppLinkを取得できる", () => {
    render(<AppLink href="/">プロフィール</AppLink>);
    const link = screen.getByRole("link", { name: "プロフィール" });
    expect(link).toBeInTheDocument();
  });
});
