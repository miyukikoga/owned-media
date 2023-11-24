import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeaderMenu } from "@/components/molecules/HeaderMenu";

describe("<HeaderMenu />", () => {
  it("テキストから対象のHeaderMenuを取得できる", () => {
    render(<HeaderMenu />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/profile`);
  });
});
