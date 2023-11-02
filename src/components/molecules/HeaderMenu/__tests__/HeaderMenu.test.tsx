import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeaderMenu } from "../HeaderMenu";

describe("<HeaderMenu />", () => {
  it("表示する", () => {
    render(<HeaderMenu />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/profile`);
  });
});
